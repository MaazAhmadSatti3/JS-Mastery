/**
 * How to empty an array
 */

let numbers = [1, 2, 3, 4];

// Solution 1
// numbers = [];
/**
 * Problem
 * If the numbers array refernce another array in a program
 * the elements of the number array will not be collected by garbage
 * collector only the numbers array will be assigned the new initialization []
 */

// Solution 2
numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
// while (numbers.length > 0) numbers.pop();

console.log(numbers);
