const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let romanToInt = function (s) {
  let result = 0;
  const symbolChars = s.split("");
  for (let i = 0; i < symbolChars.length; i++) {
    const previousSymbol = symbolChars[i - 1];
    const currentSymbol = symbolChars[i];
    const nextSymbol = symbolChars[i + 1];
    if (symbols[currentSymbol] < symbols[nextSymbol]) {
      result = result + (symbols[nextSymbol] - symbols[currentSymbol]);
    } else if (symbols[previousSymbol] < symbols[currentSymbol]) {
      result = result;
    } else {
      result = result + symbols[currentSymbol];
    }
  }
  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
