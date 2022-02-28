let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const rockSelection = document.getElementById("rock").addEventListener("click", () => clickOn("rock"));
const paperSelection = document.getElementById("paper").addEventListener("click",() => clickOn("paper"));
const scissorsSelection = document.getElementById("scissors").addEventListener("click", () => clickOn("scissors"));
const playerScoreTrack = document.getElementById("player-score");
const computerScoreTrack = document.getElementById("computerscore");


function clickOn(playerSelection) {
    console.log("Player selected: ", playerSelection);
    playRound(playerSelection, computerSelection);
    if (playerScore >= 3) {
        alert("Congratulations, you've won!")
        console.log("Player score: ", playerScore, "Computer score: ", computerScore)
        resetGame();
    } if (computerScore >= 3) {
        alert("Unfortunately, you've lost! Try again!")
        console.log("Player score: ", playerScore, "Computer score: ", computerScore)
        resetGame();
    }
    playerScoreTrack.textContent = playerScore;
    computerScoreTrack.textContent = computerScore; 
}


function computerPlay() {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        alert("Draw!");
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Draw!");
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert("Draw!");
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        console.log(playerSelection, computerSelection);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log(playerSelection, computerSelection);
    } else {
        computerScore += 1;
        console.log(playerSelection, computerSelection);
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}