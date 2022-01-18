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
        
                // =============guess=============
        
        var number = parseInt(Math.random() * 15);
        var tryCount = 0;
        var maxTryCount = 3;
        var guessBtn = document.getElementById("guessBtn");
        var guessPlay = document.getElementById("guessPlay");
        
        function readInt() {
            return +document.getElementById("userAnswer").value;
        }
        
        function newText(text) {
            document.getElementById("info").innerHTML = text;
        }
        
        function hide(id) {
            document.getElementById(id).style.display = "none";
        }
        
        function play() {
            window.location.reload();
        }
        
        guessPlay.addEventListener("click", function() {
            play();
        });
        
        guessBtn.addEventListener("click", function() {
            tryCount++;
            var answer = readInt();
            if(answer == number) {
                newText("Поздравляю, вы угадали число.");
                hide("guessBtn");
                hide("userAnswer");
            } else if(tryCount >= maxTryCount) {
                newText("Bы проиграли, у вас кончились попытки. Правильный ответ: " + number);
                hide("guessBtn");
                hide("userAnswer");
            } else if(answer > number) {
                newText("Ваше число больше нужного. У вас осталось " + (maxTryCount - tryCount) + " попытки");
            } else {
                newText("Ваше число меньше нужного. У вас осталось " + (maxTryCount - tryCount) + " попытки");
            }
        });