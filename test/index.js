const assert = require('assert');
const sum = require('../sum');

describe('Sum Function', function() {
  it('should return 3 when adding 1 and 2', function() {
    assert.strictEqual(sum(1, 2), 3);
  });
});
