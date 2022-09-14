/**
 * @description
 * Bitwise Operator
 */

// Bitwise operator

// Bitwise OR -> If either of this bit is 1 the result will be one otherwise 0
// 1 = 00000001
// 2 = 00000010
// R = 00000011
// which is equals to 3 so,
// 3 = 00000011
// console.log(1 | 2);

// Bitwise AND -> If both the number are 1 the result will be 1 otherwise 0
// 1 = 00000001
// 2 = 00000010
// R = 00000000
// which is equals to 0 so,
// 0 = 00000000
// console.log(1 & 2);

/**
 * Real World Example
 * Imagine we want to implement access control system
 * User can have read, write and execute operation
 * we can use one byte on information 8 bits to
 * determine what kind of permission user have
 * Read 00000100
 * Write 00000010
 * Execute 00000001
 */

// Decimal representation of binary into variable
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

// A default permission set to 0 means nothing
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "Yes" : "No";

console.log(message);
