var computerNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var scoreBoard;
var userScore;
var wins = "0";
var losses = "0";


function startNewGame() {
var min=19; 
    var max=120;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    // document.write("Random Number Generated : " + random );  
console.log(random);
}

//     function getRandomIntInclusive(min, max) {
//         min = Math.ceil(19);
//         max = Math.floor(120);
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//       }
    // computerNumber = Math.floor(Math.random() * 19-120 +1);
    
// }

startNewGame()


// $(document).ready(function startGame() {
//     var randomNumber = Math.floor(Math.random() * 100+21);
//     $("#numberToGet").text(randomNumber);
//     alert("randomNumber");
// })

// var min=19; 
//     var max=120;  
//     var random =Math.floor(Math.random() * (+max - +min)) + +min;
//     document.write("Random Number Generated : " + random );     
    // alert(random);

// startGame();



