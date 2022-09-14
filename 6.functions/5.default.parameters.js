/**
 * Default parameters
 *
 * In modern javascript we can pass default parameters hardcoded in parameters
 * but make sure that they are the last parameter otherwise it's confusing for the
 * javascript engine
 *
 * if we provide argument when calling function with default parameters it'll be over ride
 *
 */

// Example
// Calculating the interest

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
