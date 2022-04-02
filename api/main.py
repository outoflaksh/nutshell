import moviepy.editor as mp
from deepgram import Deepgram
import asyncio, json, sys
from gensim.summarization.summarizer import summarize
from pydub import AudioSegment
import time

start = time.time()
# extract the audio from the uploaded video
video = mp.VideoFileClip(r"test-vid.mp4")
video.audio.write_audiofile(r"extracted.mp3")

# compress the extrated audio
# og_audio = AudioSegment.from_mp3("./extracted.mp3")
# og_audio.export("./result.mp3", format="mp3", bitrate="16k")

# transcribe the obtained audio with deepgram
DEEPGRAM_API_KEY = 'f6a82cadceb521a5cedf0cefb18629efe4e58097'

FILE = './result.mp3'

MIMETYPE = 'audio/mp3'

async def main():

  # Initialize the Deepgram SDK
  deepgram = Deepgram(DEEPGRAM_API_KEY)
  
  # Check whether requested file is local or remote, and prepare source
  if FILE.startswith('http'):
    # file is remote
    # Set the source
    source = {
      'url': FILE
    }
  else:
    # file is local
    # Open the audio file
    audio = open(FILE, 'rb')

    # Set the source
    source = {
      'buffer': audio,
      'mimetype': MIMETYPE
    }

  # Send the audio to Deepgram and get the response
  try:
    response = await asyncio.create_task(
        deepgram.transcription.prerecorded(
        source, 
        {
            'punctuate': True
        }
        )
    )
  except:
    pass



  # Write only the transcript to the console
  return (response["results"]["channels"][0]["alternatives"][0]["transcript"])

transcript = asyncio.run(main())

summary = summarize(transcript, ratio=0.1)

end = time.time()

print(summary)
print(f"took {end-start}s of time")