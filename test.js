require('jsdom-global')()
const assert = require('assert')
const { $ } = require('./')

function before() {
  var div = document.createElement('div')
  div.innerHTML = `
    <div>bianco!!!</div>
  `
  document.body.appendChild(div)
}

before()

const div = $('div')
assert.equal(div.length, 1)

// all the bianco's helpers should be already properly tested in their own repos!!
