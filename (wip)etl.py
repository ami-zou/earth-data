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

# Step 1: Load Geospatial Time-Series Data
image_data = {}  # Dictionary to store images by location and date
for filename in os.listdir(image_dir):
    with rasterio.open(os.path.join(image_dir, filename)) as src:
        image = src.read(1)  # Read the first band
        metadata = src.meta
        location = metadata.get("crs")  # Extract location info if available
        date = datetime.strptime(
            filename.split("_")[1], "%Y%m%d"
        )  # Assuming format e.g., "image_20220101.tif"
        image_data[(location, date)] = image

# Step 2: Load Tabular Data from CSV
csv_data = {}
for filename in os.listdir(csv_dir):
    df = pd.read_csv(os.path.join(csv_dir, filename))
    csv_data[filename] = df

# Step 3: Load Text Data
text_data = []
for filename in os.listdir(text_dir):
    with open(os.path.join(text_dir, filename), "r") as file:
        text_data.append(file.read())

# All data is now loaded in memory
from torchvision import models, transforms

# Load pretrained ResNet model
image_model = models.resnet50(pretrained=True)
image_model = torch.nn.Sequential(
    *(list(image_model.children())[:-1])
)  # Remove final classification layer

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
def get_image_embedding(image):
    image_tensor = preprocess(image).unsqueeze(0)  # Add batch dimension
    with torch.no_grad():
        embedding = image_model(image_tensor).squeeze().numpy()
    return embedding


# Convert all images to embeddings
image_embeddings = {
    key: get_image_embedding(image) for key, image in image_data.items()
}
