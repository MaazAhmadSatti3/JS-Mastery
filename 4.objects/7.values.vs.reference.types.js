/**
 * Value Types      *   Reference Types / Object Types
 * Number           *   Object
 * String           *   Function
 * Boolean          *   Array
 * Symbol
 * undefined
 * null
 *
 * In javascript functions as well as arrays behave like objects
 * So, it is important to know how value types and object types behaves
 */

let x = 10;
let y = x;

x = 20;
console.log(x, y); // 20 10
// the value was stored in a variable

let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a.value, b.value); // 20 20
// the value of an object is stored in an address and that address is stored in a variable
// that is how there referencing variable's value will also change

/**
 * Primitives are copied by their value
 * Objects are copied by their reference
 */

let number = 10;

function increaseNumber(number) {
  number++;
}

increaseNumber(number);
console.log(number); // 10
// the number variable value is completely independent hance returned the original values

let obj = { value: 10 };

function increaseNumber(obj) {
  obj.value++;
}

increaseNumber(obj);
console.log(obj); // 11
// the reference of the address of a variable was updated by a value

