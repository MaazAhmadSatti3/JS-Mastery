/**
 * @title Callback Function
 *
 * @description A callback function is a function passed into another function as an argument,
 * which is then invoked inside the outer function to complete some kind of routine or action.
 *
 */

// E.g. 1 - A simple callback function to greet a user
function greeting(name) {
  console.log(`Hi, ${name}`);
}

function userName(callback) {
  var name = "Maaz";
  callback(name);
}

// E.g. 2 - A callback implementation for square of number
function calculateRandom(num) {
  console.log(`Numbers: ${num}, Square: ${num * num}`);
}

function squareOfRandomNumber(callback) {
  let num = Math.random();
  callback(num);
}

// Calling functions
userName(greeting);
squareOfRandomNumber(calculateRandom);
