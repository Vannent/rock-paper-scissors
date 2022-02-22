let PlayerSelection = prompt("Rock, Paper or Scissors?").toLowerCase;

function computerPlay() {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log('Computer selected:', computerChoice)
    return computerChoice
}

for (let i = 0; i < 5; i++) {
    PlayerSelection;
    computerPlay();
}