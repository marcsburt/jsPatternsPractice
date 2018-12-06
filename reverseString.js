"use strict";

// reverse a string
const str = "The quick Brown fox jumped over the lazy dog";

function FirstReverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function SecondReverse(str) {
  var returnArr = [];
  str.split("");
  for (let i = str.length; i >= 0; i--) {
    returnArr.push(str[i]);
  }
  return returnArr.join("");
}

function ThirdReverse(str, arr = []) {
  var splitStr = str.split("");
  if (splitStr.length > 0) {
    arr.push(splitStr.pop());
    return ThirdReverse(splitStr.join(""), arr);
  } else {
    return arr.join("");
  }
}

console.log(FirstReverse(str));
console.log(SecondReverse(str));
console.log(ThirdReverse(str));
