// import { Tesseract } from "../../node_modules/tesseract";
const { TesseractWorker } = Tesseract;
const worker = new TesseractWorker();

const imgTextInput = document.getElementById('imgTextInput');
const imgTextOutput = document.getElementById('imgTextOutput');

// const worker = Tesseract.TesseractWorker;
// https://i.imgur.com/zKBiXVK.jpg

function imgTextConvert() {
    worker
        .recognize(imgTextInput.value)
        .progress((p) => {
            console.log('progress', p);
            document.getElementById('prog').innerText = p.status + " " + Math.floor(p.progress * 100) + "%";
            var current_progress = Math.floor(p.progress * 100);
            $("#progress-bar")
                .css("width", current_progress + "%")
                .text(current_progress + "% Complete");
            // $("#progress-bar-text").text(current_progress + "% Complete");
        })
        .then(({ text }) => {
            console.log(text);
            worker.terminate();
            imgTextOutput.innerText = text;
        });
}

