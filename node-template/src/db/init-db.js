const { sync } = require('../models')
/**
 * 初始化数据库
 */
sync().then(() => {
  console.log('init db ok!')
  process.exit(0)
}).catch((e) => {
  console.log('failed with: ' + e)
  process.exit(0)
})

