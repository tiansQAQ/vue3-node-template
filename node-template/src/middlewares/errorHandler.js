const { errorLogger } = require('../../logs.config')

module.exports = function() {
  return async(ctx, next) => {
    try {
      await next()
    } catch (err) {
      errorLogger.error(err.stack)
      // 异常处理
      ctx.status = err.statusCode || err.status || 500
      ctx.body = {
        msg: err.message || '服务器错误',
        errorCode: err.errorCode || err.statusCode || err.status || 500
      }
      // 当不写这行时,发生错误后,手动释放error事件,才能让app.on()监听函数生效
      // ctx.app.emit('error', err, ctx)
    }
  }
}
