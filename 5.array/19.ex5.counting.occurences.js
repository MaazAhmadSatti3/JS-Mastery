/**
 * Count occurences
 *
 * A function that takes an array and a search element as an argument
 * that search element an integer will be search on an array and the
 * total no. of occurences will be return
 *
 */

const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  //   let count = 0;
  //   for (let element of array) {
  //     if (element === searchElement) {
  //       count++;
  //     }
  //   }
  //   return count;

  // with reduce method

  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    console.log(accumulator, currentValue, searchElement);
    return accumulator + occurrence;
  }, 0);
}
