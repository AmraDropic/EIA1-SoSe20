//Aufgabe 7.1 - Drum Pad
var array: string [] = ["hihat.mp3", "kick.mp3", "snare.mp3"];
var index: number = 0;
var aufnahme: boolean = false;


function playsamples(audio: string) {
    
    var sound: HTMLAudioElement = new Audio(audio);
    sound.play();
    if (aufnahme) {
        array.push (audio);
    }
}
function beat() {
   
    setInterval(function() {
        playsamples(array[index]);
        index ++;
        if (index > 2) {
            index = 0;
        }
        },      500);

    var playpauseicon = document.querySelector(".fas fa-play");
    if (playpauseicon.className == "fas fa-play") {
        playpauseicon.className =  "fas fa-pause";
        beat();
        }
    else if (playpauseicon.className == "fas fa-pause") {
        playpauseicon.className = "fas fa-play";
    }   

}

window.addEventListener("load", function () {
    document.querySelector(".fas fa-play").addEventListener("click", beat);
    document.querySelector(".fas fa-microphone").addEventListener("click", record );
    document.querySelector(".fas fa-trash-alt").addEventListener("click", deletebeat);

});
 

function record () {

    if (aufnahme == false) {
        aufnahme = true;
        array = [];
        
    }
    else if (aufnahme == true) {
        aufnahme = false;
    }

}


function deletebeat () {
    array = []; 
}

window.addEventListener("load", function () {

    document.querySelector("#first").addEventListener("click", function () {
        playsamples("hihat.mp3");
    });
    document.querySelector("#second").addEventListener("click", function () {
        playsamples("kick.mp3");
    });
    document.querySelector("#third").addEventListener("click", function () {
        playsamples("snare.mp3");
    });
    document.querySelector("#forth").addEventListener("click", function () {
        playsamples("A.mp3");
    });
    document.querySelector("#fifth").addEventListener("click", function () {
        playsamples("C.mp3");
    });
    document.querySelector("#sixth").addEventListener("click", function () {
        playsamples("F.mp3");
    });
    document.querySelector("#seventh").addEventListener("click", function () {
        playsamples("G.mp3");
    });
    document.querySelector("#eighth").addEventListener("click", function () {
        playsamples("laugh-2.mp3");
    });
    document.querySelector("#nineth").addEventListener("click", function () {
        playsamples("laugh-1.mp3");
    });
});










