/**
 * Rest Operator
 *
 * in modern javascript if you want to have a function
 * with varying number of parameter you can use rest operator
 *
 * when insert varying no of arguments in to a function
 * rest put and return them in an array
 *
 *
 * NOTE: Rest parameter must be last formal parameter
 */

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

/**
 * Example
 *
 * let say we want to calculate the sum of total elements in the shopping cart
 * and we have a discount factor
 */

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
