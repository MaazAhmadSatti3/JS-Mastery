/**
 * varaibles const and let are block scope.
 *
 * A variable define inside a block cannot be access outside of it
 *
 * That is a local varaible. A global varaible is a varaible define outside any block
 *
 * generally global variable are discouraged also local variable has precedence over global varaible
 *
 * defining global variable with const is a bad practice
 */

// Varaible precedence
const color = "red";

function changeColor() {
  const color = "blue";
  console.log(color); //blue, local varaibles have higher precedence
}

changeColor();
