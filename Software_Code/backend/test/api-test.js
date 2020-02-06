const app = require('../src/api.js')
const { assert } = require('chai');
var request = require('supertest')
, app = require('../test/api-test.js')
var expect  = require('chai').expect;

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

  request('https://urbelis.dev/providers', function (error, response, body) {
    // expect(body).to.be("")
    expect(error).to.be("")
    console.log(body);
  });
});