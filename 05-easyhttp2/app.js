const http = new EasyHTTP();

// Get Users
const users = http.get("https://jsonplaceholder.typicode.com/users");

console.log(users);
