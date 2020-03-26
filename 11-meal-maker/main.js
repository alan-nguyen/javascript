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
  }
};
