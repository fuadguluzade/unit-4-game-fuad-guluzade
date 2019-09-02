var points = 0;
var goalNumber = Math.floor(Math.random() * 101 + 19);
var wins = 0;
var loses = 0;
$("#wins").text(wins);
$("#loses").text(loses);
$("#totalScore").text(points);
$("#goalScore").text(goalNumber);
setValues();


$(document).ready(function () {
    $(".crystal").on('click', function () {
        points += parseInt($(this).val());
        $("#totalScore").text(points);
        if (goalNumber == points) {
            wins++;
            $("#wins").text(wins);
            $("#message").text('You won!');
            restartGame();
        } else if (points >= goalNumber) {
            loses++;
            $("#loses").text(loses);
            $("#message").text("You lost!");
            restartGame();
        }
    });
});


function setValues() {
    var imgArray = [$("#c1"), $("#c2"), $("#c3"), $("#c4")];
    var valueArray = [];
    for (var i = 0; i < imgArray.length; i++) {
        var n = Math.floor(Math.random() * 12 + 1);
        while (valueArray.includes(n)){
            n = Math.floor(Math.random() * 12 + 1);
        }
        valueArray.push(n);
        imgArray[i].val(n);
    }
}

function restartGame() {
    setValues();
    points = 0;
    $("#totalScore").text(points);
    goalNumber = Math.floor(Math.random() * 101 + 19);
    $("#goalScore").text(goalNumber);
}


