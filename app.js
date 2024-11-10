const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const refreshButton = document.getElementById('refresh');  // Reference to the refresh button
let userChoice;
let computerChoice;
let result;

// Listen for the choices (rock, paper, or scissors)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  if (e.target.id !== 'refresh') {  // Prevent action if the refresh button is clicked
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  }
}));

// Generate the computer's random choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

// Determine the result of the game
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a tie!";
  } else if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You win!';
  } else if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You lose!';
  } else if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'You win!';
  } else if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You lose!';
  } else if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You lose!';
  } else if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You win!';
  }
  
  resultDisplay.innerHTML = result;
}

// Function to reset the game (clear all choices and results)
function resetGame() {
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  resultDisplay.innerHTML = '';
}

// Refresh button functionality
refreshButton.addEventListener('click', () => {
  resetGame();  // Reset the game when the button is clicked
});
