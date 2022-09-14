/**
 * A circle object using object literal syntax
 *
 * a radius property that can be read or write to
 * area property that is read only
 */

const circle = {
  radius: 0,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 2;
console.log(circle.area);
