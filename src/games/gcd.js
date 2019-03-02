// game asking a user to find the greatest common divisor of proposed random numbers
// then input calculation resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import generateGame from '..';
import generateRandom from '../utils';

const gameDescription = '=== Find the greatest common divisor of given numbers ===';

// define range for random numbers for mathematical operations
const minRange = 2;
const maxRange = 100;

// recursive function to calculate the result
const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};
// function to sort parameters and return the result
const computeGCD = (x, y) => {
  let divident = x;
  let divisor = y;
  if (y > x) {
    divident = y;
    divisor = x;
  }
  return gcd(divident, divisor);
};

const runGCDGame = () => {
  const firstNumber = generateRandom(minRange, maxRange);
  const secondNumber = generateRandom(minRange, maxRange);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${computeGCD(firstNumber, secondNumber)}`;
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runGCDGame);
