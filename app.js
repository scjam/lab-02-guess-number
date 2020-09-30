// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const lastGuess = document.getElementById('last-guess-span');
const image = document.getElementById('meme-image');
// const resetButton = document.getElementById('reset-button');

// initialize state
const computerNumber = Math.ceil(Math.random() * 20);
console.log(computerNumber);

let guessCounter = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    guessCounter--;

    const value = userInput.valueAsNumber;
    const resultsOfCompare = compareNumbers(value, computerNumber);

    if (resultsOfCompare === 0) {
        image.src = 'assets/too-low.jpg';
        lastGuess.textContent = 'That guess is too low.';
    }
    if (resultsOfCompare === 1) {
        image.src = 'assets/too-high.jpg';
        lastGuess.textContent = 'That guess is too high.';
    } 
    if (resultsOfCompare === -1) {
        image.src = 'assets/correct.jpg';
        lastGuess.textContent = 'You are correct!';
    } 

    //display counter of remaining

});

// resetButton.addEventListener('click', () => {
//     resetGame();
// });