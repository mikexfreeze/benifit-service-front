/**
 * Created by Micheal Xiao on 2017/12/15.
 */
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store/store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  store.commit('SET_ONXHR')
  // if (store.getters.token) {
  //   config.headers['Authorization'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    store.commit('SET_NOTXHR')
    return response
  },
  error => {
    store.commit('SET_NOTXHR')
    console.log('fetch ERR')
    console.log(error)

    if (typeof error.response.data.description === 'string') {
      Message({
        message: error.response.data.description,
        type: 'error',
      })
    } else {
      Message({
        message: error.response.data.description[0],
        type: 'error',
      })
    }

    return Promise.reject(error)
  }
)

export default service
