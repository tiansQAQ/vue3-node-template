/**
 * 日志配置文件
 */
const log4js = require('log4js')
const path = require('path')

let developmentLogConfig = {}
// 测试环境增加标准输出流
if (process.env.NODE_ENV === 'development') {
  developmentLogConfig = {
    STDOUT: {
      type: 'stdout'
    }
  }
}

// 保存日志的文件名
const fileAllName = path.join(__dirname, './logs/all.log')
const fileErrorName = path.join(__dirname, './logs/error.log')

log4js.configure({
  /**
   * 如果生产环境在cluster模式下,pm2需要设置为true, 否则日志不生效
   * pm2: process.env.NODE_ENV === 'production'
   */
  appenders: {
    ...developmentLogConfig,
    FILE_ALL: {
      type: 'datefile', // log4js 会按照日期分日志，一天一个文件，每过一天都会把前一天的 all.log 重命名为 all.2021-06-03.log
      filename: fileAllName,
      backups: 10, // 日志最多保留10个
      maxLogSize: 10485760, // 文件最大值10M
      daysToKeep: 10, // 最多保留10天的日志,如果为0则永久保存
      keepFileExt: true // 是否保持日志文件后缀名
    },
    FILE_ERROR: {
      type: 'datefile',
      filename: fileErrorName,
      daysToKeep: 30,
      keepFileExt: true
    }
  },
  categories: {
    default: {
      appenders: ['STDOUT', 'FILE_ALL'],
      level: 'debug'
    },
    error: {
      appenders: ['FILE_ERROR'],
      level: 'error'
    }
  }
})

const defaultLogger = log4js.getLogger()
const errorLogger = log4js.getLogger('error')

// 导出对应的log
module.exports = {
  defaultLogger,
  errorLogger
}
