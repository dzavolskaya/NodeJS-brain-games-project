// game asking a user to compute a proposed mathematical expression consisting of random numbers
// then input calculation resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import { generateGame, generateRandom } from '..';

const gameDescription = '=== What is the result of the expression? ===';

const myArray = ['-', '+', '*'];

const runCalcGame = () => {
  const firstNumber = generateRandom(20);
  const secondNumber = generateRandom(20);
  // generate index from 0 to 2 and choose an element from myArray
  const randomOperand = myArray[generateRandom(3)];
  const question = `${firstNumber}${randomOperand}${secondNumber}`;
  let answer = '';
  if (randomOperand === '-') {
    answer = `${firstNumber - secondNumber}`;
  } else if (randomOperand === '+') {
    answer = `${firstNumber + secondNumber}`;
  } else if (randomOperand === '*') {
    answer = `${firstNumber * secondNumber}`;
  }
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runCalcGame);
