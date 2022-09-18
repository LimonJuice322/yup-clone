import StringType from './schemas/types/string.js';

export default class Validator {
  constructor(type, customValidators = {}) {
    this.type = type;
    this.customValidators = customValidators;
  }

  string() {
    this.type = new StringType(this.customValidators.string ?? {});
    return this.type;
  }
}
