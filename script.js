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
    // Loops until user or computer has a score of 3
    while(wins < 3 && losses < 3){
        // Prompts user for choice
        var userChoice = window.prompt("First to Win 3 Rounds is the Champion\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties + "\n\nType R for Rock, P for Paper, or S for Scissors");

        // Action if user chooses Rock
        if(userChoice === "R"|| userChoice === "r" || userChoice === "Rock" || userChoice === "rock"){
    
            // Computer's random number corresponds with their choice of Rock:0, Paper:1, or Scissors:2
            var computerChoice = computerTurn();
            if(computerChoice === 0){
                ties++;
                window.alert("You Chose Rock\nI Chose Rock" + "\nIt's a Draw\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
            }
            else if(computerChoice === 1){
                losses++;
                window.alert("You Chose Rock\nI Chose Paper" + "\nI win!\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
            }
            else{
                wins++;
                window.alert("You Chose Rock\nI Chose Scissors" + "\nYou Won. :(\n\nYour Score: "+ wins +"\nMy Score: " + losses + "\nDraws: " + ties);
            }
        }

        // Action if user chooses Paper
        else if(userChoice === "P"|| userChoice === "p" || userChoice === "Paper" || userChoice === "paper"){

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
            if(endEarly == true){
                window.alert("Thanks For Playing!\nFinal Score\nYou: " + wins +"\nMe: " + losses);
                return
            }
            else{
                gamePlay();
            }
        }

        // Action if user doesn't enter appropriate response
        else{
            window.alert("Please chose either Rock, Paper, or Scissors");
        }
    }
    //  Alert if user wins
     if(wins === 3){
         console.log("user wins");
         window.alert("Congrats! You are the winner!\nFinal Score\nYou: " + wins +"\nMe: " + losses);
         playAgain();

     }
    //  Alert if computer wins
     if(losses === 3){
        window.alert("I Am Victorious! Better Luck Next Time\nFinal Score\nYou: " + wins +"\nMe: " + losses);
        playAgain();
     }
}

// Picks a random number between 0 and 2
function computerTurn(randomNumber){
    var randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

//Asks user if they want to play game again
function playAgain(){
    var newGame = window.confirm("Would you like to play again?");
    if(newGame === true){
        wins = 0;
        ties = 0;
        losses = 0;
        playGame();
    }
    else{
        window.alert("Have A Great Day!");
    }
}

playGame();
