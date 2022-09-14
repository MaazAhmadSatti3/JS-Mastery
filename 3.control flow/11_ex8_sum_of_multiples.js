/**
 * A function that takes a number as an argument "limit" and returns sum of multiples of 3 and 5,
 *
 * for e.g. with limit 10
 *
 * Multiples of 3: 3, 6, 9
 * Multiples of 5: 5, 10
 *
 * sum -> 33
 */

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
