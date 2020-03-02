// const sayHello = function() {
//   console.log("Hello");
// };

// Arrow function
// const sayHello = () => {
//   console.log("Hello");
// };

// One line function
// const sayHello = () => console.log("Hello");

// Return object
// const sayHello = () => ({ msg: "Hello" });

//  Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//  Multiple params need parenthesis
const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

sayHello("Alan", "Nguyen");
