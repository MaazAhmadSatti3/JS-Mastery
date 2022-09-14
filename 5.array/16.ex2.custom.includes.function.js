const numbers = [1, 2, 3, 4];

// checking an element by includes method
// const check = numbers.includes(1);
// console.log(check);

const check = includes(numbers, 1);
console.log(check);

// custom includes method
function includes(array, searchElement) {
  for (element of array) if (element === searchElement) return true;
  return false;
}
