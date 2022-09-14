/**
 * Iterating an Array
 */

const numbers = [1, 2, 3, 4];

// As we know we use for of loop to iterate over an array
for (let number of numbers) {
  console.log(number);
}

// You may see for each loop in many cases for arrays
// For each loop takes a function as an parameter and it'll run for each element
numbers.forEach((number, index) => console.log(index, number));

// The callback function of for each loop also takes a second parameter, index
 