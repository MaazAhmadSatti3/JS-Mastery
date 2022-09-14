/**
 * A function show stars that takes a number argument and return the rows
 * of stars each row incremented by one stars
 */

showStars(3);

function showStars(rows) {
  for (i = 1; i <= rows; i++) {
    let pattern = "";
    for (j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
