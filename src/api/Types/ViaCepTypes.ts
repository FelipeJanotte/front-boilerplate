import type { AxiosInstance } from 'axios'

export type ViaCepConstructorType = {
  axiosInstance: AxiosInstance
}

export type ViaCepGetCepProps = {
  cep: string
  dataType: string | null | undefined
}
