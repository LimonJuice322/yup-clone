import Schema from '../schema.js';

export default class StringType extends Schema {
  required() {
    function required(value) {
      if (typeof value !== 'string' || value === '') {
        return false;
      }

      return true;
    }

    this.addMethod('required', required);
    return new StringType(this.customRules, this.currentRules);
  }

  minLength(minValue) {
    function minLength(value, min) {
      if (value === null || value === undefined) {
        return false;
      }

      if (value.length < min) {
        return false;
      }

      return true;
    }

    this.addMethod('minLength', minLength, minValue);
    return new StringType(this.customRules, this.currentRules);
  }

  contains(substring) {
    function contains(value, substringsArray) {
      if (substringsArray.length !== 0 && typeof value === 'string') {
        for (let j = 0; j < substringsArray.length; j += 1) {
          const substringElement = substringsArray[j];

          if (!value.includes(substringElement)) {
            return false;
          }
        }
      }

      return true;
    }

    let substrings = [];
    let method;

    if (Object.prototype.hasOwnProperty.call(this.currentRules, 'contains')) {
      [method, substrings] = this.currentRules.contains;

      if (!substrings.includes(substring)) {
        substrings = [...substrings, substring];
      }
    } else {
      substrings.push(substring);
      method = contains;
    }

    this.addMethod('contains', method, substrings);
    return new StringType(this.customRules, this.currentRules);
  }
}
