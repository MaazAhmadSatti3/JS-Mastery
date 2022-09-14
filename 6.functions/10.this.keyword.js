/**
 * this keyword
 *
 * this references the object that is executing the current function
 *
 * Rule of Thumb
 *
 * if this keyword is used in method (method => an object which has a function)
 * then it refers to the object itself
 *
 * if this keyword is used in a function which is not part of an object
 * then it refers to the global object which is (windows in browser, and global in node )
 *
 */

// 1 - method => obj

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// // by the same token if we add a function to an object and call this

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// 2 - global(window, global in node)

// function declaration

// function playVideo() {
//   console.log(this);
// }

// playVideo();

// constructor function

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// this will reference a new object constructed by constructor function
// {}

// making a new object
// const v = new Video("A video");

// Last example

// Note
// A function such as callback function bcoz the callback function uses a regular function declaration
// here the this object will refer to the global object

// but how can we solve this problem?
// the for each method takes another parameter which is the thisArg
// in which we can pass the this keyword and then we're in the method scope and will refer this object

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();

// but not all array methods have the ability to pass second argument as this
// so we have few different solution to this
