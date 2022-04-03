"use strict";
var A02;
(function (A02) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector("body");
        let div0 = document.querySelector("#div1");
        let div1 = document.querySelector("#div2");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let span = document.querySelector("span");
        let position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "x-Koordinate " + x + " px" + " , " + "y-Koordinate " + y + " px" + _event.target;
    }
    function logInfo(_event) {
        console.log("The Event Phase is:", _event.eventPhase);
        console.log("The Event Target is:", _event.target);
        console.log("The Current Target is:", _event.currentTarget);
        console.log("The Event Type is:", _event.type);
        console.log(_event);
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=EventInspector.js.map