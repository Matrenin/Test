var balance = +1000;
var gameBtn = document.getElementById("gameBtn");
var numberBtn = document.getElementById("numberBtn");
var colorBtn = document.getElementById("colorBtn");
var play = document.getElementById("play");

function getRandomNumber(to) {
    return Math.round(Math.random() * to);
}

function fortuna(rnd) {
    var array0 = [0, "цвет"];
    var array1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    for(var i = 0; i < array1.length; i++) {
        array1[i] = +array1[i];
        if(rnd == array1[i]) {
            array0 = [rnd, "красное"];
            return array0;
        }
    }

    var array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
    for(var i = 0; i < array2.length; i++) {
        array2[i] = +array2[i];
        if(rnd == array2[i]) {
            array0 = [rnd, "черное"];
            return array0;
        }
    }

    var array3 = [0];
    for(var i = 0; i < array3.length; i++) {
        array3[i] = +array3[i];
        if(rnd == array3[i]) {
            array0 = [0, "зеро"];
            return array0;
        }
    }
}

function newText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function readInput(id) {
    return document.getElementById(id).value;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "flex";
}

function addText(id, text) {
    document.getElementById(id).append(text);
}

play.addEventListener("click", function() {
    window.location.reload();
});

gameBtn.addEventListener("click", function() {
    var answer = readInput("game");
    if(answer == "1") {
        hide("gameBox");
        show("numberBox");
    } else if(answer == "2"){
        hide("gameBox");
        show("colorBox");
    } else if(answer == "quit") {
        hide("gameBox");
        addText("result", "Конец игры.");
        newText("balance", balance)
    }
});

numberBtn.addEventListener("click", function() {
    var cifra = readInput("userNumber");
    var stavka = readInput("stavkaNumber");
    if(stavka <= balance) {
        var result = getRandomNumber(36);
        var array00 = fortuna(result);
        balance -= stavka;
        newText("result", "Выпало число " + array00[0] + ", " + array00[1] +".\nВы загадали число: " + cifra + ", размер ставки равен " + stavka + " кредитов. ");
        if(cifra == result) {
            balance += stavka * 35;
            addText("result", "Сумма выигрыша составила " + stavka * 35 + " фишек.\n");
            newText("balance", balance);
            hide("numberBox");
            show("gameBox");
            newText("mainText", "Ваш баланс равен " + balance + " кредитов, выбеите игру: нажмите цифру 1 - для угадывания числа, нажмите цифру 2 - для угадывания цвета. Для выхода введите quit.")
        } else if(cifra != result) {
            addText("result", "Текущий остаток равен " + balance + " фишек.\n")
            newText("balance", balance);
            hide("numberBox");
            show("gameBox");
            newText("mainText", "Ваш баланс равен " + balance + " кредитов, выбеите игру: нажмите цифру 1 - для угадывания числа, нажмите цифру 2 - для угадывания цвета. Для выхода введите quit.")
        }
    } else {
        addText("result", "Вы указали сумму превышающую текущее количество кредитов на балансе.");
    }
});

colorBtn.addEventListener("click", function() {
    var cvet = readInput("userColor");
    var color;
    if(cvet == 1) {
        color = "черное";
    } else if(cvet == 2) {
        color = "красное";
    } 
    var stavka = readInput("stavkaColor");
    if(stavka <= balance) {
        var result = getRandomNumber(36);
        var array00 = fortuna(result);
        balance -= stavka;
        newText("result", "Выпало число " + array00[0] + ", " + array00[1] +".\nВы загадали цвет: " + color + ", размер ставки равен " + stavka + " фишек. ");
        if(color == array00[1]) {
            balance += stavka * 2;
            addText("result", "Сумма выигрыша составила " + stavka * 2 + " фишек. ");
            newText("balance", balance);
            hide("colorBox");
            show("gameBox");
            newText("mainText", "Ваш баланс равен " + balance + " кредитов, выбеите игру: нажмите цифру 1 - для угадывания числа, нажмите цифру 2 - для угадывания цвета. Для выхода введите quit.");
        } else if(array00[1] == "зеро") {
            balance += stavka / 2;
            addText("result", "Сумма выигрыша составила " + stavka / 2 + " фишек.\n");
            newText("balance", balance);
            hide("colorBox");
            show("gameBox");
            newText("mainText", "Ваш баланс равен " + balance + " кредитов, выбеите игру: нажмите цифру 1 - для угадывания числа, нажмите цифру 2 - для угадывания цвета. Для выхода введите quit.");
        } else if(color != array00[1]) {
            addText("result", "Текущий остаток равен " + balance + " фишек.\n");
            newText("balance", balance);
            hide("colorBox");
            show("gameBox");
            newText("mainText", "Ваш баланс равен " + balance + " кредитов, выбеите игру: нажмите цифру 1 - для угадывания числа, нажмите цифру 2 - для угадывания цвета. Для выхода введите quit.");
        }
    } else {
        addText("result", "Вы указали сумму превышающую текущее количество кредитов на балансе.\n");
    }
});

