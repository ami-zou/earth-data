import datasets
from transformers import AutoTokenizer, AutoProcessor, AutoModelForZeroShotImageClassification
from qdrant_client import QdrantClient
from qdrant_client.http import models
from tqdm import tqdm
import numpy as np
import os
from PIL import Image
import rasterio

client = QdrantClient("localhost", port=6333)
print("[INFO] Client created...")

#loading the dataset

print("[INFO] Loading dataset...")
ds = datasets.load_dataset('arampacha/rsicd', split='train')

#loading the model 
print("[INFO] Loading the model...")
model_name = "openai/clip-vit-base-patch32"
tokenizer = AutoTokenizer.from_pretrained(model_name)
processor = AutoProcessor.from_pretrained(model_name)
model = AutoModelForZeroShotImageClassification.from_pretrained(model_name)

#Creating a qdrant collection in qdrant database to store this image embeddings
print("[INFO] Creating qdrant data collection...")
client.create_collection(
    collection_name="satellite_img_db",
    vectors_config=models.VectorParams(size=512, distance=models.Distance.COSINE),

)

#creating records/vectors 
print("[INFO] Creating a data collection...")
records = []
for idx, sample in tqdm(enumerate(ds), total=len(ds)):
    processed_img = processor(text=None, images = sample['image'], return_tensors="pt")['pixel_values']
    img_embds = model.get_image_features(processed_img).detach().numpy().tolist()[0]
    img_px = list(sample['image'].getdata())
    img_size = sample['image'].size 
    records.append(models.Record(id=idx, vector=img_embds, payload={"pixel_lst":img_px, "img_size": img_size, "captions": sample['captions']}))


#uploading the records to client
print("[INFO] Uploading data records to data collection...")
#It's better to upload chunks of data to the VectorDB 
for i in range(30,len(records), 30):
    print(f"finished {i}")
    client.upload_records(
        collection_name="satellite_img_db",
        records=records[i-30:i],
    )

print("[INFO] Successfully uploaded data records to data collection!")