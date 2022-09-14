/**
 * Joining arrays
 */

const numbers = [1, 2, 3];
const joined = numbers.join(",");
console.log(joined);

// A method that goes hand in hand with join is split
// But it is used for strings
const message = "My name is Maaz";
const parts = message.split(" ");
console.log(parts);

const combined = parts.join("-");
console.log(combined);

// Split is useful when creating a Url Slug

/**
 * Url Slug: is a part of a url that identifies a particualar page
 * on a website in an easy to read form
 *
 * Imagine a dveloper posted "creating array in javascript" on stackoverflow
 * we cannot have white spaces in url so we replace it using join method to
 * create a url slug
 *
 * stackoverflow.com/questons/5435/creating-arrays-in-javascript
 */
