var gameNumber = 0;
var userNumber = 0;
var linkValues = [];

var wins = 0;
var losses = 0;

function newGame () {
	userNumber = 0;
	linkValues = [];
	gameNumber = Math.floor(Math.random() * (120 - 19) + 19);
	
	$("#userNumber").html(userNumber);
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
		userNumber = userNumber + linkValues[0];
		console.log(userNumber);
		$("#userNumber").html(userNumber);
		gameChecker();
	});
$("#snesLink").click(function() { 
		userNumber = userNumber + linkValues[1];
		console.log(userNumber);
		$("#userNumber").html(userNumber);
		gameChecker();

	});
$("#ootLink").click(function() { 
		userNumber = userNumber + linkValues[2];
		console.log(userNumber);
		$("#userNumber").html(userNumber);
		gameChecker();

	});
$("#botwLink").click(function() { 
		userNumber = userNumber + linkValues[3];
		console.log(userNumber);
		$("#userNumber").html(userNumber);
		gameChecker();

	});


function gameChecker() {
		if (userNumber === gameNumber) {
		wins++;
		console.log(linkValues);
		newGame();
		console.log(linkValues);
	} else if (userNumber > gameNumber) {
		losses++;
		console.log(linkValues);
		newGame();
		console.log(linkValues);
	}
}

newGame();


