"use strict";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const vowels = ["a", "e", "i", "o", "u"];
function LetterChanges(str) {
  const splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (alphabet.includes(splitStr[i])) {
      var alphIdx = alphabet.indexOf(splitStr[i]);
      splitStr[i] =
        alphIdx === alphabet.length - 1 ? alphabet[0] : alphabet[alphIdx + 1];
    }
    if (vowels.includes(splitStr[i])) {
      splitStr[i] = splitStr[i].toUpperCase();
    } else {
      splitStr[i] = splitStr[i];
    }
  }
  return splitStr.join("");
}

console.log(LetterChanges("hello*3"));
