'use strict'

var Lab   = require('lab')
var Code  = require('code')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

var between = require('./')

describe('check if a given number is between two values', function() {

  it('should return true when is inside of the range', function(done) {
    expect(between(200, 200, 300)).to.be.true()
    done()
  })

  it('should return false when is not inside of the range', function(done) {
    expect(between(101, 200, 300)).to.be.false()
    done()
  })

})
