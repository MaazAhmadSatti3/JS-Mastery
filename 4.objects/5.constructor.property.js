/**
 * In javaScript we have constructor property for an object that is used
 * return the function used to construct that object
 */

// Constructor function to create an object
function Circle(radius) {
  this.radius = radius;
}

const circle1 = new Circle(1);
// console.log(circle1);
console.log(circle1.constructor);

// Factory function to create an object
function circle(radius) {
  return {
    radius,
  };
}

const circle2 = circle(1);
// console.log(circle2);
console.log(circle2.constructor);

/**
 * Output:
 * [Function: Circle]
 * [Function: Object]
 *
 * Note that in the constructor function's object the constructor property returned
 * the constructor function but when used factory method to the constructor property has
 * returned an object
 *
 * This is because for factory function we are defining object literal {} which uses
 * node object making constructor behind the scenes
 *
 * Which is let x = new Object();
 *
 * When we declare x = {}, the above code happens behind the scenes
 *
 * We have other literals too that works same behind the scenes, like
 *
 * new String();    => '', "", ``
 * new Boolean();   => true, false
 * new Number();    => 1, 2, 3, ...
 *
 */
