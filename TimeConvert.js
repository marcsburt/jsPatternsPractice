function TimeConvert(num) {
  let hours = Math.floor(num / 60);
  let min = num % 60;

  return hours + ":" + min;
}

console.log(TimeConvert(126));
console.log(TimeConvert(45));
