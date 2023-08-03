var input = document.querySelector("#text-area");
var btnTrans = document.querySelector("#btnTrans");
var output = document.querySelector("#output");
var outplaceholder = document.querySelector("#outplaceholder");

var url = "https://api.funtranslations.com/translate/valyrian.json";

function clickHandler() {
    if (input.value.trim() === '') {
        outplaceholder.textContent = "Please enter something to translate!!"
    }
    else {
        // output.textContent = input.value;
        var text = input.value;

        fetch(url + "?text=" + text)
            .then(res => res.json())
            .then(json => {
                var translatedtext = json.contents.translated;
                output.textContent = translatedtext;
        })
    }
};

btnTrans.addEventListener("click", clickHandler);