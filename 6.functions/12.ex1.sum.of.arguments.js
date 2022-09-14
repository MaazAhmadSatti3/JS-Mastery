/**
 * A function that takes varying number of arguments
 * and and all the items also it can check to see
 * if it is an array and add all the elements
 */

console.log(sum(1, 2, 3, 4));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}
