/**
 * finding elements in an array really depends in you are finding primitives or objects
 *
 * let's start with primitives
 */

const numbers = [1, 2, 3, 1, 4];

// indexOf returns index of elements if found or -1 if not found
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

// so to find an element in javascript array
console.log(numbers.indexOf(2) !== 0);

// in modern javascript we have includes method to do it
console.log(numbers.includes(1));
