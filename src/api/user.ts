import type { AxiosRequestConfig } from 'axios'
import { AxiosPromise } from 'axios'
import { RouteRecordRaw } from 'vue-router'
import service from 'Plugins/request'

/** 登录 POST */
interface LoginDto {
  username: string
  password: string
}
// 这里约定所有的接口方法名前加个“$”前缀，跟普通方法名区分开
export async function $authLogin(data?: LoginDto, options?: AxiosRequestConfig) {
  return service({
    url: '/user/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  })
}

// 获取路由
export function $getRouters(): AxiosPromise<RouteRecordRaw[]> {
  return service({
    url: '/system/menu/getRouters',
    method: 'get',
  })
}
