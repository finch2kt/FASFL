import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // this is default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'

  }
})

export default {
  getModules () {
    return apiClient.get('/modules')
  },
  getModule (id) {
    return apiClient.get('/modules/' + id)
  }
}
