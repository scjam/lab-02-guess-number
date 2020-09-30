// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('tests the compareNumbers function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const computerGuess = 10;
    
    const guessOne = 10;
    const guessTwo = 3;
    const guessThree = 12;
    //Act 
    // Call the function you're testing and set the result to a const
    const firstTest = compareNumbers(guessOne, computerGuess);
    const secondTest = compareNumbers(guessTwo, computerGuess);
    const thirdTest = compareNumbers(guessThree, computerGuess);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(firstTest, 0);
    expect.equal(secondTest, -1);
    expect.equal(thirdTest, 1);
});
