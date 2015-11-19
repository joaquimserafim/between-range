'use strict'

module.exports = betweenRange

function betweenRange (value, n1, n2) {
  return n1 <= value && n2 >= value
}
