/**
 * @description Garbage collection
 *
 * In many low level languages like c and c++ we have to configure garbage collector to deallocate
 * unused memory but in javascript this is all taken care of behind the scene and you don't have
 * to worry about garbage collection all the objects which are unused and have memory address are
 * deleted by javascript garbage collector automatically
 *
 */

/**************************** Built in Objects in JavaScript */

/**
 * @description Math object
 *
 * In javascript we have math operator which have all the function for maths you can simply
 * access MAth operator call it's function and pass it a variable
 *
 * e.g.
 * Math.round(num);
 * Math.floor(num);
 * Math.random();
 */

// console.log(Math.random());
// console.log(Math.floor(29.9));
// console.log(Math.round(18.7));

/**
 * @description String object
 */

// A variable with string literal
// const message = "hi";

// but when given a period . it displays mehtod, why it is?
// string is primitive type and primitive type don't have methods

// The reason is that in JavaScript we have two types of string

// String primitive
// const message = "This is 'a \nString";
// however when we use dot notation with string primitive JavaScript engine wraps it with string object
// console.log(message.indexOf("a"));
// console.log(message.length);
// console.log(message.endsWith("g"));
// returns a new string
// console.log(message.replace("a", "the"));
// console.log(message);
// console.log(message.split(" "));

// String object
// const another = new String(" hi ");
// A string with a constructor function which constructs the string object

// console.log(another.trim());
// console.log(another.toUpperCase());

/**
 * @description Template Literals
 *
 * till now we have seen many literals like
 * Object {}
 * Boolean true, false
 * String '', ""
 * Template Literals ``
 *
 * we can also call a function inside ${here}, that returns a value it is perfectly valid
 */

// const name = "wahab";
// const templateLiteral = `Hi ${name}, ${2 + 3},

// Thank you for joining my mailing list.

// Regards,
// Maaz`;

// console.log(templateLiteral);

/**
 * @description Date Object
 *
 * there are many constructor to date object to create a date
 * you can move the arrow keys up and down to set their args
 *
 * date object has also many methods that can be used to display dates
 * for e.g. when sending data to backend use toISOString() method,
 * this is the standard way to send data to backend
 *
 * new keyword for constructor function to construct new object
 * and this to assign value to this new object
 */

const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

console.log(now.toDateString());
console.log(date1.toTimeString());
console.log(date2.toISOString());

/**
 * The 0bjects we have looked at aren't the only objects in JavaScript
 * there are many more objects with builtin constructor function
 */
