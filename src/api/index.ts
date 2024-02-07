import type { ApiOptionsType } from './Types/ApiTypes'
import { ViaCep } from './ViaCep'

export const createApi = (options: ApiOptionsType) => {
  const axiosInstance = options.axiosInstance
  const ViaCepController = new ViaCep({ axiosInstance })

  return {
    ViaCepController
  }
}
