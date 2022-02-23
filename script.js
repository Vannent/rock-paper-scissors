let playerScore = 0
let computerScore = 0

for (let i = 0; i < 5; i++) {
    function computerPlay() {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log('Computer selected: ' + computerChoice)
    return computerChoice
    }
    let PlayerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (PlayerSelection!= undefined && PlayerSelection === "paper", "scissors", "rock") {
        if (PlayerSelection === "rock" && computerPlay() === "scissors") {
            playerScore += 1
            alert("You won!")
            console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "scissors" && computerPlay() === "paper") {
            playerScore += 1
            alert("You won!")
            console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "paper" && computerPlay() === "rock") {
            playerScore += 1
            alert("You won!")
            console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "paper" && computerPlay() === "paper") {
            alert("Draw!")
            console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "rock" && computerPlay() === "rock") {
            alert("Draw!")
            console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "scissors" && computerPlay() === "scissors") {
            alert("Draw!")
            console.log('Player selected: ', PlayerSelection);
        } else {
            computerScore += 1
            alert("You lost!")
            console.log('Player selected: ', PlayerSelection);
        }
    } else {
        alert("You need to make a correct selection.");
    }
}   

if (playerScore >= 3) {
    alert("Congratulations, you've won!")
} else {
    alert("Unfortunately, you've lost! Try again!")
}
console.log(playerScore, computerScore)