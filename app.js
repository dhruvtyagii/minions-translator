console.log("script is working from a different file")

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


btnTranslate.addEventListener("click", clickHandler)

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert ("something wrong with the server: try again after sometime")

}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
    

}

