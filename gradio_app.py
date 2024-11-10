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

def chat_response(message, history):
    """Process chat messages and return multi-modal response"""
    try:
        # Process text query for vector search
        inputs = tokenizer(message, padding=True, truncation=True, return_tensors="pt")
        text_embeddings = model.get_text_features(**inputs).detach().numpy().tolist()[0]
        
        # Extract country code from message
        country_code = next((code for code in ["SOM", "KEN", "ETH"] if code in message.upper()), None)
        print(f"\nSearching for country: {country_code}")
        
        # Construct search parameters
        search_params = {
            "collection_name": "satellite_img_db",
            "query_vector": text_embeddings,
            "limit": 5
        }
        
        if country_code:
            search_params["query_filter"] = models.Filter(
                must=[models.FieldCondition(key="country_code", match=models.MatchValue(value=country_code))]
            )
        
        # Debug print search parameters
        print(f"Search parameters: {search_params}")
        
        # Perform search
        hits = client.search(**search_params)
        print(f"Found {len(hits)} hits from Qdrant")
        
        # Debug print first hit if available
        if hits:
            print("\nFirst hit payload:")
            print(json.dumps(hits[0].payload, indent=2))
        
        context_data = []
        images = []
        
        for hit in hits:
            # Convert all payload data to a structured format for analysis
            metadata_context = {
                "image_info": {
                    "filename": hit.payload.get("filename", ""),
                    "country": hit.payload.get("country_code", ""),
                    "date": hit.payload.get("date", "")
                }
            }
            
            # Add all metadata fields
            if "metadata" in hit.payload:
                metadata_context["metadata"] = hit.payload["metadata"]
            
            # Add any drought-specific data
            if "drought_data" in hit.payload:
                metadata_context["drought_data"] = hit.payload["drought_data"]
            
            # Add any other relevant fields
            for key, value in hit.payload.items():
                if key not in ["pixel_lst", "img_size", "metadata", "drought_data"]:
                    metadata_context[key] = value
            
            context_data.append(metadata_context)
            
            # Process image if available
            if all(k in hit.payload for k in ['img_size', 'pixel_lst']):
                img_size = tuple(hit.payload['img_size'])
                pixel_lst = hit.payload['pixel_lst']
                new_image = Image.new("RGB", img_size)
                new_image.putdata(list(map(lambda x: tuple(x), pixel_lst)))
                images.append(new_image)
        
        print(f"\nCollected {len(context_data)} items for analysis")
        if context_data:
            print("\nFirst context item:")
            print(json.dumps(context_data[0], indent=2))
        
        # Generate analysis
        analysis = analyze_context(message, context_data)
        
        return analysis['response'], images, analysis['figures']
        
    except Exception as e:
        print(f"Error in chat_response: {str(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return f"An error occurred: {str(e)}", [], []

def analyze_context(question, context_data):
    """Analyze context data based on the question using semantic understanding"""
    try:
        print("\nStarting analysis...")
        print(f"Question: {question}")
        
        # Identify the type of analysis needed based on the question
        analysis_type = identify_analysis_type(question)
        print(f"Analysis type: {analysis_type}")
        
        # Extract relevant data points from context
        relevant_data = extract_relevant_data(context_data, analysis_type)
        print(f"Found {len(relevant_data)} relevant data points")
        
        if not relevant_data:
            return {
                "response": "No relevant data found for your question.",
                "figures": []
            }
        
        # Generate visualizations based on the data and question
        figures = generate_visualizations(relevant_data, analysis_type)
        print(f"Generated {len(figures)} visualizations")
        
        # Generate natural language response
        response = generate_response(question, relevant_data, analysis_type)
        print("Generated response")
        
        return {
            "response": response,
            "figures": figures
        }
    except Exception as e:
        print(f"Error in analysis: {str(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return {"response": str(e), "figures": []}

def identify_analysis_type(question):
    """Identify the type of analysis needed based on the question"""
    # Add semantic matching logic here
    question_lower = question.lower()
    
    if any(word in question_lower for word in ['correlation', 'relationship', 'compare']):
        return 'correlation'
    elif any(word in question_lower for word in ['trend', 'over time', 'historical']):
        return 'trend'
    elif any(word in question_lower for word in ['current', 'latest', 'now']):
        return 'current_state'
    else:
        return 'general'

def extract_relevant_data(context_data, analysis_type):
    """Extract relevant data points based on analysis type"""
    relevant_data = []
    
    print(f"\nAnalyzing {len(context_data)} context items")
    
    for item in context_data:
        print("\nContext item:")
        print(f"Keys available: {item.keys()}")
        
        if 'metadata' in item:
            print("Metadata found:")
            print(json.dumps(item['metadata'], indent=2))
        
        # Extract all numerical and categorical data
        extracted = extract_numerical_and_categorical(item)
        print(f"Extracted data: {extracted}")
        
        if extracted:
            relevant_data.append(extracted)
    
    print(f"\nTotal relevant data points: {len(relevant_data)}")
    return relevant_data

def generate_visualizations(data, analysis_type):
    """Generate appropriate visualizations based on data and analysis type"""
    figures = []
    
    if not data:
        return figures
        
    try:
        # Convert data to DataFrame
        df = pd.DataFrame(data)
        print(f"DataFrame shape: {df.shape}")
        print(f"DataFrame columns: {df.columns}")
        print(f"DataFrame dtypes:\n{df.dtypes}")
        
        # Clean and prepare data for visualization
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        print(f"Numeric columns: {numeric_cols}")
        
        if analysis_type == 'correlation':
            # Create correlation visualization for numeric columns only
            if len(numeric_cols) >= 2:
                corr_df = df[numeric_cols].corr()
                fig = px.imshow(
                    corr_df,
                    title="Correlation Heatmap",
                    labels=dict(color="Correlation"),
                    color_continuous_scale="RdBu"
                )
                figures.append(fig)
                
                # Also create scatter plots for highly correlated variables
                for i in range(len(numeric_cols)):
                    for j in range(i+1, len(numeric_cols)):
                        col1, col2 = numeric_cols[i], numeric_cols[j]
                        corr = corr_df.loc[col1, col2]
                        if abs(corr) > 0.5:  # Only plot significant correlations
                            fig = px.scatter(
                                df,
                                x=col1,
                                y=col2,
                                title=f"{col1} vs {col2} (correlation: {corr:.2f})"
                            )
                            figures.append(fig)
        
        elif analysis_type == 'trend':
            # Create time series visualization for each numeric column
            if 'year' in df.columns:
                df = df.sort_values('year')
                for col in numeric_cols:
                    if col != 'year':
                        fig = px.line(
                            df,
                            x='year',
                            y=col,
                            title=f"{col} Over Time"
                        )
                        figures.append(fig)
        
        elif analysis_type == 'current_state':
            # Create bar charts for current state
            latest_year = df['year'].max() if 'year' in df.columns else None
            if latest_year:
                latest_data = df[df['year'] == latest_year]
                for col in numeric_cols:
                    if col != 'year':
                        fig = px.bar(
                            latest_data,
                            y=col,
                            title=f"{col} (Year {latest_year})"
                        )
                        figures.append(fig)
        
        print(f"Generated {len(figures)} visualizations")
        
    except Exception as e:
        print(f"Error generating visualizations: {str(e)}")
        import traceback
        print(f"Visualization traceback: {traceback.format_exc()}")
    
    return figures

def extract_numerical_and_categorical(data_dict, prefix=''):
    """Recursively extract numerical and categorical data from nested dictionaries"""
    extracted = {}
    
    if not isinstance(data_dict, dict):
        return extracted
    
    for key, value in data_dict.items():
        full_key = f"{prefix}_{key}" if prefix else key
        
        if isinstance(value, (int, float)):
            # Clean the key name for better visualization
            clean_key = full_key.replace('_', ' ').title()
            extracted[clean_key] = float(value)  # Convert all numbers to float for consistency
            
        elif isinstance(value, str):
            if value.replace('.','',1).isdigit():
                clean_key = full_key.replace('_', ' ').title()
                extracted[clean_key] = float(value)
                
        elif isinstance(value, dict):
            nested = extract_numerical_and_categorical(value, full_key)
            extracted.update(nested)
            
        elif isinstance(value, list):
            for i, item in enumerate(value):
                if isinstance(item, dict):
                    nested = extract_numerical_and_categorical(item, f"{full_key}_{i}")
                    extracted.update(nested)
                elif isinstance(item, (int, float)):
                    clean_key = f"{full_key} {i}".replace('_', ' ').title()
                    extracted[clean_key] = float(item)
    
    return extracted

def generate_response(question, relevant_data, analysis_type):
    """Generate natural language response based on the data and question type"""
    try:
        if not relevant_data:
            return "No relevant data found for your question."
        
        response = []
        
        # Convert relevant_data to DataFrame for easier analysis
        df = pd.DataFrame(relevant_data)
        
        if analysis_type == 'trend':
            # Analyze trends over time
            if 'year' in df.columns:
                df = df.sort_values('year')
                response.append("\n**Trend Analysis:**")
                
                # Find overall trend
                for col in df.select_dtypes(include=[np.number]).columns:
                    if col != 'year':
                        trend = np.polyfit(df['year'], df[col], 1)[0]
                        direction = "increasing" if trend > 0 else "decreasing"
                        response.append(f"- {col.replace('_', ' ').title()} shows an overall {direction} trend")
                
                # Identify significant changes
                for col in df.select_dtypes(include=[np.number]).columns:
                    if col != 'year':
                        max_year = df.loc[df[col].idxmax(), 'year']
                        min_year = df.loc[df[col].idxmin(), 'year']
                        response.append(f"- Highest {col} observed in {max_year}")
                        response.append(f"- Lowest {col} observed in {min_year}")
                
        elif analysis_type == 'correlation':
            # Analyze relationships between variables
            response.append("\n**Correlation Analysis:**")
            numeric_cols = df.select_dtypes(include=[np.number]).columns
            
            if len(numeric_cols) >= 2:
                corr_matrix = df[numeric_cols].corr()
                for i in range(len(numeric_cols)):
                    for j in range(i+1, len(numeric_cols)):
                        col1, col2 = numeric_cols[i], numeric_cols[j]
                        corr = corr_matrix.loc[col1, col2]
                        if abs(corr) > 0.5:  # Only report significant correlations
                            strength = "strong" if abs(corr) > 0.7 else "moderate"
                            direction = "positive" if corr > 0 else "negative"
                            response.append(f"- {col1.replace('_', ' ').title()} shows a {strength} {direction} correlation with {col2.replace('_', ' ').title()}")
                
        elif analysis_type == 'current_state':
            # Analyze current state
            response.append("\n**Current State Analysis:**")
            
            # Get the most recent data
            if 'year' in df.columns:
                latest_year = df['year'].max()
                latest_data = df[df['year'] == latest_year]
                
                response.append(f"\nLatest data (Year {latest_year}):")
                for col in latest_data.select_dtypes(include=[np.number]).columns:
                    if col != 'year':
                        value = latest_data[col].iloc[0]
                        response.append(f"- {col.replace('_', ' ').title()}: {value:,.0f}")
            else:
                # If no time dimension, report summary statistics
                for col in df.select_dtypes(include=[np.number]).columns:
                    mean_val = df[col].mean()
                    response.append(f"- Average {col.replace('_', ' ').title()}: {mean_val:,.0f}")
        
        else:  # general analysis
            response.append("\n**General Analysis:**")
            
            # Report key statistics
            for col in df.select_dtypes(include=[np.number]).columns:
                if col != 'year':
                    mean_val = df[col].mean()
                    max_val = df[col].max()
                    min_val = df[col].min()
                    response.append(f"\n{col.replace('_', ' ').title()}:")
                    response.append(f"- Average: {mean_val:,.0f}")
                    response.append(f"- Maximum: {max_val:,.0f}")
                    response.append(f"- Minimum: {min_val:,.0f}")
        
        return "\n".join(response)
        
    except Exception as e:
        print(f"Error generating response: {str(e)}")
        return "Unable to generate analysis due to an error."

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