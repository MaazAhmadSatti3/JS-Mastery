/**
 * As we know finding primitives is different from finding reference types
 */

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// find method returns the first element that matches the specified criteria and will return undefined if not found
const findCourse = courses.find((course) => course.name === "a");

// A similar method findIndex will return the index of the matched element and will return -1 if not found
const findCourseIndex = courses.findIndex((course) => course.name === "a");

console.log(findCourse);
console.log(findCourseIndex);
