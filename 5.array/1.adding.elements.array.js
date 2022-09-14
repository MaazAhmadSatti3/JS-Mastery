/**
 * add elements to end, start and middle of an array
 */

// A number array
const numbers = [3, 4, 5];

// End
numbers.push(6, 7);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);
