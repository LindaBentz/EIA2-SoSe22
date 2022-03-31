namespace A02 {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        let div0: HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");
        let div1: HTMLDivElement = <HTMLDivElement>document.querySelector("#div2");


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

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.pageX;
        let y: number = _event.pageY;

        let span: HTMLElement = <HTMLElement>document.querySelector("span");

        let position: HTMLElement = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "x-Koordinate " + x + " px" + " , " + "y-Koordinate " + y + " px";
    }

    function logInfo(_event: Event): void {
        console.log("The Event Phase is:", _event.eventPhase);
        console.log("The Event Target is:", _event.target);
        console.log("The Current Target is:", _event.currentTarget);
        console.log("The Event Type is:", _event.type);
    }
}


