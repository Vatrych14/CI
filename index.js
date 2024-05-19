const test = require('ava');
const sum = require('../sum');

test('sum function', t => {
  t.is(sum(1, 2), 3);
});
