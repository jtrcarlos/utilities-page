const { TesseractWorker } = Tesseract;
const worker = new TesseractWorker();

const imgTextOutput = document.getElementById('imgTextOutput');
const imgTextInput = document.getElementById('imgTextInput');


/**
 * Converts an image from a external url to text
 */
function imgTextConvert() {
    worker
        .recognize(imgTextInput.value)
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
