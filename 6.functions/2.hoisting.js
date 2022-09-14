/**
 * hoisting is the process of moving functions declarations at the top of the file
 * it is done automatically by the javascript engine
 *
 * that is why we can use functions that are using function declaration syntax before the
 * declaration
 *
 * hoisting is not done on function expression
 */

//function declaration
walk(); //OK

function walk() {
  console.log("walk");
}

// function expression
run(); //error

const run = function () {
  console.log("run");
};
