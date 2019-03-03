// game asking a user to answer if a proposed random number prime resulting in a win or loss
import { cons } from 'hexlet-pairs';
import generateGame from '..';
import generateRandom from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// define a range for a random number
const minNumber = 1;
const maxNumber = 1000;

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; (i * i) <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const question = generateRandom(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runPrimeGame);
