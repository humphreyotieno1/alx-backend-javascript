export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'Name');
    this._length = HolbertonCourse._validateNumber(length, 'Length');
    this._students = HolbertonCourse._validateArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse._validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse._validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse._validateArray(newStudents, 'Students');
  }

  static _validateString(value, propName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propName} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, propName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${propName} must be a number`);
    }
    return value;
  }

  static _validateArray(value, propName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propName} must be an array`);
    }
    // Assuming all elements in the array are strings
    for (const item of value) {
      if (typeof item !== 'string') {
        throw new TypeError(`${propName} must contain only strings`);
      }
    }
    return value;
  }
}
