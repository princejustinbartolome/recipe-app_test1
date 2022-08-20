import axios from 'axios'
import AxiosCallProps from './index.interfaces'

const axiosGet = ({ url }: AxiosCallProps) => {
  return axios.get(url).then((response) => response)
}
const axiosPost = ({ url, payload }: AxiosCallProps) => {
  return axios.post(url, payload).then((response) => response)
}
const axiosPut = ({ url, payload }: AxiosCallProps) => {
  return axios.put(url, payload).then((response) => response)
}

export {
  axiosGet,
  axiosPut,
  axiosPost
}