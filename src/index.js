import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('Let\'s get started! May I have your name? ');
  console.log(`Hello,${name}!`);
  return;
}

export {
  greet
};
