const Router = require('koa-router')
const router = new Router()
const { responseFormat } = require('../utils/response')

router.get('/info', ctx => {
  ctx.body = responseFormat('info successs')
})
module.exports = router
