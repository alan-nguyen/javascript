// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = "Doe") {
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x * x;
};

console.log(square());
