console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello there ${name} 🤓`;
}
console.log(helloName("Michael"));
// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log("Should be 8", addNumbers(3, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log("Should be 1800", multiplyThree(8, 15, 15));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  return number > 0;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
const arrayTest = [1, 2, 3, 4];

function getLast(array) {
  return array[array.length - 1];
}
console.log("getLast should be 4", getLast(arrayTest));
console.log("getLast should be undefined", getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log("find should return true", find(1, arrayTest));
console.log("find should return false", find(8, arrayTest));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string[0] === letter;
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let num in array) {
    sum += +num;
  }
  return sum;
}

console.log("sumAll should be 10", sumAll(arrayTest));
console.log("sumAll should be 0", sumAll([]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const getPostiveNumbers = (array) => {
  return array.filter((num) => num > 0);
};

console.log(
  "getPostiveNumbers should return an array with 12, 34, 4",
  getPostiveNumbers([12, 34, -32, 4])
);
console.log(
  "getPostiveNumbers should return an empty array",
  getPostiveNumbers([-12, -34, -32, -4])
);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Length of a Nested Array
// https://edabit.com/challenge/yXSTvCNen2DQHyrh6
// Write a function that returns the total number of non-nested items in a nested array
// i.e. [1, [2, 3]] => 3
const getLength = (array) => {
  let count = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      count += item.length;
    } else {
      count += 1;
    }
  }

  return count;
};

console.log("getLength should return 3", getLength([1, [2, 3]]));
console.log("getLenght should return 7", getLength([1, [2, 3], [2, 3, 56, 3]])); // should return 7

// https://edabit.com/challenge/xZapQmtZz4Eu5Zjqs
// Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.
// only letters and no white spaces

const testString = "Hello! this. is. a test :)";

const charCount = (string) => {
  // get all Letters
  const chars = [];
  for (let char of string) {
    if (char.match(/[a-zA-Z]/)) {
      chars.push(char.toLowerCase());
    }
  }

  // get the count for each letter, alphabetically sort, and store in an object
  count = {};
  for (let char of chars.sort()) {
    if (char in count) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  // transfer data to a string
  let countString = "";
  for (let keyChar in count) {
    countString += `${keyChar}:${count[keyChar]} `;
  }

  // return string
  return countString;
};

console.log(charCount(testString));
console.log(charCount("Another test here yayyyy13@#($*%*#(!))"));
