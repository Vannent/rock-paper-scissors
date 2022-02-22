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
        alert("Congratulations, you've won!");
        console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "scissors" && computerPlay() === "paper") {
        alert("Congratulations, you've won!");
        console.log('Player selected: ', PlayerSelection);
        } else if (PlayerSelection === "paper" && computerPlay() === "rock") {
        alert("Congratulations, you've won!");
        console.log('Player selected: ', PlayerSelection);
        } else {
        alert("Unfortunately, you've lost!");
        console.log('Player selected: ', PlayerSelection);
        }
    } else {
        alert("You need to make a correct selection.");
    }
}   