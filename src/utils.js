// generator of random integers between min and max both inclusive
const generateRandom = (min, max) => {
  const number = Math.floor(Math.random() * ((max + 1) - min)) + min;
  return number;
};

export default generateRandom;
