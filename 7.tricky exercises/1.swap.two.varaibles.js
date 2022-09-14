/**
 * @description Swap values of two variables w/o using third variable
 * Asked at NSTP Once
 */

let a = 1;
let b = 2;
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
