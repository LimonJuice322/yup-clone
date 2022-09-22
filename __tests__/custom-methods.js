import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('custom-validators', () => {
  const v = new Validator();

  let fn = (value, start) => value.startsWith(start);
  v.addValidator('string', 'startWith', fn);

  let schema = v.string().test('startWith', 'H');
  expect(schema.isValid('exlet')).toBe(false);
  expect(schema.isValid('Hexlet')).toBe(true);

  fn = (value, min) => value >= min;
  v.addValidator('number', 'min', fn);

  schema = v.number().test('min', 5);
  expect(schema.isValid(4)).toBe(false);
  expect(schema.isValid(6)).toBe(true);
});
