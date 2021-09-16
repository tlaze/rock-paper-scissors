var wins = 0;
var losses = 0
var ties = 0;


// Initiates Game
function playGame(){
    var letsPlay = confirm("Lets play Rock, Paper, Scissors");
        // If user hits Ok then game starts and user is prompted with choice
        if(letsPlay === true){
            gamePlay();
        }
        // If the user declines to play
        else{
            alert("Lets play soon! Refresh the page when you are ready.");
        }
}
//Prompts user for choices and determines who won that round
function gamePlay(){

        // Prompts user for choice
        var userChoice = prompt("Type R for Rock, P for Paper, or S for Scissors");

        // Action if user chooses Rock
        if(userChoice === "R"|| userChoice === "r" || userChoice === "Rock" || userChoice === "rock"){
            console.log("User chose Rock");
        }
        // Action if user chooses Paper
        else if(userChoice === "P"|| userChoice === "p" || userChoice === "Paper" || userChoice === "paper"){
            console.log("User chose Paper");
        }
        // Action if user choses Scissors
        else if(userChoice === "S"|| userChoice === "s" || userChoice === "Scissors" || userChoice === "scissors"){
            console.log("User chose Scissors");
        }
        else if(userChoice === null){
            var endEarly = confirm("Are you sure you want to end the game?\nClick 'Ok' to End or 'Cancel' to Return to the Game");
            console.log(endEarly);
            if(endEarly == true){
                alert("Thanks For Playing!");
            }
            else{
                gamePlay();
            }
        }
        // Action if user doesn't enter appropriate response
        else{
            alert("Please chose either Rock, Paper, or Scissors");
            console.log(userChoice);
            gamePlay();
        }
}

playGame();
