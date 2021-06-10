/**
 * 响应成功格式
 * @param {*} data 数据
 * @param {*} code 响应码
 * @param {*} msg 消息
 * @returns {}
 */
const responseFormat = (data = {}, msg = 'success', code = 200) => {
  return {
    code,
    msg,
    data
  }
}

module.exports = {
  responseFormat
}
