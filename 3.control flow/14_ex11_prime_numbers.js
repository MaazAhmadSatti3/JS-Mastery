/**
 * A function that takes number as an argument and show prime numbers upto
 * the specified number
 */

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

// Single responsibility pattern you take one task from a function
// nested loops are indicators plus nested loops have complexity of big O n2

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
