import ajax from '../utils/ajax'
const host = 'https://m.xdfgk.cn'

export function getDetail (data) {
  return ajax(
    {
      url: host + '/api/v1.0/product/get_detail_applet',
      method: 'POST',
      data,
    }
  )
}
