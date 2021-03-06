// Zusammenarbeit mit Anna-Lena Jörger und Evelin Sinner

namespace L08_2 {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;


    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;


        drawSky(0, 0, "#88d1CF");

        drawWater(0, 0);
        drawSand(0, 110);
        drawSun(560, 120, "#FFFF00", "#FFDF00");



        drawPerson();
        drawBirds();
        drawShip();

        drawBay(0, 450, "#7a4f1e");

        drawClouds({ x: 900, y: 125 }, { x: 250, y: 105 });
        drawClouds({ x: 200, y: 225 }, { x: 250, y: 95 });
        drawClouds({ x: 1100, y: 275 }, { x: 150, y: 75 });



        function drawWater(_x: number, _y: number): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#197580");
            gradient.addColorStop(0.7, "#2f8b96");
            gradient.addColorStop(0.9, "#56c1cd");
            gradient.addColorStop(1.0, "#74e1ee");

            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;

            crc2.moveTo(_x, _y + 400);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
      

        // Sand
        function drawSand(_x: number, _y: number): void {

            var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#d5ba8c");
            gradient.addColorStop(0.7, "#d8b475");
            gradient.addColorStop(0.9, "#ad7b24");
            gradient.addColorStop(1.0, "#94681d");

            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;

            crc2.moveTo(_x, _y + 400); 
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


        // Himmel
        function drawSky(_x: number, _y: number, _strokeColor: string): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");

            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.fillStyle = gradient;

            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1280, _y);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x - 1280, _y + 400);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }



        // Sonne
        function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            let r1: number = 40;
            let r2: number = 300;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

            crc2.save();
            crc2.translate(_x, _y);

            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();

            crc2.restore();
        }





        function drawPerson(): void {

            //Person1
            crc2.beginPath();
            crc2.fillStyle = "#40b90a";
            crc2.fillRect(410, 610, 10, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#d4a985";
            crc2.arc(415, 605, 6, 0, 2 * Math.PI);
            crc2.fill();

            //Person2
            crc2.beginPath();
            crc2.fillStyle = "#81F7BE";
            crc2.fillRect(950, 650, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#46301d";
            crc2.arc(955, 645, 6, 0, 2 * Math.PI);
            crc2.fill();

            //Person3
            crc2.beginPath();
            crc2.fillStyle = "#952509";
            crc2.fillRect(390, 600, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#8e6037";
            crc2.arc(395, 595, 6, 0, 2 * Math.PI);
            crc2.fill();



            //Person im Wasser 
            crc2.beginPath();
            crc2.fillStyle = "#c9d4c4";
            crc2.fillRect(300, 480, 7, 10);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#8c6013";
            crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
            crc2.fill();
        }

        function drawBirds(): void {

            crc2.beginPath();
            crc2.moveTo(100, 100);
            crc2.bezierCurveTo(100, 50, 200, 50, 200, 100);
            crc2.moveTo(200, 100);
            crc2.bezierCurveTo(200, 50, 300, 50, 300, 100);

            crc2.moveTo(369, 264);
            crc2.bezierCurveTo(377, 233, 417, 235, 422, 263);
            crc2.bezierCurveTo(420, 233, 472, 235, 472, 263);

            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

        }




        function drawShip(): void {
            //Stab
            crc2.beginPath();
            crc2.fillStyle = "#322e2e";
            crc2.fillRect(735, 325, 5, 50);
            crc2.fill();

            //Dreieck
            crc2.moveTo(740, 325);
            crc2.lineTo(740, 350);
            crc2.lineTo(765, 337.5);
            crc2.fillStyle = "#878080";
            crc2.fill();

            //Schiffskörper
            crc2.beginPath();
            crc2.strokeStyle = "#878080";
            crc2.moveTo(750, 400);
            crc2.lineTo(695, 400);
            crc2.lineTo(670, 375);
            crc2.lineTo(775, 375);
            crc2.fillStyle = "#878080";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }


        function drawClouds(_position: Vector, _size: Vector): void {
            let nparticels: number = 30;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nparticels; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();

            }
            crc2.restore();

        }


        function drawBay(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = "#5c3c18";
            crc2.lineWidth = 2;

            //Farbverlauf
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#6e471b");
            gradient.addColorStop(0.7, "#5c3c18");
            gradient.addColorStop(0.9, "#472f13");
            gradient.addColorStop(1.0, "#422a0f");

            crc2.fillStyle = gradient;
            crc2.moveTo(_x - 15000, _y + 100);
            crc2.lineTo(_x + 10, _y - 200);
            crc2.lineTo(_x + 200, _y - 100);
            crc2.lineTo(_x + 300, _y + 150); //
            crc2.lineTo(_x + 30, _y + 400);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }



    }

}
