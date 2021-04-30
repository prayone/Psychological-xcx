import ajax from '../utils/ajax'
const host = 'https://psy.zhushou01.com'
// const host = 'http://127.0.0.1:8000'

export function getArticleList (data) {
  return ajax(
    {
      url: host + '/api/articles/',
      method: 'GET',
      data,
    }
  )
}
export function queryArticle(id, data) {
  return ajax(
    {
      url: host + '/api/articles/' + id,
      method: 'GET',
      data,
    }
  )
}
export function getCategory(data) {
  return ajax(
    {
      url: host + '/api/category/',
      method: 'GET',
      data,
    }
  )
}
export function queryTest(id, data) {
  return ajax(
    {
      url: host + '/api/category/' + id,
      method: 'GET',
      data,
    }
  )
}
export function queryQuestion(id, data) {
  return ajax(
    {
      url: host + '/api/question/?page_size=200&type=' + id,
      method: 'GET',
      data,
    }
  )
}
export function queryResult(data) {
  return ajax(
    {
      url: host + '/api/result/',
      method: 'POST',
      data,
    }
  )
}

export function login(data) {
  return ajax(
    {
      url: host + '/api/login/',
      method: 'POST',
      data,
    }
  )
}

export function getRecord(data) {
  return ajax(
    {
      url: host + '/api/record/',
      method: 'GET',
      data,
    }
  )
}
export function getRecordDetail(id) {
  return ajax(
    {
      url: host + '/api/record/' + id,
      method: 'GET',
    }
  )
}
export function setRecord(data) {
  return ajax(
    {
      url: host + '/api/record/',
      method: 'post',
      data,
    }
  )
}
