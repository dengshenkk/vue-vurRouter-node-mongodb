import axios from 'axios'

let config = {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
}

/**
 * @description 请求拦截
 */
axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

/**
 * @description 响应拦截
 */
axios.interceptors.response.use(
  config => config,
  error => Promise.reject(error))

const BASE_URL = 'http://45.62.126.125:8000'

// 区分生产和开发环境
// const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://45.62.126.125:8000' : ''

export function UserList(params) {
  return axios.get(`${BASE_URL}/api/UserList`, {params: {...params}}, config)
}

/**
 * @description 添加用户
 * @param params
 * @return {AxiosPromise<any>}
 * @constructor
 */
export function AddUser(params) {
  return axios.post(`${BASE_URL}/api/AddUser`, params, config)
}

/**
 * @description yes/no
 * @return {AxiosPromise<any>}
 */
export function yesNo(params) {
  return axios.get(`${BASE_URL}/api/yesno`, {params: {...params}}, config)
}
