var myFuction = require('../handler');
var assert = require('assert');
describe('kubelesshello', function() {
  it('should return 0 when "Hello Kubeless" is present', function() {
    var result = myFuction.kubelesshello();
    assert.equal(result, "Hello Kubeless", 'KubelessHello Function returns Hello Kubeless');
  });
});