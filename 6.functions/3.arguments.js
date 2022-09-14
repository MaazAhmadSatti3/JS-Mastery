/**
 * if we want to work with the functions arguments and we don't
 * know how much arguments are passed to it.
 *
 * how can we dynamically get arguments
 *
 * we have argument array object in javascript
 * by accessing argument we can access all the
 * elements in it
 */

console.log(sum(1, 2, 3, 4));

function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
