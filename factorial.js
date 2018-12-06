function FirstFactorial(num, res) {
  res = res === undefined ? num : res * num;
  num -= 1;
  return num !== 0 ? FirstFactorial(num, res) : res;
}

function SecondFactorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * SecondFactorial(num - 1);
  }
}

function ThirdFactorial(num) {
  let factorial = 1;
  for (let i = 1; i < num + 1; i++) {
    factorial *= i;
  }
  return factorial;
}

function FourthFactorial(num) {
  return num !== 0 ? num * FourthFactorial(num - 1) : 1;
}

// keep this function call here
console.log(FirstFactorial(8));
console.log(SecondFactorial(8));
console.log(ThirdFactorial(8));
console.log(FourthFactorial(8));
