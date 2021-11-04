var checkBox = document.querySelector("#switch");
var redText = document.querySelector("#redText");
var blueText = document.querySelector("#blueText");
var greenText = document.querySelector("#greenText");
var yellowText = document.querySelector("#yellowText");
var flame = document.querySelector("#flame")

function clickHandler(){
    if (checkBox.checked == true){
        redText.classList.add("redText");
        blueText.classList.add("blueText");
        greenText.classList.add("greenText");
        yellowText.classList.add("yellowText");
        flame.classList.add("flame-color");
        document.title = "Happy Diwali";
        document.body.style.background = "url('bg.png') center center no-repeat";
        document.body.style.backgroundSize = "cover";
    } else {
        redText.classList.remove("redText");
        blueText.classList.remove("blueText");
        greenText.classList.remove("greenText");
        yellowText.classList.remove("yellowText");
        flame.classList.remove("flame-color");
        document.title = "Diwali CSS";
        document.body.style.background = "#010016";
    }
}