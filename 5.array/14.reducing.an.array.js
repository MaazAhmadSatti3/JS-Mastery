/**
 * reduce method
 *
 * sometimes we want sum of the elements in an array
 * let say sum of all the items in a shopping cart
 *
 * with reduce method we can reduce all the elemenets in an array
 * to a single value, that single value can be a number, string, object
 * or anything
 *
 */

const numbers = [-1, 1, 2, 3, 4];

// Traditional way
// let sum = 0;
// for (let n of numbers) sum += n;

// with reduce method
// reduce function has two parameter a callback function and the initial value for accumalator
// callback function has two arguments an accumalator and current value

// accumulator is the initial value we set after parenthesis

// a = -1, c = 1 => 0
// a = 0, c = 2 => 2
// a = 2, c = 3 => 5
// a = 5, c = 4 => 9

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
