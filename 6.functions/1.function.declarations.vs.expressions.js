// function declaration
function walk() {
  console.log("walk");
}

// anonymous function expression
const run = function () {
  console.log("run");
};

// if we name the above funtion passed in variable that would called a name function

// calling declaration
run();

// now as we know how functions are objects
// so if we refernce another variable with run
// they both point to the same refernce in the memory

move = run;

// calling move
move();
