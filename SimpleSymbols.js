function SimpleSymbols(str) {
  if (str.length < 3) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (!["+", "="].includes(str[i]) && isNaN(str[i])) {
      if (i === 0 || i === str.length - 1) {
        return false;
      }
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
}

console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
