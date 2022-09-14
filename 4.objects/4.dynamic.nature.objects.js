/**
 * One thing that should be understood that the objects are dynamic means that we can always
 * remove existing properties or add new properties to them.
 */

const circle = {
  radius: 1,
};

circle.color = "white";

circle.draw = function () {
  console.log("draw");
};

delete circle.draw;

console.log(circle);

/**
 * One thing that is confusing is that we have define circle with constant and yet assign new properties
 * to it so what kind of constant is that so we can not re assign an object that is circle = {}, this
 * will give error but we can always add new properties to an object
 */
