const util = require('../src/util');
const assert = require('assert');

describe('Util', function() {
 
  describe('isEmpty)', function() {
    
    it('should return true when the value is null', function() {
      assert.equal(true, util.isEmpty(null));
    });
    
    it('should return true when the value is true', function() {
      assert.equal(true, util.isEmpty(true));
    });
    
    it('should return false when the value is an array', function() {
      assert.equal(false, util.isEmpty([1,2,3]));
    });
    
    it('should return false when the value is an object', function() {
      assert.equal(false, util.isEmpty({a:1}));
    });
  });
});