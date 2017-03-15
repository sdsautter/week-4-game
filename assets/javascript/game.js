var gameNumber = 0;
var userNumber = 0;
var linkValues = [];
var gameOver = false;

var wins = 0;
var losses = 0;

var nesRupee = new Audio("assets/sounds/LOZ_Get_Rupee.mp3");
var snesRupee = new Audio("assets/sounds/LTTP_Rupee1.mp3");
var ootRupee = new Audio("assets/sounds/OOT_Get_Rupee.mp3");
var botwRupee = new Audio("assets/sounds/ZSS_Rupee.mp3");


function newGame() {
    gameOver = false;
    userNumber = 0;
    linkValues = [];
    gameNumber = Math.floor(Math.random() * (120 - 19) + 19);

    $("#userNumber").html(userNumber);
    $("#userNumber").removeClass("winning-number");
    $("#userNumber").removeClass("losing-number");
    $("#gameNumber").html(gameNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);


    while (linkValues.length < 4) {
        var values = Math.floor((Math.random() * 12) + 1);
        if (linkValues.indexOf(values) < 0) {
            linkValues.push(values);
        }
    }

}

$("#nesLink").click(function() {
    if (gameOver === false) {
        userNumber = userNumber + linkValues[0];
       nesRupee.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#snesLink").click(function() {
    if (gameOver === false) {

        userNumber = userNumber + linkValues[1];
        snesRupee.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#ootLink").click(function() {
    if (gameOver === false) {

        userNumber = userNumber + linkValues[2];
        ootRupee.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#botwLink").click(function() {
    if (gameOver === false) {

        userNumber = userNumber + linkValues[3];
        botwRupee.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});


function gameChecker() {
    if (userNumber === gameNumber) {
        gameOver = true;
        wins++;
        $("#userNumber").attr("class", "winning-number");
        console.log(linkValues);
        setTimeout(newGame, 3000);
        console.log(linkValues);
    } else if (userNumber > gameNumber) {
        gameOver = true;
        losses++;
        $("#userNumber").attr("class", "losing-number");
        console.log(linkValues);
        setTimeout(newGame, 3000);
        console.log(linkValues);
    }
}

newGame();
