/**
 * A function that takes two parameters two array
 * first an array that consists of total elements
 * and a second array that consists of elements that
 * should be deducted from the first array
 */

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [2, 3]);

console.log(output);

function except(array, excluded) {
  const output = [];

  for (const element of array)
    if (!excluded.includes(element)) output.push(element);

  return output;
}
