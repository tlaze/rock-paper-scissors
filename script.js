var wins = 0;
var losses = 0;
var ties = 0;


// Initiates Game
function playGame(){
    var letsPlay = window.confirm("Lets play Rock, Paper, Scissors");
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
        while( wins < 3 && losses < 3){
        // Prompts user for choice
        var userChoice = window.prompt("First to Win 5 Rounds is the Champion\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties + "\n\nType R for Rock, P for Paper, or S for Scissors");

        // Action if user chooses Rock
        if(userChoice === "R"|| userChoice === "r" || userChoice === "Rock" || userChoice === "rock"){
            console.log("User chose Rock");
    
            // Computer's random number corresponds with their choice of Rock:0, Paper:1, or Scissors:2
            var computerChoice = computerTurn();
            if(computerChoice === 0){
                ties++;
                window.alert("You Chose Rock\nI Chose Rock" + "\nIt's a Draw\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
            }
            else if(computerChoice === 1){
                losses++;
                window.alert("You Chose Rock\nI Chose Paper" + "\nI win!\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
                console.log(wins,ties,losses)
            }
            else{
                wins++;
                window.alert("You Chose Rock\nI Chose Scissors" + "\nYou Won. :(\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
            }
   
        }
        // Action if user chooses Paper
        else if(userChoice === "P"|| userChoice === "p" || userChoice === "Paper" || userChoice === "paper"){
            console.log("User chose Paper");
            // Computer's random number corresponds with their choice of Rock:0, Paper:1, or Scissors:2
            var computerChoice = computerTurn();
            if(computerChoice === 0){
                wins++;
                window.alert("You Chose Paper\nI Chose Rock" + "\nYou Won. :(\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);

            }
            else if(computerChoice === 1){
                ties++;
                window.alert("You Chose Paper\nI Chose Paper" + "\nIt's a Draw\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);


            }
            else{
                losses++;
                window.alert("You Chose Paper\nI Chose Scissors" + "\nI win!\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);

            }
        }
        // Action if user choses Scissors
        else if(userChoice === "S"|| userChoice === "s" || userChoice === "Scissors" || userChoice === "scissors"){

            // Computer's random number corresponds with their choice of Rock:0, Paper:1, or Scissors:2
            var computerChoice = computerTurn();
            if(computerChoice === 0){
                losses++;
                window.alert("You Chose Scissors\nI Chose Rock" + "\nI win!\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);

            }
            else if(computerChoice === 1){
                wins++;
                window.alert("You Chose Scissors\nI Chose Paper" + "\nYou won. :(\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);

            }
            else{
                ties++;
                window.alert("You Chose Scissors\nI Chose Scissors" + "\nIt's a Draw\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);

            }
        }
        //Action if user choses to cancel mid game
        else if(userChoice === null){
            var endEarly = confirm("Are you sure you want to end the game?\nClick 'Ok' to End or 'Cancel' to Return to the Game");
            console.log(endEarly);
            if(endEarly == true){
                window.alert("Thanks For Playing!\nFinal Score\nYou: " + wins +"\nMe: " + losses);
                return;
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
    //  Alert if user wins
     if(wins === 3){
         console.log("user wins");
     }
    //  Alert if computer wins
     if(losses === 3){
         console.log("computer wins");
     }
}

function computerTurn(randomNumber){
    // Picks a random number between 0 and 2
    var randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

playGame();
