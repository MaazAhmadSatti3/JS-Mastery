/**
 * @description Logical Operators (&&, ||)
 */

// Logical And (&&)
// Returns TRUE if both operands are TRUE

// console.log(true && true);

/**
 * Real World Example Logical And (&&)
 * loan application if applicant has high income and good credit score
 */

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

/**
 * Real World Example Logical Or (||)
 * loan application if applicant has good credit score high income is optional
 */

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan);

/**
 * Real World Example of Not (!)
 * if the applicant has low income and low credit score
 */

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible", eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log("Application Refused", applicationRefused);
