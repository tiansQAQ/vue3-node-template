const Router = require('koa-router')
const router = new Router()
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const { ParamsException } = require('../utils/exception')
const { userService } = require('../services')
const { responseFormat } = require('../utils/response')
router.prefix('/user')

const schema = Joi.object({
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
})

function checkUsernameAndPassword(params) {
  const { error } = schema.validate(params, { allowUnknown: true })
  if (error) {
    throw new ParamsException({ message: error.details[0].message, state: 400 })
  }
}

/**
 * 登录
 */
router.post('/login', async ctx => {
  checkUsernameAndPassword(ctx.request.body)
  const user = await userService.login(ctx.request.body)
  if (!user) {
    return (ctx.body = responseFormat({}, '用户名或密码错误', 10003))
  }
  const config = {
    // 自定义jwt加密的私钥
    PRIVATE_KEY: 'private_key',
    // 1h过期
    JWT_EXPIRED: 60 * 60
  }
  const token = jwt.sign({ data: user.username }, config.PRIVATE_KEY, { expiresIn: 60 * 60 })
  // 返回token
  ctx.body = responseFormat({ accessToken: token })
})

/**
 * 创建用户
 */
router.post('/addUser', async ctx => {
  checkUsernameAndPassword(ctx.request.body)
  const user = await userService.addUser(ctx.request.body)
  if (!user) {
    return (ctx.body = responseFormat({}, '创建用户失败'))
  }
  ctx.body = responseFormat(user)
})

module.exports = router
