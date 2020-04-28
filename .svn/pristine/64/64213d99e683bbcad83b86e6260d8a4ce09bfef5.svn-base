import Vue from 'vue';
const root = process.env.API_ROOT;
const request = require('axios');


/**
 * @description 自定义判断元素类型JS
 * @param obj
 * @returns {string}
 */
function toType (obj = {}) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * @description 参数过滤函数
 * @param method
 * @param url
 * @param params
 */
function apiAxios (method = 'GET', url = '', params = {}) {
  return new Promise ((resolve, reject) => {
    request({
      headers: {'x-access-token': sessionStorage.getItem('x-access-token')},
      method: method,
      url: url,
      data: method === 'POST' ? params : null,
      params: method === 'GET' ? params : null,
      baseURL: root,
      withCredentials: false,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      let res = err.response;
      Vue.prototype.$Message.error(res.data.msg);
      /*err && console.error(`api error, HTTP CODE: ${res.status}`)*/
    })
  })
}

export default {
  get (url, params = {}) {
    return apiAxios('GET', url, params)
  },
  post (url, params = {}) {
    return apiAxios('POST', url, params)
  }
}
