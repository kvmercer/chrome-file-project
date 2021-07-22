# Description

This is an extention to download videos/audio files off of websites, most notably YouTube.

## To Run

Ensure node is installed - https://nodejs.org/en/

Install dependencies

```bash
npm install
```

Run the javascript file through node

```bash
node index.js
```

This runs a node server on [http://localhost:4000]

## To Download

Once you have a local server running...

From a youtube video click on the Chrome Downloader extension
Select a filename
Select a filetype
Click "download"

The the file with selected options should be downloaded and appear on your browser

All files are stored locally in [ChromeDownloader/] folder

### Credits

This project has been worked on by Francois LeVert and Kavin Mercer as well as slight contributions by Emre Kuru.

A portion of this code and functionality is attributed to https://blog.learningdollars.com/2020/04/01/how-to-make-a-chrome-extension-to-download-youtube-videos/ as well as https://www.npmjs.com/package/ytdl-core