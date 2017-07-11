var assert = require('assert');

describe('Array', function() {

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {

      assert.equal(-1, [1,2,3].indexOf(4));

    });

  });

});

describe('Sum', function() {

    it('2 + 2 = 4', function() {

      assert.equal(4, 2+2);

    });

});