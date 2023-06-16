//Announce for player
const ANNOUNCE = "Hello ! Choose your weapon Rock, Paper or Scissors ?";
//Number of round
let numberOfWins = 5;
//Loading
let scorePlayer = 0;
let scoreComputer= 0;
let playerSelection = 'rock';

// Randomly return Rock Paper or Scissors
function getComputerChoice () {
    randomNumber = Math.floor (Math.random() * 3);
    if (randomNumber == 1) {
        return 'rock';
    } else if (randomNumber == 2){
        return 'paper';
    } else {
        return 'scissors';
    }
} 
let computerSelection = getComputerChoice();
// Selector
const roundResult = document.querySelector('.roundResult');
const finalResult = document.querySelector('.finalResult');
const score = document.querySelector('.score');

function playRound(playerSelection, computerSelection) {
    console.log("Avant la comparaison = " + computerSelection);
    // Insensitive playerSelection
    playerSelection = playerSelection.toLowerCase();
    //Issues of the game
    const victory = "Well done ! (you :) " + playerSelection + " wins (computer :) " + computerSelection;
    const defeat = "You loose ! (you :) " + playerSelection + " loses against (computer :) " + computerSelection;
    const equality = "Equality (you :) " + playerSelection + " (and computer :) " + computerSelection;

    if (playerSelection === computerSelection) {
        roundResult.textContent = equality;
    } else {
        //Rock comparison
        if (playerSelection === "rock"){
            if (computerSelection === "scissors"){
                scorePlayer ++;
                roundResult.textContent = victory;
            } else {
                scoreComputer += 1;
                roundResult.textContent = defeat;
            }
        }
        //Paper comparison
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                scorePlayer += 1;
                roundResult.textContent = victory;
            } else {
                scoreComputer += 1;
                roundResult.textContent = defeat;
            }
        }
        //Scissors comparison
        if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                scorePlayer += 1;
                roundResult.textContent = victory;
            } else {
                scoreComputer += 1;
                roundResult.textContent = defeat;
            }
        }
    }
    //Score of round
    let textScore = "You =  " + scorePlayer + " Computer =  " + scoreComputer;
    console.log(scorePlayer + " " + scoreComputer);
    score.textContent = textScore;
  }

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');

function finalRound() {
    if (scorePlayer == numberOfWins || scoreComputer == numberOfWins) {
        if (scorePlayer > scoreComputer) {
            finalResult.textContent = "You are the winner";   
        } else if (scorePlayer < scoreComputer) {
            finalResult.textContent = "LOOSER ! Take your chance again";
        } else {
            finalResult.textContent = "Equality maybe for a next time";
        }
    }
}
function game() {

        rockButton.addEventListener('click', () => {
            playRound('rock', computerSelection = getComputerChoice());
            finalRound();
        });

        paperButton.addEventListener('click', () => {
            playRound('paper', computerSelection = getComputerChoice());
            finalRound();
        });

        scissorsButton.addEventListener('click', () => {
            playRound('scissors', computerSelection = getComputerChoice());
            finalRound();
        });
}
game();



