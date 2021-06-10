const Koa = require('koa')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const fs = require('fs')
const path = require('path')
const myLogger = require('./src/middlewares/myLogger')
const errorHandler = require('./src/middlewares/errorHandler')
// const koaJwt = require('koa-jwt')
const app = new Koa()

// 需要放在所有中间件的最顶部
app.use(myLogger())

// 放在jwt验证之前
app.use(errorHandler())

// 处理静态文件
app.use(static(path.join(__dirname, './src/public')))

// app.use(koaJwt({ secret: 'private_key' }).unless({
//   // 设置login、register接口，可以不需要认证访问
//   path: [
//     /^\/user\/login/,
//     /^\/user\/register/
//   ]
// }))

// post请求参数解析
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text', 'xml']
}))

app.use(cors())

/* loader router */
const jsFiles = fs.readdirSync(path.join(__dirname, './src/controllers')).filter(file => file.indexOf('.') !== 0 && file.endsWith('.js') !== -1)

jsFiles.forEach(file => {
  const mapping = require(path.join(__dirname, './src/controllers', file))
  app.use(mapping.routes(), mapping.allowedMethods())
})

module.exports = app
