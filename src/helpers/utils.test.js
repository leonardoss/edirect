import { isEmpty } from './utils';

test('obj is empty', () => {
  const obj = {};
  expect(isEmpty(obj)).toBe(true);
});

test('obj is NOT empty', () => {
  const obj = { test: 'test' };
  expect(isEmpty(obj)).toBe(false);
});
