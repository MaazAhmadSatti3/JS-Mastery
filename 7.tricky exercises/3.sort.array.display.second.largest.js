/**
 * @description sort an array and display the second largest
 */

var arr = [1, 15, 10, 45, 27, 100];

function Numeric_sort(ar) {
  var i, j;

  // ascending
  while (i < ar.length) {
    console.log("i", i);
    j = i + 1;
    while (j < ar.length) {
      console.log("j", j);
      if (ar[j] < ar[i]) {
        var temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
      j++;
    }
    i++;
  }

  // decending
  for (i = 0; i < ar.length; i++) {
    console.log("i", i);
    j = i + 1;
    for (j = 0; j < ar.length; j++) {
      console.log("j", j);
      //   swap and sort
      if (ar[j] < ar[i]) {
        var temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
    }
  }
}

Numeric_sort(arr);

console.log(arr);

// returns number -> set to second largest
const value = arr.length - 2;

// second largest value passed to array to find second highest
const secLastValue = arr[value];

console.log(secLastValue);
