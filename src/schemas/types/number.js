import Schema from '../schema.js';

export default class NumberType extends Schema {
  required() {
    function required(value) {
      if (typeof value !== 'number') {
        return false;
      }

      return true;
    }

    this.addMethod('required', required);
    return new NumberType(this.customRules, this.currentRules);
  }

  positive() {
    function positive(value) {
      if (value <= 0 && value !== null) {
        return false;
      }

      return true;
    }

    this.addMethod('positive', positive);
    return new NumberType(this.customRules, this.currentRules);
  }

  range(from, to) {
    function range(value, valueFrom, valueTo) {
      if (typeof value !== 'number') {
        return false;
      }

      if (value < valueFrom || value > valueTo) {
        return false;
      }

      return true;
    }

    this.addMethod('range', range, from, to);
    return new NumberType(this.customRules, this.currentRules);
  }
}
