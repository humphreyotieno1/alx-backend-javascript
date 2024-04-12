const CLONE_CAR = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new Car();
    Object.getOwnPropertyNames(this).forEach((key) => {
      if (key !== CLONE_CAR) {
        clone[key] = this[key];
      }
    });
    return clone;
  }
}