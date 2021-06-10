
const jwt = require('jsonwebtoken')

/**
 * 解密token,并绑定到ctx上
 */
module.exports = function() {
  return async(ctx, next) => {
    const token = ctx.request.header.authorization
    if (token) {
      const jwtTokenData = jwt.verify(token, 'private_key')
      ctx.jwtTokenData = jwtTokenData.data
    }
    await next()
  }
}
