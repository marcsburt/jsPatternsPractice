function CheckNums(num1, num2) {
  if (num1 === num2) return "-1";
  return num1 < num2 ? "true" : "false";
}

console.log(CheckNums(22, 22));
console.log(CheckNums(21, 22));
console.log(CheckNums(22, 21));
