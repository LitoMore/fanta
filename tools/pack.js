'use strict'

const execa = require('execa')
const pkg = require('../package')

;(async function () {
  const {name, version} = pkg
  try {
    await execa('zip', ['-r', `./packs/${name}-${version}.zip`, 'dist'])
  } catch (err) {
    console.error(err)
  }
})()
