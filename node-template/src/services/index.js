const fs = require('fs')
const path = require('path')

const jsFiles = fs.readdirSync(__dirname).filter(file => {
  return file.endsWith('.js') && (file !== 'index.js') && (file.indexOf('.') !== 0)
})

const service = {}

jsFiles.forEach((file) => {
  const name = file.substring(0, file.length - 3)
  service[name] = require(path.join(__dirname, file))
})

module.exports = service
