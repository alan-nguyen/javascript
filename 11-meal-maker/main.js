const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  // Getter methods
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  // Setter methods
  set appetizers(newDish) {
    this._courses.appetizers = newDish;
  },
  set mains(newDish) {
    this._courses.mains = newDish;
  },
  set desserts(newDish) {
    this._courses.desserts = newDish;
  },
  // Get courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  // Add dish to course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  // Add random dish from course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let indexDish = Math.floor(Math.random() * dishes.length);
    return dishes[indexDish];
  },
  // Generate random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is $${totalPrice}.`;
  }
};
// Add dishes to course
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Beef Pho', 12);
menu.addDishToCourse('desserts', 'Green Tea Ice Cream', 3.45);

menu.addDishToCourse('appetizers', 'Spring Rolls', 6.88);
menu.addDishToCourse('mains', 'Roast chicken', 10.35);
menu.addDishToCourse('desserts', 'Milk Tea', 6.9);

menu.addDishToCourse('appetizers', 'Kyoza', 4.9);
menu.addDishToCourse('mains', 'Sushi', 18.4);
menu.addDishToCourse('desserts', 'Macha', 5.2);

const meal = menu.generateRandomMeal();
console.log(meal);
