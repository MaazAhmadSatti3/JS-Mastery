/**
 * Getters and Setters
 *
 * Special kind of methods for objects getters and setters
 *
 * getters => to access the properties of an object
 * setters => to change (mutate) them
 *
 */

// Example
// A person object which has a getter and setter method for fullname

const person = {
  firstName: "Maaz",
  lastName: "Ahmad",
  //   prefix the get keyword for getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //   prefix the set keyword for setter
  //   let's assume we have a valid string
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Maaz Satti";

console.log(person);
