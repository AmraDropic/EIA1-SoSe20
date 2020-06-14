"use strict";
//Aufgabe 7.1 - Drum Pad
function playsample(mp3) {
    var sound = new Audio("assets/" + mp3);
    sound.play();
}
//Für Variablen Deklaration inspiriert durch Jasmin Basler
window.addEventListener("load", function () {
    document.querySelector(".first").addEventListener("click", function () {
        playsample("hihat.mp3");
    });
    document.querySelector(".second").addEventListener("click", function () {
        playsample("kick.mp3");
    });
    document.querySelector(".third").addEventListener("click", function () {
        playsample("snare.mp3");
    });
    document.querySelector(".forth").addEventListener("click", function () {
        playsample("A.mp3");
    });
    document.querySelector(".fifth").addEventListener("click", function () {
        playsample("C.mp3");
    });
    document.querySelector(".sixth").addEventListener("click", function () {
        playsample("F.mp3");
    });
    document.querySelector(".seventh").addEventListener("click", function () {
        playsample("G.mp3");
    });
    document.querySelector(".eighth").addEventListener("click", function () {
        playsample("laugh-2.mp3");
    });
    document.querySelector(".nineth").addEventListener("click", function () {
        playsample("laugh-1.mp3");
    });
});
//Aufgabe 7.2 - Drum Machine
function beat() {
    setInterval(function () {
        playsample("kick.mp3");
        playsample("snare.mp3");
        playsample("hihat.mp3");
    }, 500);
}
window.addEventListener("load", function () {
    document.querySelector("img").addEventListener("click", beat);
});
//# sourceMappingURL=script.js.map