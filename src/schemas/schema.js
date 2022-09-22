export default class Schema {
  constructor(customRules = {}, currentRules = {}) {
    this.customRules = customRules;
    this.currentRules = currentRules;
  }

  isValid(value) {
    const rules = Object.values(this.currentRules);

    for (let i = 0; i < rules.length; i += 1) {
      const [method, ...args] = rules[i];
      const result = method(value, ...args);

      if (result === false) {
        return false;
      }
    }

    return true;
  }

  addMethod(methodName, method, ...args) {
    this.currentRules[methodName] = [method, ...args];
  }

  test(method, ...args) {
    const customMethod = this.customRules[method];
    this.addMethod(method, customMethod, args);
    return this;
  }
}
