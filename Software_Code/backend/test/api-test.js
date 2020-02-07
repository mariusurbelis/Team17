const app = require('../src/api.js')
const { assert } = require('chai');
var expect  = require('chai').expect;

var api = require('../src/api');

describe('API', function() {
  it("connects to the database", function () {
    
  })
})


describe('Array', function () {
  it('should start empty', function () {
    var arr = [];

    assert.equal(arr.length, 0);
  });
  it('hello', () => {
    let x = !true;
    assert.isFalse(x);
  });

describe('#distance()', function() {
  it('distance should be zero', function() {
    expect(Math.round(api.distance(0, 0, 0, 0))).to.equal(0);
  })

  it('distance should be zero', function() {
    expect(Math.round(api.distance(23, 32, 32, 23))).to.equal(830);
  })
})

});