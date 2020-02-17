const name = "Alan";
const age = 29;
const job = "Wed Developer";
const city = "Edmonton";

let html;

// Without template strings (es5)
html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li> " +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;

document.body.innerHTML = html;
