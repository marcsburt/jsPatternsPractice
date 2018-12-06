// find the longest word in a sentence

function LongestWord(sen) {
  sen = sen.replace(/[^\w\s]/gi, "").split(" ");
  let longWord;
  sen.forEach(element => {
    longWord =
      longWord === undefined || element.length > longWord.length
        ? element
        : longWord;
  });
  return longWord;
}

// keep this function call here
console.log(LongestWord("I love dogs"));
