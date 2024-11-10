# Running the frontend & backend

Start python virtual environment: `source venv/bin/activate`
Install dependencies: `pip install -r requirements.txt`
Run FastAPI server: `uvicorn app:app --reload`
React frontend: `npm run dev`

# Running the Gradio app

`python gradio_app.py`

## Set up QDrant database

`docker pull qdrant/qdrant`
`docker run -p 6333:6333 -p 6334:6334 \
-v $(pwd)/qdrant_storage:/qdrant/storage:z \
qdrant/qdrant`

`python database.py`
