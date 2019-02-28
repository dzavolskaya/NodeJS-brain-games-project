// game asking a user to answer by "yes" or "no" if a proposed
// number is even or odd and resulting in a win or loss.
import readlineSync from 'readline-sync';
import { getName, generateRandom } from '..';

const runEvenGame = () => {
  console.log('=== Answer \'yes\' if the following number is even otherwise answer \'no\' ===');
  const name = getName();
  const checkEven = num => (num % 2 === 0);
  const maxNumber = 10000;
  const numberRounds = 3;
  let counter = 0;
  for (let round = 1; round <= numberRounds; round += 1) {
    const currentRandom = generateRandom(maxNumber);
    console.log(`Question: ${currentRandom} ?`);
    const correctAnswer = checkEven(currentRandom) ? 'yes' : 'no';
    const answer = readlineSync.question('=> Your answer: ');
    if (answer.toUpperCase() === correctAnswer.toUpperCase()) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  }
  if (counter === numberRounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Sorry, ${name}! You did not win all the rounds`);
  }
};

export default runEvenGame;
