import { Tesseract } from "../../node_modules/tesseract";

const imgTextInput = document.getElementById('imgTextInput').value;
const imgTextOutput = document.getElementById('imgTextOutput');
// const url = imgTextInput.value;

const worker = Tesseract.TesseractWorker;

function imgTextConvert() {
    worker
        .recognize(imgTextInput)
        .progress((p) => {
            console.log('progress', p);
            var current_progress = p.progress * 100;
            $(".progress-bar")
                .css("width", current_progress + "%")
                .attr("aria-valuenow", current_progress)
                .text(current_progress + "% Complete");
        })
        .then(({ text }) => {
            console.log(text);
            worker.terminate();
            imgTextOutput.innerText = text;
        });
}

