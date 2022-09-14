/**
 * implement a method that takes two parameter for range and
 * return an array consisting of numbers between that range
 */

const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const arr = [];

  for (i = min; i <= max; i++) arr.push(i);

  return arr;
}
