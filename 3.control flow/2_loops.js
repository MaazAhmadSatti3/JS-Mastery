/**
 * In JavaScript we have different kind of loops and essentially does the samething,
 * they repeat an action number of times
 *
 * Types of loops we have
 * 1 for
 * 2 while
 * 3 do while
 * 4 for in
 * 5 for of
 *
 * All loop does the samething the difference is how they start and end
 */

/*********************************** for loop ***********************************/

// for (let i = 0; i < 5; i++) {
//   console.log("overwhelmed to learn js");
// }

// increment i with odd numbers in ascending order
// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// increment i with odd numbers in decending order
// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

/*********************************** while loop ***********************************/

/**
 * one difference between for and while loop,
 * is in for loop the variable is part of loop itselt in while loop
 * we have to declare the variable externally
 */

// Ascending

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// Decending

// let i = 5;
// while (i >= 1) {
//   if (i % 2 !== 0) console.log(i);
//   i--;
// }

/*********************************** do while loop ***********************************/

/**
 * similar to while loop but "do" part always executes once then the condition is
 * evaluated and while part if met the condition
 */

// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

/*********************************** infinite loops ***********************************/

/**
 * infinite loops as the name implies runs infinite times,
 * beaware of them when programming, if you accidentally create
 * one you may crash you browser or computer
 *
 * most of the time when forget to increment i, creates an infinite loop
 */

// example

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   // i++
// }

/*********************************** for in loop ***********************************/

/**
 * we have two special kinds of loops in javascript which are used
 * to iterate over properties of an object or elements of an array.
 */

// for-in
// let say we want to display properties of an object that's when we use for in loop

// const person = {
//   name: "Mosh",
//   age: 30,
// };

// for (let key in person) {
//   console.log(key);
// }

// what if we wabt to display the value of the property next to it?
// Remember square bracket where we use to read value on the fly

// for (let key in person) {
//   console.log(key, person[key]);
// }

// we can also use for in loop to iterate over an array but it's not ideal way

// let colors = ["green", "red", "blue"];

// iterate over the index
// for (let index in colors) {
//   console.log(index);
// }

// now similarly if you want to read the values of the elements

// for (let index in colors) {
//   console.log(index, colors[index]);
// }

/*********************************** for of loop ***********************************/

/**
 * starting from es6 we have a new way to iterate over arrays
 * and that is the ideal way using for of loop
 */

// for-of

// let colors = ["green", "red", "blue"];

// simple and clear
// for (let color of colors) {
//   console.log(color);
// }

/**
 * @description Summary of for in and for of loop
 *
 * we use for in loop to iterate properties of an object and
 * for of to iterate elements of an array
 *
 */
