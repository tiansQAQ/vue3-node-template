import request from '@/utils/request'

export function getInfo(data) {
  return request({
    url: '/info',
    method: 'post',
    data
  })
}
