import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://127.0.0.1:3007'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: baseURL,
  timeout: 10000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    function urlContains(url) {
      return url.includes('/my')
    }
    if (urlContains(config.url) && userStore.token) {
      config.headers.Authorization = userStore.token
      // config.headers.platform = 'H5'
    }
    return config
  },
  (err) => Promise.reject(err)
)
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.status === 0) {
      return res
    }
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    ElMessage({
      showClose: true,
      message: res.data.message || '服务异常',
      type: 'error'
    })
    // alert(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    if (err.response?.status === 401) {
      // 清除token和用户信息
      const userStore = useUserStore()
      userStore.removeUser()
      userStore.removeToken()
      router.push('/login')
    }
    // 默认错误
    ElMessage({
      showClose: true,
      message: err.response.data.message || '服务异常',
      type: 'error'
    })
    // alert(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
