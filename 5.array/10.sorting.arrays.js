/**
 * Sorting arrays
 *
 * sort and reverse method are use when yoyu have numbers and strings in an array
 *
 * but when you have objects it doesn't work by default we need to pass a callback function
 */

// Sorting with primitives
// const numbers = [2, 3, 1, 4];

// // sort in ascending order
// numbers.sort();

// // sort in descending order
// numbers.reverse();

// console.log(numbers);

// sorting with object type
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

// This function will take two arguments and return the greater one
// based on ASCII number the sort function will sort if returned 1 means yes
// ASCII numbers of upperCase letters are smaller than ASCII numbers for lowerCase letters
// Below we have just made them uppercase to avoid characters lower and uppercase problem and to match them
courses.sort(function name(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

/**
 * ASCII stands for american standard code for imformation interchange
 * it is the way computer stores the characters in it's memory
 */
