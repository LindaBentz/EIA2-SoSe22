"use strict";
var A_03_MEMORY;
(function (A_03_MEMORY) {
    let cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray = [];
    let playfieldCards;
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let doneCards = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let startMemory = document.querySelector(".play");
        startMemory.addEventListener("click", main);
    }
    // FormData for Main
    let formData;
    let cardSize;
    let bGColor;
    let cardColor;
    let fontColor;
    let fontFamily;
    function createCard(_cards) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cards + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        doneCards.push(card);
        card.addEventListener("click", clickHandler);
        card.style.width = cardSize + "px";
        card.style.height = cardSize + "px";
        if (bGColor) {
            card.style.backgroundColor = bGColor.toString();
        }
        if (cardColor) {
            card.style.background = cardColor.toString();
        }
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        if (fontFamily) {
            card.style.fontFamily = fontFamily.toString();
        }
    }
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    function shuffleCards(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    function main(_event) {
        let fieldset = document.querySelector(".form");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]);
        console.log(formData);
        cardSize = Number(formData.get("Slider"));
        bGColor = formData.get("BGColor");
        cardColor = formData.get("BSColor");
        fontColor = formData.get("FColor");
        fontFamily = formData.get("Radiogroup");
        let pairs = formData.get("Stepper");
        if (pairs) {
            playfieldCards = Number(pairs);
        }
        else {
            playfieldCards = 5;
        }
        for (let i = 0; i < playfieldCards; i += 1) {
            createCard(cards[i]);
            createCard(cards[i]);
        }
        shuffleCards(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            var playerbox = document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
    function compareCards(_event) {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            doneCards.splice(0, 2);
        }
        else {
            for (var z = 0; z < cardsOpenArray.length; z++) {
                cardsOpenArray[z].classList.remove("open");
                cardsOpenArray[z].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        if (doneCards.length == 0) {
            alert("Congratulations! Please reload the page to play again.");
        }
    }
})(A_03_MEMORY || (A_03_MEMORY = {}));
//# sourceMappingURL=script.js.map