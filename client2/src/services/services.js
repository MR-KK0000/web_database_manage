import Api from '@/services/Api'

export default{
  gettest () {
    return Api().get('api/test')
  },
  getbuttonone () {
    return Api().get('api/b1')
  },
  getbuttontwo () {
    return Api().get('api/b2')
  }
}
