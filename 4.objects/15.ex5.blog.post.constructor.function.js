/**
 * write a constructor function for blog post
 *
 * Imagine you're building a blogging engine the user is draffting a post
 * but they haven't published it yet, what do you think that constructor function
 * should look like
 */

// A constructor function for blog post

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new BlogPost("a", "b", "c");

console.log(post);
