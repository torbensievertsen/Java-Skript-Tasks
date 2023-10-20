function oddNumbers(number1, number2) {
  let result = "";
  if (number1 < number2) {
    for (let index = number1; index <= number2; index++) {
      if (index > 0) {
        if (index % 2 === 1) {
          if (result != "") {
            result += ",";
          }
          result += index;
        }
      }
    }
  } else {
    for (let index = number2; index <= number1; index++) {
      if (index > 0) {
        if (index % 2 === 1) {
          if (result != "") {
            result += ",";
          }
          result += index;
        }
      }
    }
  }
  return result;
}
// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
console.log(oddNumbers(9, -12));

function charCount(word, char) {
  if (char.length === 1) {
    let charCounter = 0;
    for (let index = 0; index < word.length; index++) {
      if (word[index].toUpperCase() === char.toUpperCase()) {
        charCounter++;
      }
    }
    return charCounter;
  } else {
    return;
  }
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
