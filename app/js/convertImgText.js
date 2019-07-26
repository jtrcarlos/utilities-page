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
            // .text("Another!");
            $('#imgTextOutput')
                .addClass('border');
            $('#prog-status')
                .fadeOut(750, function () {
                    $(this).text("Done!").fadeIn(500);
                });




            // VAI BUSCAR O QUE VEM A FRENTE DO CAMPO SELECIONADO
            // defenir campos a filtrar
            var name = text.includes("Pleased");
            // cria array com as linhas separadas
            if (name) {
                console.log(name);
                var nameT = $("#imgTextOutput").html().split("<br>");
                console.log(nameT);
            }
            // itenera pelas frases do Array, ve se contem o campo, retorna a linha sem o campo 
            for (let i = 0; i < nameT.length; i++) {
                if (nameT[i].includes("Pleased")) {
                    console.log(nameT[i]);
                    var newName = nameT[i].replace('Pleased', '');
                    console.log(newName);

                }


            }

        });
}

