namespace A08 {

    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;


        crc2 = canvas.getContext("2d")!;


        for (let index: number = 0; index < 10; index++) {

            let y: number = 70 * index;


            let wobbleOne: number = Math.random() * index + Math.random() * 400;


            let wobbleTwo: number = Math.random() * 400;

            drawBackground(y, wobbleOne, wobbleTwo);

        }

        function drawBackground(_y: number, _wobbleOne: number, _wobbleTwo: number): void {
            crc2.beginPath();
            crc2.moveTo(3800, _y);
            crc2.quadraticCurveTo(_wobbleOne, _wobbleTwo, 400, _y);
            crc2.quadraticCurveTo(_wobbleOne, _wobbleTwo, 75, _y);
            crc2.strokeStyle = "#87CEEB70";
            crc2.stroke();
        }

        for (let index: number = 0; index < 50; index++) {

            let arcX: number = Math.floor(Math.random() * 600);
            let arcY: number = Math.floor(Math.random() * 600);
            let opacity: number = Math.floor(Math.random() * 99);
            let radius: number = Math.floor(Math.random() * 15);





            drawCirclesOne(arcX, arcY, radius, opacity);
            drawEllipses(arcX, arcY, radius, opacity);
        }



        function drawSquares(_r: number, _g: number, _b: number): void {
            crc2.beginPath();
            crc2.fillRect(10, 100, 400, 40);


            crc2.rotate((Math.PI / 180) * Math.random() * 360);

            crc2.fillRect(200, 100, 40, 40);

            crc2.rotate((Math.PI / 180) * Math.random() * 360);


            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)";

            crc2.fillRect(200, 150, 40, 40);


            crc2.rotate((Math.PI / 180) * Math.random() * 360);

            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)";


            crc2.fillRect(250, 150, 40, 40);

            crc2.rotate((Math.PI / 180) * Math.random() * 360);


            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)";
            crc2.fillRect(250, 200, 40, 40);

            crc2.fill();

        }



        function drawEllipses(_arcX: number, _arcY: number, _radius: number, _opacity: number): void {

            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2, true);
            crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 + Math.PI);
            crc2.fill();

            crc2.fillStyle = "blue";
            crc2.beginPath();
            crc2.ellipse(150, 75, 50, 30, Math.PI * .25, 0, Math.PI);
            crc2.fill();

            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
            crc2.fill();

        }



        function drawCirclesOne(_arcX: number, _arcY: number, _radius: number, _opacity: number): void {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2, true);
            crc2.moveTo(55, 55);
            crc2.fillStyle = "#27ceff" + _opacity;
            crc2.fill();

        }

        for (let index: number = 0; index < 100; index++) {

            let arcX: number = Math.floor(Math.random() * 40);
            let arcY: number = Math.floor(Math.random() * 60);
            let radius: number = Math.floor(Math.random() * 15);
            let opacity: number = Math.floor(Math.random() * 99);

            drawCirclesTwo(arcX, arcY, radius, opacity);

            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255);

            drawSquares(r, g, b);
        }


        function drawCirclesTwo(_arcX: number, _arcY: number, _radius: number, _opacity: number): void {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2, true);
            crc2.moveTo(25, 25);
            crc2.fillStyle = "#FF4900" + _opacity;
            crc2.fill();
        }



        let newCanvas: HTMLElement = <HTMLElement>document.querySelector("#reloadBtn");

        newCanvas.addEventListener("click", function (): void {
            location.reload();

        });

    }

}

