import gradio as gr 
from PIL import Image
import datasets
from transformers import AutoTokenizer, AutoProcessor, AutoModelForZeroShotImageClassification
from qdrant_client import QdrantClient
from qdrant_client.http import models
from tqdm import tqdm
import numpy as np

client = QdrantClient("localhost", port=6333)
print("[INFO] Client created...")

#loading the model 
print("[INFO] Loading the model...")
model_name = "openai/clip-vit-base-patch32"
tokenizer = AutoTokenizer.from_pretrained(model_name)
processor = AutoProcessor.from_pretrained(model_name)
model = AutoModelForZeroShotImageClassification.from_pretrained(model_name)

def process_text(text):
    inp = tokenizer(text, return_tensors="pt")
    text_embeddings = model.get_text_features(**inp).detach().numpy().tolist()[0]
    hits = client.search(
        collection_name="satellite_img_db",
        query_vector=text_embeddings,
        limit=1,
    )

    # images = []
    for hit in hits:
        img_size = tuple(hit.payload['img_size'])
        pixel_lst = hit.payload['pixel_lst']

        # Create an image from pixel data
        new_image = Image.new("RGB", img_size)
        new_image.putdata(list(map(lambda x: tuple(x), pixel_lst)))
        # images.append(new_image)

    return new_image

# Gradio Interface
iface = gr.Interface(
    title="Semantic Search Over Satellite Images Using Qdrant Vector Database",
    description="by Terra",
    fn=process_text,
    inputs=gr.Textbox(label="Input prompt"),
    outputs=gr.Image(type="pil", label="Satellite Image"),
)

iface.launch(share=True)
#* Running on local URL:  http://127.0.0.1:7860
#* Running on public URL: https://bd1590d69a28a5173b.gradio.live