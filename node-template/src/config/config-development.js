
const config = {
  myEnv: 'development',
  mysql: {
    dialect: 'mysql',
    host: '', // HOST TODO
    port: 3306,
    database: '', // database TODO
    username: 'root', // 数据库用户名
    password: '123456', // 数据库密码
    // 连接池配置
    max: 20,
    min: 10,
    // 当前连接多久没有操作就断开
    idle: 10000,
    // 多久没有获取到连接就断开
    acquire: 30000
  }
}

module.exports = config
