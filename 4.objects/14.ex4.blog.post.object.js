/**
 * Use the object literal syntax to create a blog post object that have below properties
 * title
 * body
 * author
 * views
 * comments
 *  (author, body)
 * isLive
 *
 */

// Blog Post Object using object literal syntax
const blogPost = {
  title: "Learn JS",
  body: "Learning in progress",
  author: "Maaz",
  views: 99,
  comments: [
    {
      author: "Faisal",
      body: "Good job",
    },
    {
      author: "Qaiser",
      body: "Go",
    },
  ],
  isLive: true,
};

console.log(blogPost);
