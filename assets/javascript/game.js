var randomNumber = 0;
var scoreBoard;
var userScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

var crystalValues = {
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
};


function startgame() {
// Random number generator for the computer
    randomNumber = Math.floor(Math.random() * 102 + 19);

// Random number generator for each cryystal
    crystalValues.crystal1 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal2 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal3 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal4 = Math.floor(Math.random() * 12 + 1);

    
// Send random number to display
    $("#randomNumber").text(randomNumber)

    console.log(randomNumber);
    console.log(crystalValues)

}
// Function to add values of each crystal click
var addValues = function (crystalValues) {

    currentScore = currentScore + crystalValues;

    $("#yourScore").html(currentScore);

    console.log("Your current score:" + currentScore);
}

// Add to wins and losses box
if (currentScore > randomNumber) {
    losses++;

    $("losses").html(losses);
}

else if (currentScore === randomNumber) {
    wins++;

    $("wins").html(wins);
}

// Function to add the value of each click
$("#crystal1").click(function () {
    addValues(crystalValues.crystal1);

});

$("#crystal2").click(function () {
    addValues(crystalValues.crystal2);
});

$("#crystal3").click(function () {
    addValues(crystalValues.crystal3);
});

$("#crystal4").click(function () {
    addValues(crystalValues.crystal4);
});


startgame();





