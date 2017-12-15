const assert = require('assert');

const {add} = require('./index.js')

describe('Main', () => {
  describe('#add(a, b)', () => {
    it('should add two given numbers', () => {
      assert.equal(add(1,3), 4);
    });
  });
});
