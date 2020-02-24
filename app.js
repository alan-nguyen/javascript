// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
}

// const alan = new Person("Alan", 29);
// const Aaden = new Person("Aaden", 4);

const alan = new Person("Alan", "7-8-1990");
console.log(alan);
