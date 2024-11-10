import gradio as gr 
from PIL import Image
import plotly.express as px
import datasets
from transformers import (
    AutoTokenizer, 
    AutoProcessor, 
    AutoModelForZeroShotImageClassification,
    pipeline
)
from qdrant_client import QdrantClient
from qdrant_client.http import models
from tqdm import tqdm
import numpy as np
import pandas as pd
import json

client = QdrantClient("localhost", port=6333)
print("[INFO] Client created...")

#loading the model 
print("[INFO] Loading the model...")
model_name = "openai/clip-vit-base-patch32"
tokenizer = AutoTokenizer.from_pretrained(model_name)
processor = AutoProcessor.from_pretrained(model_name)
model = AutoModelForZeroShotImageClassification.from_pretrained(model_name)

# Load additional data sources
def load_data_sources():
    try:
        # Load multiple population files
        population_files = [
            "./data/csv/API_11_DS2_en_csv_v2_10982.csv",
            "./data/csv/Metadata_Country_API_11_DS2_en_csv_v2_10982.csv",
            "./data/csv/Metadata_Indicator_API_11_DS2_en_csv_v2_10982.csv"
        ]
        
        population_data = []
        for file in population_files:
            try:
                df = pd.read_csv(file, sep=',', encoding='utf-8', on_bad_lines='skip')
                population_data.append(df)
            except Exception as e:
                print(f"Error loading {file}: {str(e)}")
                continue
        
        return {
            "population": population_data or None
        }
    except Exception as e:
        print(f"Error in load_data_sources: {str(e)}")
        return {"population": None}

# Load additional data sources
data_sources = load_data_sources()

def analyze_data(query, country_code, hit_payload):
    """Analyze data based on query and return insights"""
    insights = []
    figures = []
    
    if "drought" in query.lower():
        metadata = hit_payload.get("metadata", {})
        drought_data = metadata.get("drought", {})
        
        # Find most recent year with data
        if years := [int(year) for year in drought_data.keys() if year.isdigit()]:
            most_recent_year = str(max(years))
            if total_pop := drought_data[most_recent_year].get("Total population", {}):
                if values := total_pop.get("values", []):
                    drought_levels = {item["name"]: item["population"] for item in values}
                    
                    # Calculate percentages and add insights
                    total = sum(drought_levels.values())
                    if total > 0:
                        for level, pop in drought_levels.items():
                            percentage = (pop / total) * 100
                            if pop > 0:
                                insights.append(f"{level}: {pop:,} people ({percentage:.1f}%)")
                        
                        # Create visualization
                        fig = px.pie(
                            values=list(drought_levels.values()),
                            names=list(drought_levels.keys()),
                            title=f"Population Distribution by Drought Level ({most_recent_year})"
                        )
                        figures.append(fig)
    
    return insights, figures

def generate_image_explanation(hit_payload):
    """Generate explanation from image metadata"""
    metadata = hit_payload.get("metadata", {})
    drought_data = metadata.get("drought", {})

    print(f"metadata: {metadata}")
    print(f"drought_data: {drought_data}")

    
    if years := [int(year) for year in drought_data.keys() if year.isdigit()]:
        year = str(max(years))
        if total_pop := drought_data[year].get("Total population", {}):
            if values := total_pop.get("values", []):
                severe_conditions = [item for item in values if "severe" in item["name"].lower() or "extreme" in item["name"].lower()]
                affected_pop = sum(item["population"] for item in severe_conditions)
                
                if affected_pop > 0:
                    return f"Satellite image from {year} showing areas where {affected_pop:,} people were affected by severe or extreme drought conditions"
    
    return "Satellite image (year unknown)"

def chat_response(message, history):
    """Process chat messages and return multi-modal response"""
    try:
        # Process text query for vector search
        try:
            inputs = tokenizer(message, padding=True, truncation=True, return_tensors="pt")
            text_embeddings = model.get_text_features(**inputs).detach().numpy().tolist()[0]
        except Exception as tokenizer_error:
            print(f"Tokenization error: {str(tokenizer_error)}")
            return "Sorry, I couldn't process your message. Please try rephrasing it.", [], []
        
        # Extract country code from message
        country_code = next((code for code in ["SOM", "KEN", "ETH"] if code in message.upper()), None)
        
        # Search for relevant images
        search_params = {
            "collection_name": "satellite_img_db",
            "query_vector": text_embeddings,
            "limit": 3
        }
        
        if country_code:
            search_params["query_filter"] = models.Filter(
                must=[
                    models.FieldCondition(
                        key="country_code",
                        match=models.MatchValue(value=country_code)
                    )
                ]
            )
        
        hits = client.search(**search_params)
        
        # Process each hit
        response = "\n\n**Data Insights:**\n"
        images = []
        image_explanations = []
        
        for hit in hits:
            # Analyze data and get insights for each hit
            insights, figures = analyze_data(message, country_code, hit.payload)
            
            # Add text insights
            for insight in insights:
                response += f"- {insight}\n"
            
            # Process image
            img_size = tuple(hit.payload['img_size'])
            pixel_lst = hit.payload['pixel_lst']
            
            new_image = Image.new("RGB", img_size)
            new_image.putdata(list(map(lambda x: tuple(x), pixel_lst)))
            
            # Generate explanation for image
            explanation = generate_image_explanation(hit.payload)
            image_explanations.append(explanation)
            images.append(new_image)
        
        # Add image explanations to response
        response += "\n\n**Satellite Image Details:**\n"
        for i, explanation in enumerate(image_explanations):
            response += f"- Image {i+1}: {explanation}\n"
        
        return response, images, figures
    except Exception as e:
        print(f"Error in chat_response: {str(e)}")
        return f"An error occurred: {str(e)}", [], []

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
# iface = gr.Interface(
#     title="Semantic Search Over Satellite Images Using Qdrant Vector Database",
#     description="by Terra",
#     fn=process_text,
#     inputs=gr.Textbox(label="Input prompt"),
#     outputs=gr.Image(type="pil", label="Satellite Image"),
# )

with gr.Blocks() as iface:
    chatbot = gr.Chatbot()
    msg = gr.Textbox(label="Ask about drought conditions, population, or poverty data")
    clear = gr.Button("Clear")
    
    gallery = gr.Gallery(label="Relevant Satellite Images")
    plots = gr.Plot(label="Data Visualizations")
    
    def user(user_message, history):
        return "", history + [[user_message, None]]
    
    def bot(history):
        response, images, figures = chat_response(history[-1][0], history)
        history[-1][1] = response
        return history, images, figures[0] if figures else None
    
    msg.submit(user, [msg, chatbot], [msg, chatbot], queue=False).then(
        bot, chatbot, [chatbot, gallery, plots]
    )
    clear.click(lambda: None, None, chatbot, queue=False)


iface.launch()
#* Running on local URL:  http://127.0.0.1:7860
#* Running on public URL: https://bd1590d69a28a5173b.gradio.live