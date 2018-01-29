'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://106.75.14.226:9008"',
  WC_ACCOUNT: '"gh_da5328b0dc70"'
})
