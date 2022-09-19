import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('array', () => {
  const v = new Validator();

  const schema = v.array();

  expect(schema.isValid(null)).toBe(true);

  schema.required();

  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid([])).toBe(true);
  expect(schema.isValid(['hexlet'])).toBe(true);

  schema.sizeof(2);

  expect(schema.isValid(['hexlet'])).toBe(false);
  expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true);
});
