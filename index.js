const readline = require('readline');

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
  const secretNumber = getRandomNumber(1, 100);
  let attempts = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Welcome to the Number Guessing Game!");
  console.log("I've selected a number between 1 and 100. Can you guess it?");

  // Function to handle user input
  function guessNumber() {
    attempts++;
    rl.question("Enter your guess (between 1 and 100): ", (guess) => {
      guess = parseInt(guess);

      if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Please enter a valid number between 1 and 100.");
        guessNumber();
        return;
      }

      if (guess === secretNumber) {
        console.log(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
      } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
        guessNumber();
      } else {
        console.log("Too high! Try again.");
        guessNumber();
      }
    });
  }

  guessNumber();
}

// Start the game
startGame();
