"use strict";
//Inspiriert von Coleen und Jasmin
window.addEventListener("load", function () {
    document.querySelector("#first").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector("#second").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector("#third").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector("#forth").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#fifth").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector("#sixth").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector("#seventh").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#eighth").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#nineth").addEventListener("click", function () { playSample("snare.mp3"); });
    var arraybeat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var aufnahmebutton = false;
    //Aufnahmefunktion ein oder aus
    function recording() {
        if (aufnahmebutton) {
            aufnahmebutton = false;
            document.getElementById("micro").style.color = "#dda0dd";
        }
        else {
            aufnahmebutton = true;
            document.getElementById("micro").style.color = "#00d200";
        }
    }
    //Abspeichern der sounds
    function playSample(audio) {
        if (aufnahmebutton) {
            arraybeat.push(audio);
        }
        const melodie = new Audio(audio);
        melodie.play();
    }
    //Abspielen bzw Stoppen des beats
    function playpause() {
        var psbutton = document.querySelector("#play");
        if (psbutton.getAttribute("class") == "fas fa-play") {
            psbutton.setAttribute("class", "fas fa-stop");
            abspielButton();
        }
        else {
            psbutton.setAttribute("class", "fas fa-play");
            stoppButton();
        }
    }
    var index = 0;
    var beatInt;
    //Loop-Funktion
    function abspielButton() {
        beatInt = setInterval(function () {
            playSample(arraybeat[index]);
            index++;
            if (index >= arraybeat.length) {
                index = 0;
            }
        }, 500);
    }
    //Beat löschen
    function stoppButton() {
        clearInterval(beatInt);
    }
    document.querySelector("#play").addEventListener("click", playpause);
    document.querySelector("#micro").addEventListener("click", recording);
    document.getElementById("trash").addEventListener("click", function () { arraybeat = []; });
});
//# sourceMappingURL=script.js.map