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
            //document.getElementById('prog').innerText = p.status + " " + Math.floor(p.progress * 100) + "%";
            document.getElementById('prog-status').innerText = p.status;;
            var current_progress = Math.floor(p.progress * 100);
            $("#progress-bar")
                .css("width", current_progress + "%")
                .removeClass("hidden")
                .text(current_progress + "%");
            $('#p-progress-bar')
                .removeClass("hidden");
            $('#convertButton')
                .addClass("cursor-not-allowed opacity-50");
            // $("#progress-bar-text").text(current_progress + "% Complete");
        })
        .then(({ text }) => {
            console.log(text);
            worker.terminate();
            imgTextOutput.innerText = text;
            $('#convertButton')
                .removeClass("cursor-not-allowed opacity-50");
            $('#imgTextOutput')
                .addClass('border');
        });
}

