// game asking a user to compute a proposed mathematical expression consisting of random numbers
// then input calculation resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import generateGame from '..';
import generateRandom from '../utils';

const gameDescription = '=== What is the result of the expression? ===';

const myArray = ['-', '+', '*'];

// define range for random numbers for mathematical operations
const minRange = 1;
const maxRange = 20;

const runCalcGame = () => {
  const firstNumber = generateRandom(minRange, maxRange);
  const secondNumber = generateRandom(minRange, maxRange);
  // generate index and choose an element from myArray
  const randomOperand = myArray[generateRandom(0, myArray.length - 1)];
  const question = `${firstNumber}${randomOperand}${secondNumber}`;
  let answer = '';
  switch (randomOperand) {
    case '-':
      answer = `${firstNumber - secondNumber}`;
      break;
    case '+':
      answer = `${firstNumber + secondNumber}`;
      break;
    case '*':
      answer = `${firstNumber * secondNumber}`;
      break;
    // no default
  }
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runCalcGame);
