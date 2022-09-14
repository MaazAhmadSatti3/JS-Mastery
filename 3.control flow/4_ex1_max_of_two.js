let number = max(5, 9);
console.log(number);

function max(a, b) {
  // A clean implementation with conditional statement(if else)
  //   if (a > b) return a;
  //   return b;

  // Even more cleaner with condtional operator(ternary operator)
  return a > b ? a : b;
}
