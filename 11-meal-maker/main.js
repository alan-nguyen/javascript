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
  }
};
