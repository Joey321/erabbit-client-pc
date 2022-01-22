// 1.创建一个新的axios实例
import axios from 'axios'
// 从vuex持久化的数据中获取数据
import store from '@/store'
import router from '@/router'

export const baseUrl = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseUrl,
  timeout: 5000
})

// 2.请求拦截器 若有token则头部携带
instance.interceptors.request.use(config => {
// 拦截业务逻辑 请求配置修改
  const { profile } = store.state.user
  if (profile.token) {
    console.log(profile.token)
    config.headers.Authorization = 'Bearer ' + profile.token
  }
  return config
}, err => {
// 拦截失败时
  return Promise.reject(err)
})
// 3.响应拦截器 剥离无效数据 处理token失效
instance.interceptors.response.use(res => {
  // 请求成功的响应数据
  return res.data
}, err => {
  // err.response 有响应
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
    // 跳转到登录页
    // 跳转传参(当前路由地址)给登录页面
    store.commit('user/setUser', {})
    // encodeURIComponent转换为uri编码防止解析地址出问题
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})
// 4.导出函数，调用axios实例发请求 返回Promise

// 请求工具函数 负责发请求：请求地址、请求方式提交的数据
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 当method为get 使用params传递submitData(地址栏)
    // 当method不为get 使用data传递submitData(请求体)
    // []写js表达式表示key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
