/**
 * concat and slice method both copies an array but if the
 * elements are primitives they are copied by value if they
 * are objects only their reference is copied and that will be
 * changed upon changing the original reference value
 *
 * slice() simply with no args returns copy of an array
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

// Combining array using concat method
const combined = first.concat(second);
console.log(combined);

// splicing an array using slice method
const slice = combined.slice(2, 4);
console.log(slice);
