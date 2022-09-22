import StringType from './schemas/types/string.js';
import NumberType from './schemas/types/number.js';
import ArrayType from './schemas/types/array.js';
import ObjectType from './schemas/types/object.js';

export default class Validator {
  constructor(type, customMethods = {}) {
    this.type = type;
    this.customMethods = customMethods;
  }

  string() {
    this.type = new StringType(this.customMethods.string ?? {});
    return this.type;
  }

  number() {
    this.type = new NumberType(this.customMethods.number ?? {});
    return this.type;
  }

  array() {
    this.type = new ArrayType(this.customMethods.array ?? {});
    return this.type;
  }

  object() {
    this.type = new ObjectType();
    return this.type;
  }

  addValidator(type, name, fn) {
    this.customMethods[type] = {
      [name]: fn,
    };
  }
}
