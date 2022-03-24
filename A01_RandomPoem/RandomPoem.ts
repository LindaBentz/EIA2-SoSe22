namespace A01 {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(Subjekte, Prädikate, Objekte);

    for (let index: number = subjekte.length; index > 0; index--) {
       
        // console.log(index);

        let result: string = getVerse(subjekte, prädikate, objekte);

        console.log(result);


      //  console.log(getVerse(Subjekte, Prädikate, Objekte));

    }


    function getVerse (_Subjekte: string[], _Prädikate: string[], _Objekte: string[]): string {

        // console.log("Alohomora");

        let verse: string = " ";

        let zufallszahlEins: number = Math.floor(Math.random() * _Subjekte.length);

        verse = verse + _Subjekte.splice(zufallszahlEins, 1)[0] + " ";

        let zufallszahlZwei: number = Math.floor(Math.random() * _Prädikate.length);

        verse = verse + _Prädikate.splice(zufallszahlZwei, 1)[0] + " ";

        let zufallszahlDrei: number = Math.floor(Math.random() * _Objekte.length);

        verse = verse + _Objekte.splice(zufallszahlDrei, 1)[0] + " ";

        return verse;



    }




}