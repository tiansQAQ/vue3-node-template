// 用户model
const { mysqlDB, DataTypes } = require('../db')

module.exports = mysqlDB.defineModel('user',
  {
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '用户名'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '密码'
    }
  },
  {
    tableName: 'user' // 自定义表名
  }
)
