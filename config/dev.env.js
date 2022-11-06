'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN_KEY: '"accessToken"',
//   API_ROOT: '"http://localhost:8080/"',
    API_ROOT: '"http://120.77.70.11:8081/"',
    // API_ROOT: '"https://www.zhongjingkang.online/"'
})
