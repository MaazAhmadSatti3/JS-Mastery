/**
 * filtering an array
 *
 * the filter method will loop through this array and run the callback
 * function for each element and see if they match the specified criteria
 * if the element matches the criteria into will add the element into a new
 * array and return new array
 */

const numbers = [1, 2, -1, 3];

const filtered = numbers.filter((value) => value >= 0);

console.log(filtered);
