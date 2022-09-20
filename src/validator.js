import StringType from './schemas/types/string.js';
import NumberType from './schemas/types/number.js';
import ArrayType from './schemas/types/array.js';
import ObjectType from './schemas/types/object.js';

export default class Validator {
  constructor(type, customValidators = {}) {
    this.type = type;
    this.customValidators = customValidators;
  }

  string() {
    this.type = new StringType(this.customValidators.string ?? {});
    return this.type;
  }

  number() {
    this.type = new NumberType(this.customValidators.string ?? {});
    return this.type;
  }

  array() {
    this.type = new ArrayType(this.customValidators.array ?? {});
    return this.type;
  }

  object() {
    this.type = new ObjectType();
    return this.type;
  }
}
