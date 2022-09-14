/**
 * @description Implement a JavaScript function that takes an array and return no. of truthy values
 * List of falsy values
 * undefined
 * null
 * ''
 * false
 * 0
 * NaN
 */

const array = [0, null, undefined, "", false, NaN, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  // having multiple OR || condition in if is a very poor way of writing code
  // like here if we compare all the falsy values in an if statement
  for (let value of array) if (value) count++;
  return count;
}
