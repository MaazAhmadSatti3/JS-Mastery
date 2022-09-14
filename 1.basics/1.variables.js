/**
 * @description variables(let and const)
 * let can be reassigned where const cannot
 */

// output OK
let nameA = "maaz";
nameA = "saad";

// output error, uncaught exception, assignment to const variable
const nameB = "maaz";
nameB = "saad";
