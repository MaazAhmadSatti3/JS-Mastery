/**
 * before es6 var was the only way to declare or initialize a variable
 *
 * var => function-scoped
 * ES6 (ES2015): let, const => block-scoped
 *
 *
 * Decalring a var globally is a bad practice also if decalre a var globally
 * it is part of the windows objects where other declarations are not
 *
 * declaraing var globally is global object in node
 * and windows object in browser
 *
 * decalre variable with let or const
 */

function run() {
  if (true) {
    // var i = 0;
    let i = 0;
    console.log(i);
  }
  console.log(i); //error
}

run();
