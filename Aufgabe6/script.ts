//definieren der Zahlen
var af08: number = 1028;
var af18: number = 1235.5;
var sa08: number = 1132.6;
var sa18: number = 1261.5;
var eu08: number = 4965.7;
var eu18: number = 4209.3;
var na08: number = 6600.4;
var na18: number = 6035.6;
var as08: number = 12954.7;
var as18: number = 16274.1;
var au08: number = 1993.0;
var au18: number = 2100.5;

// Gesamtemission
var welt18: number = af18 + sa18 + eu18 + na18 + as18 + au18;

// Emission im Vergleich zu Welt
var af18zurwelt: number = 100 / welt18 * af18;
var sa18zurwelt: number = 100 / welt18 * sa18;
var eu18zurwelt: number = 100 / welt18 * eu18;
var na18zurwelt: number = 100 / welt18 * na18;
var as18zurwelt: number = 100 / welt18 * as18;
var au18zurwelt: number = 100 / welt18 * au18;


// Kontrollrechnung ob das Gesamtergebnis 100% ergibt
var kontrollerechnung: number = af18zurwelt + sa18zurwelt + eu18zurwelt + na18zurwelt + as18zurwelt + au18zurwelt;

// Emission relativ zur Welt alpha ergebnis
var af0818a: number = 100 / af08 * af18;
var sa0818a: number = 100 / sa08 * sa18;
var eu0818a: number = 100 / eu08 * eu18;
var na0818a: number = 100 / na08 * na18;
var as0818a: number = 100 / as08 * as18;
var au0818a: number = 100 / au08 * au18;

// Emission relativ zur Welt finale ergebnis (100-alpha)
var af0818f: number = 100 - af0818a;
var sa0818f: number = 100 - sa0818a;
var eu0818f: number = 100 - eu0818a;
var na0818f: number = 100 - na0818a;
var as0818f: number = 100 - as0818a;
var au0818f: number = 100 - au0818a; 

// Vergleich 2018 zu 2008
var af0818k: number = af18 - af08;
var sa0818k: number = sa18 - sa08;
var eu0818k: number = eu18 - eu08;
var na0818k: number = na18 - na08;
var as0818k: number = as18 - as08;
var au0818k: number = au18 - au08;

console.group("Europe");
console.log("Die Emission von Europa ist: " + eu18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + eu18zurwelt + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eu0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + eu0818k + " kg CO2");

console.group("Northamerica")
console.log("Die Emission von Nordamerika ist: " + na18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + na18zurwelt + " %");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + na0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + na0818k + " kg CO2");

console.group("Southamerica");
console.log("Die Emission von Südamerika ist: " + sa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sa18zurwelt + " %");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sa0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + sa0818k + " kg CO2");

console.group("Africa");
console.log("Die Emission von Afrika ist: " + af18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + af18zurwelt + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + af0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + af0818k + " kg CO2");

console.group("Asia");
console.log("Die Emission von Asien ist: " + as18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + as18zurwelt + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + as0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + as0818k + " kg CO2");

console.group("Australia");
console.log("Die Emission von Australien ist: " + au18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + au18zurwelt + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + au0818f + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + au0818k + " kg CO2");



function europeactive() {

    document.querySelector(".chart")?.setAttribute("style", "height:" + eu18zurwelt + "px");

    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Europe";

    document.querySelector("#headline1").innerHTML = eu18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#headline2").innerHTML = eu18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = eu0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = eu0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", europeactive);
});


function northamericaactive() {
    
    document.querySelector(".chart")?.setAttribute("style", "height:" + na18zurwelt + "px");

    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Northamerica";

    document.querySelector("#headline1").innerHTML = na18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector("#headline2").innerHTML = na18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = na0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = na0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function(){
    document.querySelector(".northamerica").addEventListener("click", northamericaactive);
});

function southamericaactive(){

    document.querySelector(".chart")?.setAttribute("style", "height:" + sa18zurwelt + "px");

    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Southamerica";

    document.querySelector("#headline1").innerHTML = sa18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector("#headline2").innerHTML = sa18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = sa0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = sa0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function(){
    document.querySelector(".southamerica").addEventListener("click", southamericaactive);
});

function africaactive(){

    document.querySelector(".chart")?.setAttribute("style", "height:" + af18zurwelt + "px");

    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Africa";

    document.querySelector("#headline1").innerHTML = af18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#headline2").innerHTML = af18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = af0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = af0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function(){
    document.querySelector(".africa").addEventListener("click", africaactive);
});

function asiaactive(){

    document.querySelector(".chart")?.setAttribute("style", "height:" + as18zurwelt + "px");


    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Asia";

    document.querySelector("#headline1").innerHTML = as18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#headline2").innerHTML = as18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = as0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = as0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

   
}
window.addEventListener("load", function(){
    document.querySelector(".asia").addEventListener("click", asiaactive);
});

function australiaactive(){

    document.querySelector(".chart")?.setAttribute("style", "height:" + au18zurwelt + "px");

    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Australia";

    document.querySelector("#headline1").innerHTML = au18 + "kg CO2";
    document.querySelector("#text1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#headline2").innerHTML = au18zurwelt + " % ";
    document.querySelector("#text2").innerHTML = "Relative to total world's emission";
    document.querySelector("#headline3").innerHTML = au0818f + " % ";
    document.querySelector("#text3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#headline4").innerHTML = au0818k + " CO2";
    document.querySelector("#text4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function() {
    document.querySelector(".australia").addEventListener("click", australiaactive);
});