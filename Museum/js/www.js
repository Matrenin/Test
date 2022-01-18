// ========= header-menu ==========

var htmlMenu = document.getElementById("html-menu");
var cssMenu = document.getElementById("css-menu");
var jsMenu = document.getElementById("js-menu");
var gamesMenu = document.getElementById("games-menu");

function openMenu(menu) {
    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
        
// ===================================

var btn = document.getElementById("btn");
var play = document.getElementById("play");
var score = 0;

function addText(text) {
    document.getElementById("info").append(text);
}

play.addEventListener("click", function() {
    window.location.reload();
});

function checkAnswer(inputId, answer, n) {
    var userAnswer = document.getElementById(inputId).value;
    userAnswer = userAnswer.toLowerCase();
    if(userAnswer == answer) {
        score++;
    } else {
        addText("Oшибка в " + n + " вопросе.");
    }
}

btn.addEventListener("click", function() {
    checkAnswer("userAnswer1", "кольцо", 1);
    checkAnswer("userAnswer2", "веер", 2);

    addText("У вас " + score + " правильных ответа.");
});