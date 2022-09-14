/**
 * @description A function wich takes parameter "limit" and show even odd numbers
 */

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    //  My implementation
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");

    // A better way
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
