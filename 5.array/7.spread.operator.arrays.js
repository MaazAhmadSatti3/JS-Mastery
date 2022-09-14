/**
 * Spread operator to combine and copy arrays
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

// concatinating an array using spread operator
const combined = [...first, "a", ...second, "b"];
console.log(combined);

// copying an array using spread operator
const copy = [...combined];
console.log(copy);
