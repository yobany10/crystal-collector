$(document).ready(function () {
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#randomNum').text(Random)

    var generatedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#userWins').text(`Wins: ${wins}`);
    $('#userLosses').text(`Losses: ${losses}`);

    function crystalNumbers() {
        for (i=0; i < 4; i++) {
            var num = Math.floor(Math.random() * 7 + 1);
            generatedNumbers.push(num);
        }
    }
    crystalNumbers();

    function resetGame() {
        Random = Math.floor(Math.random() * 23 + 5);
        $('#randomNum').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#userScore').text(`Your number: ${score}`);
    }

    function win() {
        alert("Congrats, you won!");
        wins++;
        $('#userWins').text(wins);
        reset();
    }

    function lose() {
        alert("Sorry, you just lost.");
        losses++;
        $('#userLosses').text(losses);
        reset();
    }


})