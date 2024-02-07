import type { App } from 'vue'
import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { createApi } from '../api'
import type { ApiType } from '../api/Types/ApiTypes'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: ApiType
  }
}
export const createApiPlugin = () => ({
  install(app: App) {
    // Here you defines your request
    // * BaseUrl
    // * BaseResponse
    // * Interceptors
    const axiosInstance = axios.create({
      // baseUrl: '',
      timeout: 3000
    })

    axiosInstance.interceptors.request.use(requestInterceptorOnSuccess, requestInterceptorOnReject)
    axiosInstance.interceptors.response.use(
      responseInterceptorOnSuccess,
      responseInterceptorOnReject
    )

    app.config.globalProperties.$api = createApi({ axiosInstance })
  }
})

const requestInterceptorOnSuccess = (config: InternalAxiosRequestConfig) => {
  // Here u defines your config on request
  // Mostly unnecessary, cause u easyly uses instance creation
  // to define it
  return config
}

const requestInterceptorOnReject = (err: AxiosError) => {
  // Here u do everthing u want when request rejects
  // * Validation
  // * Error message
  return Promise.reject(err)
}

const responseInterceptorOnSuccess = (response: AxiosResponse) => {
  // Here u may use to create
  // your own response object
  return response
}

const responseInterceptorOnReject = (err: Error) => {
  // Here u may receive any type of error
  // Sometimes needs a specific validation
  // This has same porpouse as requestInterceptorOnReject
  return Promise.reject(err)
}
