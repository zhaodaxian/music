import axios from 'axios'
const BASE_URL = 'https://api.mtnhao.com/';
import {Message, Loading} from 'element-ui'
let LOADING
let LOADINGCOUNT = 0
function handleResponse(response) {
  if (response.status === 200) {
    return response.data
  }
}
// 全局请求处理
function handleResponseError (Error) {
  const { response } = Error
  if (response) {
    Message.error('请求错误处理')
  }else{
    Message.error('断网处理')
  }
  return Promise.reject(Error)
}
function createBaseInstance () {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
      get: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      post: {
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  });
  instance.interceptors.response.use(
    handleResponse,
    handleResponseError,
  )
  return instance
}
// 全局请求处理
function minLoading (interceptors) {
  interceptors.request.use(requsetLoadingInterceptor)
  interceptors.response.use(
    responseSuccess,
    responseError)

  function requsetLoadingInterceptor (config) {
    if (!LOADING) {
      LOADINGCOUNT++
      LOADING = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    return config
  }
  function handleResponseLoading () {
    LOADINGCOUNT--
    if (LOADINGCOUNT === 0) {
      LOADING.close()
      LOADING = null
    }
  }
  function responseSuccess (SuccessData) {
    handleResponseLoading()
    return SuccessData
  }
  function responseError (Error) {
    handleResponseLoading()
    throw Error
  }
}
export const request = createBaseInstance()
export const globalRequest = createBaseInstance()
minLoading(globalRequest.interceptors)