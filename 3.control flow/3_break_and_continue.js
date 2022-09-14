/**
 * We have two keywords in JavaScript break and continue
 * that can change how the loop behaves
 */

// A simple while loop to display numbers till 10 but sometimes
// you want to jump out of loop if something happens

let i = 0;
while (i <= 10) {
  // break -> for e.g. when i = 5, jump out of loop
  // if (i === 5) break;

  // continue -> if i is an even number then continue
  if (i % 2 === 0) {
    i++;
    continue;
    // displays odd number
  }

  console.log(i);
  i++;
}
