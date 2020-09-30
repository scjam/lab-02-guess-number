
/* const userGuess = Number(guess.value); */

export function correctNumber() {
    return Math.ceil(Math.random() * 20);
}

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    }
    if (guess < correctNumber) {
        return -1;
    }
    if (guess > correctNumber) {
        return 1;
    }
    
}

// export function resetGame(image, counterSpan, lastGuess, guessCounter) {
//     guessCounter = 4;

//     counterSpan.textContent = guessCounter;
//     image.src = 'assets/start-guessing.png';
//     lastGuess.textContent = '';
// }
