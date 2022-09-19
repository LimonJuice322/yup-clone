import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('number', () => {
  const v = new Validator();

  const schema = v.number();

  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);

  schema.required();

  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid(7)).toBe(true);

  expect(schema.positive().isValid(10)).toBe(true);
  expect(!schema.isValid(0)).toBe(true);

  schema.range(-5, 5);

  expect(schema.isValid(-3)).toBe(false);
  expect(schema.isValid(5)).toBe(true);
  expect(schema.isValid(undefined)).toBe(false);
  expect(schema.isValid(50)).toBe(false);
});
