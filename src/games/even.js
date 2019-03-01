// game asking a user to answer by "yes" or "no" if a proposed
// number is even or odd and resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import { generateGame, generateRandom } from '..';

const gameDescription = '=== Answer \'yes\' if number is even otherwise answer \'no\' ===';

const isEven = num => (num % 2 === 0);

const runEvenGame = () => {
  const question = generateRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runEvenGame);
