const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const circle2 = {
  //   radius: 2,
  s: 1,
  draw() {
    console.log("draw2");
  },
};

// Object.assign copies object and properties from one or more source objects to a target object
// we can use it to clone an object or combine multiple object in a single object
const obj1 = Object.assign({}, circle, circle2);

// spread operator is used to spread and object, basically getting all its properties and methods and
// putting them in another object
const obj2 = { ...circle };

console.log(circle, obj1, obj2);
