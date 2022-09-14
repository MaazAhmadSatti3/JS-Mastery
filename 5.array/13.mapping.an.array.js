/**
 * In JavaScript we can use map method to map any element or item in
 * an array to something else
 *
 *
 */

const numbers = [-1, 2, 3, 4];

// 1 to construct some html markup

// const items = numbers.map((n) => "<li>" + n + "<li>");

// const html = items.join("");

// 2 when working with objects

// const items = numbers.map((n) => (obj = { value: n }));

// when chaining: using multiple methods simultaneously

const items = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 2);

console.log(items);
