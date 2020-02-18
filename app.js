// GENERAL LOOPS
const cars = ["Tesla", "Ford", "Mercedes", "BMW"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index) {
  console.log(`${index} : ${car}`);
});

// MAP
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Eric" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
