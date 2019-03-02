import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// maxumum rounds possible
const numberRounds = 3;

// launch game flow
export default (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`=== ${gameDescription} ===\n`);
  // ask for player's name
  const name = readlineSync.question('Let\'s get started! May I have your name?\n==> ');
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
      console.log(`${currentAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return; // end of game round
    }
  }
  console.log(`Congratulations, ${name}!`);
};
