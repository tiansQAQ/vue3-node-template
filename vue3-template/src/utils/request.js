import axios from 'axios'
import store from '@/store'
const servie = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器
servie.interceptors.request.use(config => {
  if (store.getters.accessToken) {
    config.headers.accessToken = ''
  }
  return config
}, error => {
  console.log('err:' + error)
  return Promise.reject(error)
})

// 添加响应拦截器
servie.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    return Promise.reject(res.msg || 'error')
  } else {
    return res
  }
}, error => {
  console.log('err:' + error)
  return Promise.reject(error)
})

export default servie
