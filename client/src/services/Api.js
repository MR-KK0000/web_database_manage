import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:2002`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
