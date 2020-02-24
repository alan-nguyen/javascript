const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());
console.log(mary);

const alan = Object.create(personPrototypes, {
  firstName: { value: "Alan" },
  lastName: { value: "Nguyen" },
  age: { value: 29 }
});

console.log(alan);
console.log(alan.greeting());
