// models/index.js
const fs = require('fs')
const path = require('path')
const { sequelize, mysqlDB } = require('../db')

const jsFiles = fs.readdirSync(__dirname).filter((file) => {
  return file.endsWith('.js') && (file !== 'index.js') && (file.indexOf('.') !== 0)
})

const models = {}

jsFiles.forEach((file) => {
  const name = file.substring(0, file.length - 3)
  models[name] = require(path.join(__dirname, file))
})

models.sequelize = sequelize

// 生成数据库表
models.sync = async() => {
  return await mysqlDB.sync()
}

module.exports = models
