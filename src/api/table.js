import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-element-template/article/list',
    method: 'get',
    params
  })
}
