/**
 * Enumerating properties of an object
 *
 * enumerate: mention a number of thing one by one
 *
 */

// An object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// 1- using for in loop
for (let key in circle) {
  console.log(key, circle[key]);
}

// using for of loop

/**
 * for of loop gives an error because for of loop is used only with iterables, such as an array.
 *
 * an object is not iterable
 *
 * however we have a method Object.keys with this we can get all the keys in an object
 * and this will return an array
 *
 * and since arrays are iterable we can use for of loop to iterate them
 */

// 2- for of loop using Objects.keys method return key in string
for (let key of Object.keys(circle)) {
  console.log(key);
}

// here Object is a constructor function which is called upon and has different methods

// 3- for of loop using Objects.entries method return each key value pair as an array
for (let entry in Object.entries(circle)) {
  console.log(entry);
}

/**\
 * if you want to check if the given object has a given property or method
 *
 * to do that we us ein operator
 */

// 4- in operator
if ("radius" in circle) console.log("yes");
