$(document).ready(function () {
    var Random = Math.floor(Math.random() * 127 + 21)
    $('#randomNum').text("Match this: " + Random);

    var generatedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#userWins').text("Wins: " + wins);
    $('#userLosses').text("Losses: " + losses);

    function crystalNumbers() {
        for (i=0; i < 4; i++) {
            var num = Math.floor(Math.random() * 10 + 5);
            generatedNumbers.push(num);
        }
    };
    crystalNumbers();

    function resetGame() {
        Random = Math.floor(Math.random() * 127 + 21);
        $('#randomNum').text("Match this: " + Random);
        generatedNumbers = [];
        crystalNumbers();
        total = 0;
        $('#userScore').text("Your number: " + total);
    };

    function win() {
        alert("Congrats, you won!");
        wins++;
        $('#userWins').text("Wins: " + wins);
        resetGame();
    };

    function lose() {
        alert("Sorry, you just lost.");
        losses++;
        $('#userLosses').text("Losses: " + losses);
        resetGame();
    };

    $('#crystalOne').on('click', function () {
        total = total + generatedNumbers[0];
        $('#userNum').text("Your number: " + total);

        if (total == Random) {
            win();
        }
        else if (total > Random) {
            lose();
        }
    });

    $('#crystalTwo').on('click', function () {
        total = total + generatedNumbers[1];
        $('#userNum').text("Your number: " + total);

        if (total == Random) {
            win();
        }
        else if (total > Random) {
            lose();
        }
    });

    $('#crystalThree').on('click', function () {
        total = total + generatedNumbers[2];
        $('#userNum').text("Your number: " + total);

        if (total == Random) {
            win();
        }
        else if (total > Random) {
            lose();
        }
    });

    $('#crystalFour').on('click', function () {
        total = total + generatedNumbers[3];
        $('#userNum').text("Your number: " + total);

        if (total == Random) {
            win();
        }
        else if (total > Random) {
            lose();
        }
    });


});