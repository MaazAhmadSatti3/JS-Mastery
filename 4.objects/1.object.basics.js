/**
 * We know objects are collection of key value pairs.
 *
 * If we have properties that are highly related we may want to encapsulate them in an object.
 *
 * when we define key value pair in an object the value can be anything, a number, string, boolean, undefined, null
 * even another object, array or a function
 *
 */

// Object-oriented Programming (OOP)
/**
 * OOP is a style of programming where we see a program a collection of objects that talk to each other
 * to perform some functionality
 *
 * Below we have a circle object that have few properties and a function which is OOP we call function
 * a method(A function which part of an object)
 *
 */

// An object circle
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

// Calling a method of an object
circle.draw();
