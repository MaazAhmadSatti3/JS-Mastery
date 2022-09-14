/**
 * we use constructor functions to contruct/create an object, we use pascal notation for constructors
 *
 * this keyword references an empty object
 *
 * new keyword creates an empty javscript object
 *
 * like const x = {};
 *
 * next it will set this keyword to point to this new empty object
 *
 * now we can set properties to this new empty object
 *
 * and finally this new operator will return this new object from the constructor function
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle1 = new Circle(1);
console.log(circle1);

const circle2 = new Circle(2);
console.log(circle2);
