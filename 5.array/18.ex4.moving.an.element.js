/**
 * A function which takes three parameters an array, an index and an offset
 * that index will determine which index element to offset in an array
 * offset will define the spaces to move an element to a targeted index
 *
 * Notice that the original array will remain uneffected and the method would
 * return a new array
 */

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 2);

console.log(output);

function move(array, index, offest) {
  const position = index + offest;

  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
