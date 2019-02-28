import readlineSync from 'readline-sync';

const greet = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const name = readlineSync.question('Let\'s get started! May I have your name?\n=> ');
  console.log(`Hello,${name}!`);
  return name;
};

const generateRandom = (maxNumber) => {
  const make = Math.floor((Math.random() * maxNumber) + 1);
  return make;
};

export { greet, getName, generateRandom };
