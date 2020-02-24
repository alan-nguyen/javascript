// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const alan = new Person("Alan", 29);
// const Aaden = new Person("Aaden", 4);

const alan = new Person("Alan", "7-8-1990");
console.log(alan.calculateAge());
