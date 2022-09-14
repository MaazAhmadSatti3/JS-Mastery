/**
 * Create an array of objects, each object is what we call price range object,
 * create three price range objects, think of the properties that each object should have
 */

const priceRange = [
  { label: "$", tooltip: "InExpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

console.log(priceRange);
