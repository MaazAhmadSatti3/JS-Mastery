/**
 * check prime numbers in an array
 */

let arr = [1, 3, 4, 6, 8, 9, 11, 18, 25];

for (let i = 0; i < arr.length; i++) {
  let check = false;

  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      check = true;
      break;
    }
  }

  if (!check) console.log(arr[i], "is a Prime number");
  else console.log(arr[i], "is not a Prime number");
}
