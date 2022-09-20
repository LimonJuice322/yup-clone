import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('object', () => {
  const v = new Validator();

  const schema = v.object();

  expect(schema.isValid(null)).toBe(true);

  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
  expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
  expect(schema.isValid({ name: '', age: null })).toBe(false);
  expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
});
