var randomNumber = 0;
var scoreBoard;
var userScore;
var wins = 0;
var losses = 0;

var crystalValues = {
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
};


function reset() {
    randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber)
    
    crystalValues.crystal1 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal2 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal3 = Math.floor(Math.random() * 12 + 1);
    crystalValues.crystal4 = Math.floor(Math.random() * 12 + 1);
    console.log(crystalValues)
}

reset();

function popCrystal(evt, getCrystal) {
    document.getElementById(getCrystal).style.float = "right";
}


