import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('string', () => {
  let v = new Validator();

  let schema = v.string().required().minLength(4);

  expect(schema.isValid('')).toBe(false);
  expect(schema.isValid('wor')).toBe(false);
  expect(schema.isValid('word')).toBe(true);

  v = new Validator();

  schema = v.string();

  expect(schema.isValid('')).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);

  schema.minLength(10);

  expect(schema.isValid('lorem')).toBe(false);
  expect(schema.isValid('lorem ipsum')).toBe(true);

  schema.contains('lor').required();

  expect(schema.isValid('lorem ipsum')).toBe(true);
  expect(schema.isValid('lloem ipsum')).toBe(false);
  expect(schema.isValid(null)).toBe(false);

  schema.contains('ipsu').contains('em');

  expect(schema.isValid('lorem ipsum')).toBe(true);
  expect(schema.isValid('lorem ipssum')).toBe(false);
  expect(schema.isValid('lorremm ipsum')).toBe(true);
  expect(schema.isValid('loree ipsum')).toBe(false);

  v = new Validator();

  schema = v.string();

  schema.required().minLength(90).minLength(20);

  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
  expect(schema.isValid('what does the fox say')).toBe(false);
});
