import { toUpperCase, toLowerCase, slug } from '../src/index';

test('toUpperCase converts string to uppercase', () => {
  expect(toUpperCase('lower case string')).toBe('LOWER CASE STRING');
});

test('toLowerCase converts string to lowercase', () => {
  expect(toLowerCase('UPPER CASE STRING')).toBe('upper case string');
});

test('slug converts string to slug', () => {
  expect(slug("some random string's & else")).toBe(
    'some-random-strings-and-else'
  );
});
