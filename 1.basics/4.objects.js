/**
 * @description Objects
 *
 * group of like varaibles and functions
 *
 * {} represents an object literal
 */

let person = {
  name: "maaz",
  age: 26,
};

console.log(person);

// Accessing object's properties

// 1 - Dot Notation

// Reassign the value
person.name = "wahab";

// Read property
console.log(person.name);

// 2 - Bracket Notation

// Reassign the value
person["name"] = "faisal";

// Read property
console.log(person["name"]);

// Dynamic Selection using Bracket Property
let selection = "name";
person[selection] = "jawad";

console.log(person.name);
