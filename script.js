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
    const results = document.querySelector("#results");
    if (humanChoice == "rock" && computerChoice == "scissors") {
        results.textContent = "You win! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! Rock does not beat paper.";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! Paper does not beat scissors.";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        results.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! Scissors does not beat rock.";
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = "You win! Scissors beats paper.";
        humanScore++;
    } else {
        results.textContent = "Tie!";
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("HUMAN: " + humanScore);
    console.log("COMPUTER: " + computerScore);
}

const choices = document.querySelector("#choices");
const scores = document.querySelector("#scores");

choices.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
    scores.textContent = `HUMAN ${humanScore}, COMPUTER ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
        const winner = document.createElement("h2");
        if (humanScore >= 5) {
            winner.textContent = "YOU WIN!";
        } else {
            winner.textContent = "YOU LOSE!";
        }
        document.body.appendChild(winner);
    }
});