const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create Post
