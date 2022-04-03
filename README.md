<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="public/logo.png" alt="Logo" width="auto" height="80">
  </a>

<h3 align="center">Get your video lectures summed up in a few minutes.</h3>

  <p align="center">
    <br />
    <a href="https://github.com/outoflaksh/nutshell/issues">Report Bug</a>
    ·
    <a href="https://github.com/outoflaksh/nutshell/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Nutshell allows students to quickly summarise their entire video lectures in just a few minutes. Whether it's for a quick revision, catching up on missed classes, or simply a reference for what happened, Nutshell helps students by providing them with the most important parts of the class without them having to watch a second of the recorded video. 

And the best part is that it's not just limited to online lectures. Anyone in need of summarising a video-based session can make use of Nutshell and get all the meat. Be it online conferences, meetings, presentations, seminars, or workshops, you just have to upload the recorded video with clear audio, and Nutshell takes care of the rest. 

Nutshell leverages state-of-the-art, open-source machine learning & deep learning technologies in order to go from the original video to its short summed-up version. This allows us to provide the user with a concise, accurate and reliable summary.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Python](https://python.org/)
* [FastAPI](https://fastapi.tiangolo.com/)

#### Technologies
- Video to audio conversion [Moviepy](https://zulko.github.io/moviepy/)
- Speech-to-text [Deepgram](https://deepgram.com/)
- Summariser [Gensim](https://radimrehurek.com/gensim/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* pip
  ```sh
  pip install moviepy deepgram-sdk gensim==3.6 fastapi uvicorn
  ```

### Installation

1. Get your Deepgram API Key at [https://deepgram.com](https://deepgram.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `api/settings.py`
   ```js
   DEEPGRAM_API_KEY = 'ENTER YOUR API';
   ```
5. In the api folder, run
   ```sh
   uvicorn api:app
   ```
6. In the root directory, run
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributors

Yathansh Tewatia - [@yattew](https://github.com/yattew)

Lakshya Malik - [@outoflaksh](https://github.com/outoflaksh)

<p align="right">(<a href="#top">back to top</a>)</p>
