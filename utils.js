/* const userGuess = Number(guess.value); */
export function compareNumbers(guess, correctNumber) {
    if (guess < correctNumber) {
        return -1;
    }
    if (guess > correctNumber) {
        return 1;
    }
    if (guess === correctNumber) {
        return 0;
    }
    
}

export function resetGame(image, counterSpan, lastGuess, guessCounter) {
    guessCounter = 4;

    counterSpan.textContent = guessCounter;
    image.src = 'assets/start-guessing.png';
    lastGuess.textContent = '';
}
