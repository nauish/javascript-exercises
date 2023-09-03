const fibonacci = function (max) {
  if (max <= 1) {
    return max;
  } else {
    return fibonacci(max - 1) + fibonacci(max - 2);
  }
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
