"use strict";
var array = [];
var index = 0;
var aufnahme = false;
function playsample(audio) {
    const sound = new Audio(audio);
    sound.play();
    // Wenn var aufnamhe = true, soll Audiodatei in Array gepusht werden
    if (aufnahme) {
        array.push(audio);
        sound.play();
    }
}
// Wenn Class = fas fa-play, soll Funtkion "beat" ausgeführt werden; 
// wenn Class = fas fa-stop, soll Beat gelöscht werden
function playpause() {
    var playpauseicon = document.querySelector("#play");
    if (playpauseicon.getAttribute("class") == "fas fa-play") {
        playpauseicon.setAttribute("class", "fas fa-pause");
        beat();
    }
    else if (playpauseicon.className == "fas fa-pause") {
        playpauseicon.className = "fas fa-play";
        deleteBeat();
    }
}
// Zustand der Variable "aufnahme" true/flase ändern
function recordbeat() {
    if (aufnahme == false) {
        aufnahme = true;
        array = [];
    }
    else if (aufnahme == true) {
        aufnahme = false;
    }
}
// Beat soll gelöscht werden
function deleteBeat() {
    clearInterval(index);
}
// Beat soll als Loop gespielt werden
function beat() {
    setInterval(function () {
        playsample(array[index]);
        index++;
        if (index > array.length) {
            index = 0;
        }
    }, 500);
}
window.addEventListener("load", function () {
    //Play-, Stop-, Aufnahme-, Deletebutton
    document.querySelector("#play").addEventListener("click", beat);
    document.querySelector(".fas fa-pause").addEventListener("click", playpause);
    document.querySelector("#micro").addEventListener("click", recordbeat);
    document.querySelector("#trash").addEventListener("click", deleteBeat);
    // DrumPad
    document.querySelector("#first").addEventListener("click", function () {
        playsample("hihat.mp3");
    });
    document.querySelector("#second").addEventListener("click", function () {
        playsample("kick.mp3");
    });
    document.querySelector("#third").addEventListener("click", function () {
        playsample("snare.mp3");
    });
    document.querySelector("#forth").addEventListener("click", function () {
        playsample("A.mp3");
    });
    document.querySelector("#fifth").addEventListener("click", function () {
        playsample("C.mp3");
    });
    document.querySelector("#sixth").addEventListener("click", function () {
        playsample("F.mp3");
    });
    document.querySelector("#seventh").addEventListener("click", function () {
        playsample("G.mp3");
    });
    document.querySelector("#eighth").addEventListener("click", function () {
        playsample("laugh-2.mp3");
    });
    document.querySelector("#nineth").addEventListener("click", function () {
        playsample("laugh-1.mp3");
    });
});
//# sourceMappingURL=script.js.map