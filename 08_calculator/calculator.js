const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => {
    return total * current;
  }, 0);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (int) {
  if (int === 0 || int === 1) return 1;
  else return int * factorial(int - 1);
};

const factorialLoop = function (int) {
  let answer = 1;
  if (int === 0 || int === 1) return 1;
  for (let i = int; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

console.log(factorialLoop(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
