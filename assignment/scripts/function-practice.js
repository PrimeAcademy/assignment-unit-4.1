console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello()); // moved this back to the original!

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return console.log(`Hello, ${name}!`);
} //
// Remember to call the function to test
helloName("David");
helloName("Rebecca"); // Outputted both names correctly! Win! Stuck in term!

// 3. Function to add two numbers together & return the result

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(addNumbers(2, 5)); // followed this in class! Stuck again

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let multiplication = num1 * num2 * num3;
  return multiplication;
}

console.log(multiplyThree(2, 2, 3)); // output was 12

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

//We did this one pretty much in class!

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array == []) {
    return "undefined";
  }
  return array[array.length - 1];
}

// console.log(getLast([69, 3, 4, 5])); // *TEST* output is 5 so success!
// console.log(getLast([])); // *TEST* output undefined so success!

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
