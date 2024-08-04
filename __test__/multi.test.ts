import multi from '../src/multi';
// const multi = require('../utils/multi');
test('adds 3 * 4 to equal 12', () => {
  expect(multi(3, 4)).toBe(12);
});