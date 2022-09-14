/**
 * @description Logical Operators with Non-Booleans
 */

/**
 * Falsy (false) kind of like boolean false but not exactly the same
 * falsy values are
 * undefined, null, 0, false, "", NaN
 */

//  Logical operator continue search until it finds an operand which is true and return true value
const test1 = false || true;
const test2 = false || "Maaz";
const test3 = false || 1;

console.log(test1, test2, test3);

// short-circuiting
// Ignore all the operand at right as soon the OR operator finds a truthy value
const test4 = false || 1 || 2;
console.log(test4);

// Real World Example
// Suppose a user wants to select a color from default color so the current color?

// Intially userColor is set to undefined
// let userColor = undefined;
// let defaultColor = "blue";
// Then a user selects a color
let userColor = "green";
let currentColor = userColor || defaultColor;

console.log(currentColor);
