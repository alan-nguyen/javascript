// GENERAL LOOPS
const cars = ["Tesla", "Ford", "Mercedes", "BMW"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car) {
  console.log(car);
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
