const convertToCelsius = function(f) {
  if (Number.isFinite(f)){
    const c = (f - 32 ) * 5/9 
    if (Number.isInteger(c)) {
      return c
    } return Math.round(c*10)/10
  }
};

const convertToFahrenheit = function(c) {
  if (Number.isFinite(c)){
    const f = c * 9 / 5 + 32 
    if (Number.isInteger(f)) {
      return f
    } return Math.round(f*10)/10
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
