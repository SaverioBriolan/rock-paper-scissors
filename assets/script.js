//Announce for player
const ANNOUNCE = "Hello ! Choose your weapon Rock, Paper or Scissors ?"; 

// Randomly return Rock Paper or Scissors
function getComputerChoice () {
    randomNumber = Math.floor (Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1){
        return 'paper';
    } else {
        return 'scissors'
    }
} 

function playRound(playerSelection, computerSelection) {
    // Insensitive playerSelection
    playerSelection = playerSelection.toLowerCase();
    //Issues of the game
    const victory = "You win ! " + playerSelection + " beats " + computerSelection;
    const defeat = "You loose ! " + computerSelection + " beats " + playerSelection;
    const equality = "Equality " + playerSelection + " and " + computerSelection;

    if (playerSelection === computerSelection) {
        return equality;
    } else {
        //Rock comparison
        if (playerSelection === "rock"){
            if (computerSelection === "scissors"){
                return victory;
            } else {
            return defeat;
            }
        }
        //Paper comparison
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                return victory;
            } else {
            return defeat;
            }
        }
        //Scissors comparison
        if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                return victory;
            } else {
            return defeat;
            }
        }
    }
  }

let playerSelection = 'rock';
const computerSelection = getComputerChoice();

function game (){
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt (ANNOUNCE);
        let computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection).startsWith('You win')){
            scorePlayer ++; 
            console.log (scorePlayer);
        } else if (playRound(playerSelection, computerSelection).startsWith ('You loose')){
            scoreComputer ++;
            console.log (scoreComputer);
        }

        console.log(playRound(playerSelection, computerSelection));
        let score = "You = " + scorePlayer + " Computer = " + scoreComputer;
        console.log(score);

    }

    if (scorePlayer > scoreComputer){
         console.log("You are the winner");
    } else if(scorePlayer < scoreComputer) {
        console.log("LOOSER ! Take your chance again");
    } else {
        console.log("Equality maybe for a next time");
    }
  }

game ();

