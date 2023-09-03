const palindromes = function (str = "racecar") {
  const reducedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = reducedStr.length - 1;
  while (left < right) {
    if (reducedStr[left] !== reducedStr[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
