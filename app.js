// import functions and grab DOM elements
import { resetGame } from './utils.js';

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');

// initialize state
let guessCounter = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    guessCounter--;

    const value = userInput.valueAsNumber;

});