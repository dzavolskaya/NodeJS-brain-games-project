import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// generator of random numbers with default highest value possible
const generateRandom = (max = 10000) => {
  const number = Math.floor((Math.random() * max));
  return number;
};
// launch game flow with maxumum rounds by default
const generateGame = (gameDescription, gameData, numberRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  // ask for player's name
  const name = readlineSync.question('Let\'s get started! May I have your name?\n=> ');
  console.log(`Hello,${name}!\n`);
  // launch game round
  for (let round = 1; round <= numberRounds; round += 1) {
    const input = gameData();
    const currentQuestion = car(input);
    const correctAnswer = cdr(input);
    console.log(`Question: ${currentQuestion} ?`);
    const currentAnswer = readlineSync.question('Your answer:\n==> ');
    if (currentAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return; // end of game round
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { generateGame, generateRandom };
