// game asking a user to answer by "yes" or "no" if a proposed
// number is even or odd and resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import generateGame from '..';
import generateRandom from '../utils';

const gameDescription = '=== Answer \'yes\' if number is even otherwise answer \'no\' ===';

const isEven = num => (num % 2 === 0);

// define range for highest and lowest values possible
const lowerRange = 1;
const upperRange = 20;

const runEvenGame = () => {
  // generate a random number from 0 to 10000
  const question = generateRandom(lowerRange, upperRange);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runEvenGame);
