import datasets
from transformers import AutoTokenizer, AutoProcessor, AutoModelForZeroShotImageClassification
from qdrant_client import QdrantClient
from qdrant_client.http import models
from tqdm import tqdm
import numpy as np
import os
from PIL import Image
import rasterio
import json
import glob

client = QdrantClient("localhost", port=6333)
print("[INFO] Client created...")

def preprocess_tif(tif_path, target_size=(224, 224)):
    with rasterio.open(tif_path) as src:
        # Calculate NDVI or other drought indices if applicable
        img_array = src.read()
        
        # Convert data type to uint8 if it's not already
        if img_array.dtype != np.uint8:
            # Normalize the data to 0-255 range
            img_array = ((img_array - img_array.min()) * (255.0 / (img_array.max() - img_array.min()))).astype(np.uint8)
        
        # Handle single band images
        if img_array.shape[0] == 1:
            # Repeat the single band three times to create RGB
            img_array = np.repeat(img_array, 3, axis=0)
        # Handle multiple bands
        elif img_array.shape[0] > 3:
            img_array = img_array[:3]  # Take first 3 bands
            
        # Ensure proper shape and range
        img_array = np.clip(img_array, 0, 255)
        
        # Convert to PIL Image
        img = Image.fromarray(np.moveaxis(img_array, 0, -1))
        img = img.resize(target_size)
        return img

def load_metadata_files(metadata_dir):
    metadata_files = []
    for file in glob.glob(os.path.join(metadata_dir, '*.json')):
        with open(file, 'r') as f:
            data = json.load(f)
            # Handle different JSON structures
            if 'metadata' in data:
                # For summary files
                metadata_files.append({
                    'metadata': data['metadata'],
                    'drought': data.get('drought', {})
                })
            elif 'results' in data:
                # For population files
                metadata_files.append({
                    'metadata': {
                        'date': data.get('results', {}).get('data', {}).get('report', {}).get('date'),
                        'area_of_interest': data.get('results', {}).get('data', {}).get('report', {}).get('area_of_interest')
                    },
                    'drought': data.get('results', {}).get('data', {}).get('report', {}).get('drought', {})
                })
    return metadata_files

def load_tif_images(directory_path, metadata_dir=None):
    images = []
    
    # Load all metadata files if provided
    metadata_by_country = {}
    if metadata_dir and os.path.exists(metadata_dir):
        metadata_by_country = load_metadata_files(metadata_dir)
    
    for filename in os.listdir(directory_path):
        if filename.endswith('.tif'):
            country_code = filename[:3]  # Extract country code from filename
            tif_path = os.path.join(directory_path, filename)
            
            try:
                # Add debug information
                with rasterio.open(tif_path) as src:
                    print(f"Processing {filename}:")
                    print(f"  Country: {country_code}")
                    print(f"  Shape: {src.shape}")
                    print(f"  Data type: {src.dtypes}")
                    print(f"  Number of bands: {src.count}")
                
                img = preprocess_tif(tif_path)
                
                # Create image data dictionary
                image_data = {
                    'image': img,
                    'filename': filename,
                    'country_code': country_code
                }
                
                # Add metadata if available for this country
                if country_code in metadata_by_country:
                    image_data['metadata'] = metadata_by_country[country_code]
                else:
                    print(f"Warning: No metadata found for country {country_code}")
                
                images.append(image_data)
                
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")
                continue
    
    return images

print("[INFO] Loading dataset...")
ds = load_tif_images(
    './data/geospatial', 
    metadata_dir='./data/metadata'  # Directory containing country metadata files
)

#loading the model 
print("[INFO] Loading the model...")
model_name = "openai/clip-vit-base-patch32"
tokenizer = AutoTokenizer.from_pretrained(model_name)
processor = AutoProcessor.from_pretrained(model_name)
model = AutoModelForZeroShotImageClassification.from_pretrained(model_name)

# Get the current count of records to start new IDs after existing ones
collection_info = client.get_collection('satellite_img_db')
start_id = collection_info.points_count
print(f"[INFO] Starting from ID {start_id}")

#creating records/vectors 
print("[INFO] Creating a data collection...")
records = []
for idx, sample in tqdm(enumerate(ds), total=len(ds)):
    processed_img = processor(text=None, images=sample['image'], return_tensors="pt")['pixel_values']
    img_embds = model.get_image_features(processed_img).detach().numpy().tolist()[0]
    img_px = list(sample['image'].getdata())
    img_size = sample['image'].size 
    
    # Create payload with metadata if available
    payload = {
        "pixel_lst": img_px, 
        "img_size": img_size,
        "filename": sample['filename'],
        "country_code": sample['country_code']  # Add country code to payload
    }
    
    # Add metadata to payload if available
    if 'metadata' in sample:
        metadata = sample['metadata'][0]  # Get first metadata entry
        payload.update({
            "metadata": sample['metadata'],
            "date": metadata.get('date'),
            "area_of_interest": metadata.get('area_of_interest', {}).get('name'),
            "drought_severity": metadata.get('drought_severity'),
            "drought_data": metadata.get('drought', {})
        })
        
        # Debug print to verify data
        print(f"\nPayload for {sample['filename']}:")
        print(f"Metadata included: {bool(sample['metadata'])}")
        print(f"Drought data included: {bool(metadata.get('drought', {}))}")
    
    records.append(models.Record(
        id=idx + start_id,
        vector=img_embds, 
        payload=payload
    ))

try:
    #uploading the records to client
    print("[INFO] Uploading data records to existing data collection...")
    #It's better to upload chunks of data to the VectorDB 
    for i in range(30,len(records), 30):
        print(f"finished {i}")
        client.upload_points(
            collection_name="satellite_img_db",
            points=records[i-30:i],
        )

    # Don't forget to upload the last batch if it's smaller than 30
    if len(records) % 30 != 0:
        remaining_records = records[-(len(records) % 30):]
        client.upload_points(
            collection_name="satellite_img_db",
            points=remaining_records,
        )

    print("[INFO] Successfully uploaded data records to data collection!")

except Exception as e:
    print(f"[ERROR] An error occurred: {str(e)}")

finally:
    try:
        client.close()
        print("[INFO] Client connection closed successfully")
    except Exception as e:
        print(f"[WARNING] Error while closing client connection: {str(e)}")