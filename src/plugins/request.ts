import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data)
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service
