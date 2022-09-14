/**
 * Remove elements from an array
 */

const numbers = [3, 4, 7, 8];

// // End
const last = numbers.pop();

// // Begging
const first = numbers.shift();

// Middle
const mid = numbers.splice(1, 1);

// Result
console.log(numbers);
