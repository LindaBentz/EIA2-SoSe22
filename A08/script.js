"use strict";
var A08;
(function (A08) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        for (let index = 0; index < 10; index++) {
            let y = 70 * index;
            let wobbleOne = Math.random() * index + Math.random() * 400;
            let wobbleTwo = Math.random() * 400;
            drawBackground(y, wobbleOne, wobbleTwo);
        }
        function drawBackground(_y, _wobbleOne, _wobbleTwo) {
            crc2.beginPath();
            crc2.moveTo(3800, _y);
            crc2.quadraticCurveTo(_wobbleOne, _wobbleTwo, 400, _y);
            crc2.quadraticCurveTo(_wobbleOne, _wobbleTwo, 75, _y);
            crc2.strokeStyle = "#87CEEB70";
            crc2.stroke();
        }
        for (let index = 0; index < 50; index++) {
            let arcX = Math.floor(Math.random() * 600);
            let arcY = Math.floor(Math.random() * 600);
            let opacity = Math.floor(Math.random() * 99);
            let radius = Math.floor(Math.random() * 15);
            drawCirclesOne(arcX, arcY, radius, opacity);
            drawEllipses(arcX, arcY, radius, opacity);
        }
        function drawSquares(_r, _g, _b) {
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
        function drawEllipses(_arcX, _arcY, _radius, _opacity) {
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
        function drawCirclesOne(_arcX, _arcY, _radius, _opacity) {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2, true);
            crc2.moveTo(55, 55);
            crc2.fillStyle = "#27ceff" + _opacity;
            crc2.fill();
        }
        for (let index = 0; index < 100; index++) {
            let arcX = Math.floor(Math.random() * 40);
            let arcY = Math.floor(Math.random() * 60);
            let radius = Math.floor(Math.random() * 15);
            let opacity = Math.floor(Math.random() * 99);
            drawCirclesTwo(arcX, arcY, radius, opacity);
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            drawSquares(r, g, b);
        }
        function drawCirclesTwo(_arcX, _arcY, _radius, _opacity) {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2, true);
            crc2.moveTo(25, 25);
            crc2.fillStyle = "#FF4900" + _opacity;
            crc2.fill();
        }
        let newCanvas = document.querySelector("#reloadBtn");
        newCanvas.addEventListener("click", function () {
            location.reload();
        });
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=script.js.map