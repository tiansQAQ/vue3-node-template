
/**
 * http 异常处理
 */
class HttpException extends Error {
  constructor(customError = {}) {
    super()
    const defaultError = { message: '参数错误', state: 500, errorCode: 10000 }
    const { message, status, errorCode } = Object.assign(defaultError, customError)
    this.message = message
    this.status = status
    this.errorCode = errorCode
  }
}

/**
 * request params 异常处理
 * example: throw new ParamsException({ message: '参数错误', status: 400,errorCode: 10001 })
 */
class ParamsException extends Error {
  constructor(customError = {}) {
    super()
    const defaultError = { message: '参数错误', status: 400, errorCode: 10001 }
    const { message, status, errorCode } = Object.assign(defaultError, customError)
    this.message = message // 返回的错误信息
    this.status = status // http status code 2xx 4xx 5xx
    this.errorCode = errorCode // 自定义的错误码，例如：10001
  }
}

module.exports = {
  HttpException,
  ParamsException
}
