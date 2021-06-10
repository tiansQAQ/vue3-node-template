const { defaultLogger } = require('../../logs.config')

module.exports = function() {
  return async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    const logText = `${ctx.method} ${ctx.status} ${ctx.url} 响应时间：${ms}ms`
    defaultLogger.info(logText)
  }
}

