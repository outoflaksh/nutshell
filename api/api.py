from fastapi import FastAPI, UploadFile, Form, File
import os, shutil
from main import summarise_video

app = FastAPI()

@app.get("/healthcheck")
def health_check():
    return {"msg": "ok"}

@app.post("/upload")
def file_upload(vid_file: UploadFile = File(...)):
    with open(vid_file.filename, 'wb') as buffer:
        shutil.copyfileobj(vid_file.file, buffer)

    summary = summarise_video(f"./{vid_file.filename}")

    return {"msg": summary}