# lab-02-guess-number
##Guess A Number

State: Guesses

View Derived from State:
- game copy
- image
- guess collector

HTML Elements Needed:
- Instructions
- Button
    - On click update the guess counter and DOM
- Image
    - Show a different image for correct or incorrect guesses
- Divs
    - Last guess high/low, guess counter, different messages
- Reset Button

On Button Click
1. Increment the guess counter in state - Update the DOM as state changes
2. Check if the current guess is correct:
    - If so: Image changes, message changes
3. Once four guesses complete, reset button appears
    - Reset guess counter, DOM elements to initial state