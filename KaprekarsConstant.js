"use strict";
var counter = 0;
function KaprekarsConstant(num) {
  if (num === 6174) {
    return counter;
  }
  counter++;
  if (num < 1000) {
    num *= 10;
  }
  const numArray = num
    .toString()
    .split("")
    .sort(function(a, b) {
      return a - b;
    });
  const rNum = numArray.join("");
  const Num = numArray.reverse().join("");
  return KaprekarsConstant(parseInt(Num - rNum));
}

console.log(KaprekarsConstant(1112));
