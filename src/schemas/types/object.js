export default class ObjectType {
  constructor(schema = {}) {
    this.schema = schema;
  }

  shape(schema) {
    this.schema = { ...this.schema, ...schema };
    return this;
  }

  isValid(object) {
    if (!Object.entries(this.schema).length) {
      return true;
    }

    const objectEntries = Object.entries(object);

    for (let i = 0; i < objectEntries.length; i += 1) {
      const [key, value] = objectEntries[i];

      if (!this.schema[key].isValid(value)) {
        return false;
      }
    }

    return true;
  }
}
