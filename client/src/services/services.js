import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:2002'

export default{
  gettest () {
    return axios.get('api/test')
  },
  getbuttonone (data) {
    return axios.post('api/b1', data)
  },
  getbuttontwo () {
    return axios.get('api/b2')
  },
  posttestconnect (params) {
    return axios.post('api/testconnect', params )
  },
  postconnect (data) {
    return axios.post('api/mongo/connect', data)

  }
}
