const image = document.getElementById('meme-image');
const counterSpan = document.getElementById('counter-span');
const lastGuess = document.getElementById('last-guess-span');

export function correctNumber() {
    return Math.ceil(Math.random() * 20);
}

export function compareNumbers(guess, correctNumber) {


}

export function resetGame(image, counterSpan, lastGuess, guessCounter) {
    guessCounter = 4;

    counterSpan.textContent = guessCounter;
    image.src = 'assets/start-guessing.png';
    lastGuess.textContent = '';
}