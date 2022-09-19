import Schema from '../schema.js';

export default class ArrayType extends Schema {
  required() {
    function required(value) {
      if (!Array.isArray(value)) {
        return false;
      }

      return true;
    }

    this.addMethod('required', required);
    return new ArrayType(this.customRules, this.currentRules);
  }

  sizeof(number) {
    function sizeof(value, length) {
      if (value.length !== length || !Array.isArray(value)) {
        return false;
      }

      return true;
    }

    this.addMethod('sizeof', sizeof, number);
    return new ArrayType(this.customRules, this.currentRules);
  }
}
