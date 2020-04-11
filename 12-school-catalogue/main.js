class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberofStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  // Print a quick fact
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  // Static methods
  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

// Primary School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get PrimarySchool() {
    return this._level;
  }
}

// High School
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// Instances
const lorraineHansburr = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);
console.log(lorraineHansburr);
lorraineHansburr.quickFacts();

School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli',
]);
