const { v4: uuidv4 } = require('uuid')
const { mysql } = require('../config')
const { Sequelize, DataTypes } = require('sequelize')
const { dialect, host, port, database, username, password, max, min, idle, acquire } = mysql
const { defaultLogger } = require('../../logs.config')

// 初始化对象
const sequelize = new Sequelize({
  dialect,
  host,
  port,
  database,
  username,
  password,
  pool: {
    max,
    min,
    idle,
    acquire
  },
  define: {
    freezeTableName: true, // 取消表名复数形式
    underscored: true // 驼峰下划线转换
  },
  query: {
    raw: true
  },
  logging: process.env.NODE_ENV === 'production' ? sqlLogger : console.log
})

function sqlLogger(msg) {
  defaultLogger.info(msg)
}

/*
  * uuid
  * @returns uuid
  */
function generateId() {
  return uuidv4().replace(/-/g, '')
}

/*
  * 统一定义model
  * 每个model必须有createAt,updateAt。
  * 主键使用uuid生成,名称必须是id。
  */
function defineModel(name, attributes, options = {}) {
  const attrs = {
    ...attributes,
    id: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    // createAt和updateAt以BIGINT存储时间戳,无需处理时区问题。
    createAt: {
      type: DataTypes.BIGINT
    },
    updateAt: {
      type: DataTypes.BIGINT
    }
  }
  // console.log(`model->${name} is create`)
  return sequelize.define(name, attrs, {
    ...options,
    timestamps: false,
    hooks: {
      // create前的hook,插入id,createAt,updateAt
      beforeCreate(instance, options) {
        if (!instance.id) {
          instance.id = generateId()
        }
        const now = Date.now()
        instance.createAt = now
        instance.updateAt = now
      },
      // update前的hook,更新updateAt
      beforeUpdate(instance) {
        instance.updateAt = Date.now()
      }
    }
  })
}

const mysqlDB = {
  defineModel,
  // 测试环境下生成表结构功能
  sync() {
    return new Promise((resolve, reject) => {
      if (process.env.NODE_ENV !== 'production') {
        sequelize.sync({ force: true }).then(() => {
          console.log('创建成功！')
          resolve()
        }).catch(err => {
          reject(err)
        })
      } else {
        reject('不能在生产环境下使用sync()')
      }
    })
  }
}
module.exports = {
  DataTypes,
  mysqlDB,
  sequelize
}
