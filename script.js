let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let noise = Math.random();
    if (noise < (1/3)) {
        return "rock";
    } else if (noise >= (1/3) && noise < (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your move: ");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock does not beat paper.");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Paper does not beat scissors.");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Scissors does not beat rock.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else {
        console.log("Tie!");
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("HUMAN: " + humanScore);
    console.log("COMPUTER: " + computerScore);
}

for (let i = 0; i < 5; i++) {
    playGame();
}