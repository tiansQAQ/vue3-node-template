// 分为开发环境和生成环境

const CONFIG_DEVELOPMENT = './config-development.js'
const CONFIG_PRODUCTION = './config-production.js'
const CONFIG_STAGING = './config-staging.js'

let config = {}

if (process.env.NODE_ENV === 'production') {
  config = require(CONFIG_PRODUCTION)
} else if (process.env.NODE_ENV === 'staging') {
  config = require(CONFIG_STAGING)
} else {
  config = require(CONFIG_DEVELOPMENT)
}

module.exports = config
