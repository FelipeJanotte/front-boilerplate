import type { AxiosInstance } from 'axios'
import type { ViaCepConstructorType, ViaCepGetCepProps } from './Types/ViaCepTypes'

export class ViaCep {
  _axios: AxiosInstance
  // Case: External Api
  // Defines its baseUrl with http
  // Case: Internal Api
  // Use as usual /controller
  _baseUrl = 'http://viacep.com.br/ws/'
  constructor({ axiosInstance }: ViaCepConstructorType) {
    this._axios = axiosInstance
  }

  getCep({ cep, dataType }: ViaCepGetCepProps) {
    return this._axios.get(`${this._baseUrl}${cep}/${dataType ?? 'json'}`)
  }
}
