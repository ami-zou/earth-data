import os
import pandas as pd
import numpy as np
from transformers import AutoTokenizer, AutoModel
import torch
import rasterio  # For geospatial data
from datetime import datetime
import faiss

# Define directories
image_dir = "data/geospatial"
csv_dir = "data/csv"
text_dir = "data/text"

import rasterio
import numpy as np

image_data = {}  # Dictionary to store images by location and date
for filename in os.listdir(image_dir):
    with rasterio.open(os.path.join(image_dir, filename)) as src:
        raster_data = src.read(1)  # Read the first band
        metadata = src.meta

        print("Metadata:", metadata)
        print("Data shape:", raster_data.shape)

        # Example: Show coordinate reference system
        crs = src.crs
        print("CRS:", crs)

        name = filename.split(".")[0]
        image_data[(crs, name)] = raster_data

print(f"Successfully ETL tif data of length: {len(image_data)}")

from torchvision import models, transforms

# Check if a GPU is available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load pretrained ResNet model
resnet_model = models.resnet50(
    weights=models.ResNet50_Weights.DEFAULT
)  # pretrained=True)
resnet_model = torch.nn.Sequential(
    *(list(resnet_model.children())[:-1])
)  # Remove final classification layer
resnet_model = resnet_model.to(device)
resnet_model.eval()

# Define preprocessing
preprocess = transforms.Compose(
    [
        transforms.ToPILImage(),
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ]
)


# Image embedding function
def get_image_embedding(image_array):
    # Ensure raster data is in a suitable format for preprocessing
    if image_array.dtype != np.uint8:
        image_array = (
            255 * (image_array - image_array.min()) / (np.ptp(image_array))
        ).astype(np.uint8)

    # Stack the image to 3 channels to match ResNet's input
    image_array = np.stack([image_array] * 3, axis=-1)
    processed_image = (
        preprocess(image_array).unsqueeze(0).to(device)
    )  # Move to GPU if available

    # Generate embedding
    with torch.no_grad():
        embedding = resnet_model(processed_image).squeeze().cpu().numpy()
    return embedding


# Create embeddings for each image and store in a dictionary
image_embeddings = {}
for (crs, name), raster_data in image_data.items():
    embedding = get_image_embedding(raster_data)
    image_embeddings[(crs, name)] = embedding

print(f"Successfully added embeddings for {len(image_embeddings)} data")

# Convert embeddings to a numpy array for FAISS and keep a list of metadata
embedding_matrix = np.array(list(image_embeddings.values())).astype("float32")
image_keys = list(image_embeddings.keys())  # Store the (crs, name) keys for reference

# Initialize FAISS index for L2 distance (Euclidean distance)
dimension = embedding_matrix.shape[1]  # Number of features in each embedding
index = faiss.IndexFlatL2(dimension)
index.add(embedding_matrix)  # Add all embeddings to the index

# Check that the index has been populated
print("Number of images indexed:", index.ntotal)


# Semantic search function to retrieve top-k similar images
def semantic_search(query_image_array, k=5):
    # Generate embedding for the query image
    query_embedding = get_image_embedding(query_image_array).astype("float32")

    # Perform FAISS search
    D, I = index.search(np.array([query_embedding]), k)  # D = distances, I = indices

    # Retrieve top-k metadata based on indices
    top_k_files = [image_keys[idx] for idx in I[0]]
    top_k_distances = D[0]

    return list(zip(top_k_files, top_k_distances))  # Return metadata with distances


# Example search for image similarity (using an existing image as query)
query_image_key = list(image_data.keys())[0]  # Taking the first image as an example
query_image = image_data[query_image_key]  # Get the raster data

results = semantic_search(query_image, k=5)
print("Top 5 similar images:", results)
