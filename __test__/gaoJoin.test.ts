import gaoJoin from '../src/gaoJoin';
// const sum = require('../utils/sum');
test('gaoJoin gao+join to equal gaoJoin', () => {
  expect(gaoJoin('gao', 'join')).toBe('gaojointestgaojoin');
});