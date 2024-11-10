const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const computerChoiceSpan = document.getElementById("computer-choice");
const userChoiceSpan = document.getElementById("user-choice");
const resultSpan = document.getElementById("result");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    computerChoiceSpan.textContent = computerChoice;
    userChoiceSpan.textContent = userChoice;
    
    // Add shake animation to button
    const button = document.getElementById(userChoice);
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 500);  // Remove shake class after animation

    const result = getResult(userChoice, computerChoice);
    resultSpan.textContent = result;
}

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
