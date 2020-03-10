const { sum, subtract } = require('./functions/math');
const { test } = require('./jest/test');
const { expect } = require('./jest/assertions');

test('it should sum', () => {
  expect(sum(1,2)).toBe(3);
});

test('it should subtract', () => {
  expect(subtract(1, 2)).toBe(-1);
});


