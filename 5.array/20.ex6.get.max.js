/**
 * Get max
 *
 * A method that takes an array and return the maximum number in that array
 *
 */

const numbers = [1, 6, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  // simple implementation
  // if (array.length === 0) return undefined;

  // let max = array[0];

  // for (i = 1; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  //   return max;
  // }

  // with reduce method
  return array.reduce((a, b) => (a > b ? a : b));
}
