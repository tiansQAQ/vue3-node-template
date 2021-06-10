const { user, sequelize } = require('../models')

module.exports = {
  // 登录
  async login({ username, password }) {
    return await user.findOne({ where: { username, password }})
  },
  // 获取所有用户
  async getUsers() {
    return await user.findAll()
  },
  // 编辑用户
  async editUser(user) {
    // 更新数据的时候要开启`individualHooks:true`选项，否则不会触发`beforeUpdate`的`hooks`。
    const result = await sequelize.transaction(async(t) => {
      const res = await user.update(user, { where: { id: user.id }, transaction: t, individualHooks: true })
      return res
    })
    return result
  },
  // 增加用户
  async addUser({ username, password }) {
    // 开启事务
    const result = await sequelize.transaction(async(t) => {
      const result = await user.create({ username, password }, { transaction: t })
      return result
    })
    return result
  }
}
