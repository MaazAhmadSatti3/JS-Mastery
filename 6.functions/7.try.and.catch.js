/**
 * try and catch
 *
 * Error handling and Exception
 *
 * When we have error object in a variable and we use to match it that is error handling
 * but when we use throw keyword we're throwing an exception
 *
 * and some where in our code we catch the exception so we use try and in catch we
 * catch the thrown exception
 */

const person = {
  firstName: "Maaz",
  lastName: "Ahmad",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    if (typeof value !== "string")
      //   throw an exception with Error constructor to make error object
      throw new Error("Enter a valid string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "Maaz";
  console.log(person);
} catch (e) {
  console.log(e);
}
