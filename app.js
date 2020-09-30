// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const lastGuess = document.getElementById('last-guess-span');
const image = document.getElementById('meme-image');
const counterSpan = document.getElementById('counter-span');

// initialize state
const computerNumber = Math.ceil(Math.random() * 20);

let guessCounter = 4;
counterSpan.textContent = guessCounter;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    guessCounter--;

    const value = userInput.valueAsNumber;
    const resultsOfCompare = compareNumbers(value, computerNumber);

    if (resultsOfCompare === 0) {
        image.src = 'assets/correct.jpg';
        lastGuess.textContent = 'You are correct!';
    } 
    if (resultsOfCompare === 1) {
        image.src = 'assets/too-high.jpg';
        lastGuess.textContent = 'That guess is too high.';
    } 
    if (resultsOfCompare === -1) {
        image.src = 'assets/too-low.jpg';
        lastGuess.textContent = 'That guess is too low.';
    }

    counterSpan.textContent = guessCounter;

});
