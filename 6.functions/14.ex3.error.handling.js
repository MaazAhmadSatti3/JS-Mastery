/**
 *
 * error handling on the count occurence task in arrays
 *
 * Count occurence
 *
 * A function that takes an array and a search element as an argument
 * that search element an integer will be search on an array and the
 * total no. of occurences will be return
 *
 * error handling
 *
 * if first argument is not an array throw an exception
 * then wrap the executing lines in try catch block
 * then catch the excetion and log it on the console
 */

try {
  const numbers = true;

  const count = countOccurrences(numbers, 1);

  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("First argument is an array");

  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    console.log(accumulator, currentValue, searchElement);
    return accumulator + occurrence;
  }, 0);
}
