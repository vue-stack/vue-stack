import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.stackexchange.com/2.2/`
  })
}