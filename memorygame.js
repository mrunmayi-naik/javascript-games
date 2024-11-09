const cardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' }
];

// Shuffle the cards
cardArray.sort(() => 0.5 - Math.random());

// Get HTML elements
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const highestScoreDisplay = document.querySelector('#highest-score');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let moves = 0;  // Track the number of moves
let highestScore = localStorage.getItem('highestScore') || Infinity; // Retrieve highest score from localStorage

// Initialize highest score display
if (highestScore === 'Infinity') {
    highestScoreDisplay.textContent = 'No score yet';
} else {
    highestScoreDisplay.textContent = highestScore;
}

// Create game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

// Check for card match
function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    moves++;  // Increment the move count each time the player makes a pair of guesses

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same card!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }

    // Update result display (score)
    resultDisplay.textContent = `Moves: ${moves}`;
    cardsChosen = [];
    cardsChosenIds = [];

    // Check if all pairs are found
    if (cardsWon.length === cardArray.length / 2) {
        // Check and update the highest score
        if (moves < highestScore) {
            highestScore = moves;
            highestScoreDisplay.textContent = highestScore;
            localStorage.setItem('highestScore', highestScore);  // Save highest score in localStorage
        }
        resultDisplay.textContent = `Congratulations! You found all matches in ${moves} moves!`;
    }
}

// Flip card
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
