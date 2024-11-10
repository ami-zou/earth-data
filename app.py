from fastapi import FastAPI, HTTPException
from data_processing import (
    semantic_search,
    query_image,
)
import numpy as np
from PIL import Image

app = FastAPI()


# Helper function to make semantic_search results JSON-serializable
def format_search_results(results):
    return [{"file": result[0], "distance": float(result[1])} for result in results]


# Endpoint for semantic image search (using an image file as input)
@app.post("/search_image/")
async def search_image(k: int = 5):
    try:
        # Process image (this part would require proper decoding if input is raw bytes)
        results = semantic_search(query_image, k=5)
        # print(f"results is {results}")
        formatted_results = format_search_results(results)
        # print(f"formatted_results is {formatted_results}")
        return {"top_matches": str(formatted_results)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    return {"status": "Server is running"}


# Run with `uvicorn <filename>:app --reload`
