/**
 * we have two useful methods in modern JavaScrip
 *
 * every and some
 *
 * these both method iterate over an array but every checks to see
 * if all the elements match the specified criteria and some checks
 * to see if atleat one elements matches the criteria
 *
 * the search will then terminate and return true or false
 */

const numbers = [1, 2, -1, 3];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeatOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(allPositive);
console.log(atLeatOnePositive);
