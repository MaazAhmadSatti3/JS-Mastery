/**
 * functions are objects behind the scene and they consists of properties if you have place
 * a period and look into
 */

// A constructor function to construct an object
function Circle(radius) {
  this.radis = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);
console.log(circle1.constructor);

//Now behind the scenes above function is represented like this
const Circle2 = new Function(
  "radius",
  `this.radis = radius;
  this.draw = function () {
    console.log("draw");
  };`
);

const circle3 = new Circle2(1);
console.log(circle3);

// Now let's look at couple of methods that are available for functions
Circle2.call({}, 1);
Circle2.apply({}, [1]);

// Above methods are exactly like const circle3 = new Circle2(1);
// where object passed as first arg is what the new does and to which this keyword refers to
