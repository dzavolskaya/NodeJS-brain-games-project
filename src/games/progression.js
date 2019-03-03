// game asking a user to compute a proposed mathematical expression consisting of random numbers
// then input calculation resulting in a win or loss.
import { cons } from 'hexlet-pairs';
import generateGame from '..';
import generateRandom from '../utils';

const gameDescription = 'What number is missing in the progression?';
const minStep = 1;
const maxStep = 10;

const arrayLength = 10;

const runProgressionGame = () => {
  const startValue = generateRandom(minStep, maxStep); // define start index value
  const currentStepSize = generateRandom(minStep, maxStep);
  const hiddenElementPosition = generateRandom(0, arrayLength - 1);
  const progressionArray = [];
  for (let i = 0; i < arrayLength; i += 1) {
    progressionArray[i] = startValue + (i * currentStepSize);
  }
  const answer = (progressionArray[hiddenElementPosition]).toString();
  progressionArray[hiddenElementPosition] = '..';
  const question = progressionArray.join(' '); // to remove commas when dispaying array
  return cons(question, answer);
};

export default () => generateGame(gameDescription, runProgressionGame);
