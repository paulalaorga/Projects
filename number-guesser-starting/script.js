let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDifference = Math.abs(target - humanGuess);
  const computerDifference = Math.abs(target - computerGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

console.log(advanceRound, updateScore)
console.log(compareGuesses(5, 8, 7))
