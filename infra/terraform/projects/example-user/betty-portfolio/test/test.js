var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('double done', function(done){
        //calling 'done() twice is an error
        setImmediate(done);
        //setImmediate(done);
    })
  });
});