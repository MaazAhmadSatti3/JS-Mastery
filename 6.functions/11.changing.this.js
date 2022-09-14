/**
 * changing this
 *
 * show title before tag
 *
 * 1 - decalre a variable (self) inside method (showTags) and assign it to this keyword
 *      now this refers to the object and inside forEach you can do => console.log(self.title, tag)
 *
 * 2 - as we know in javascript functions are also objects the have methods to
 *      we can use functions method as call, apply and bind(most commonly used)
 *      so bind method can be used as there we can pass this keyword as argument that way it will refer the object
 *      pass the bind method with the callback function and this.title will refer to the object
 *
 * 3 - the modern solution is to use arrow function expression in callback that way it will refer the object
 *      modern and simple
 */

const video = {
  title: "a",
  tags: ["a", "b", c],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this);
    });
  },
};

showTags();
