/**
 * Factory Functions:
 * Just like factory producing products these functions produce objects
 *
 * The beauty of factory function is that we have define circle object at one place
 * and we can get dynamic objects upon arguments, also if we have an error we've to
 * modify only at one place
 */

// Factory function for circle
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
// console.log(circle1.draw());
console.log(circle1);

const circle2 = createCircle(2);
// console.log(circle1.draw());
console.log(circle2);
