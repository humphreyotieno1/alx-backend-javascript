const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    const cloned = this[cloneSymbol]();
    if (cloned.constructor !== this.constructor) {
      throw new Error('Clone failed: Cloned object is not of the same class');
    }
    return cloned;
  }
}
