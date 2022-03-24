"use strict";
var A01;
(function (A01) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(Subjekte, Prädikate, Objekte);
    for (let index = subjekte.length; index > 0; index--) {
        // console.log(index);
        let result = getVerse(subjekte, prädikate, objekte);
        console.log(result);
        //  console.log(getVerse(Subjekte, Prädikate, Objekte));
    }
    function getVerse(_Subjekte, _Prädikate, _Objekte) {
        // console.log("Alohomora");
        let verse = " ";
        let zufallszahlEins = Math.floor(Math.random() * _Subjekte.length);
        verse = verse + _Subjekte.splice(zufallszahlEins, 1)[0] + " ";
        let zufallszahlZwei = Math.floor(Math.random() * _Prädikate.length);
        verse = verse + _Prädikate.splice(zufallszahlZwei, 1)[0] + " ";
        let zufallszahlDrei = Math.floor(Math.random() * _Objekte.length);
        verse = verse + _Objekte.splice(zufallszahlDrei, 1)[0] + " ";
        return verse;
    }
})(A01 || (A01 = {}));
//# sourceMappingURL=RandomPoem.js.map