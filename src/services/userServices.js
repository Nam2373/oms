import axiosClient from './setup/axiosClients'

const userAPI = {
  REGISTER: payload => {
    return axiosClient.post('/api/v1/users/register', payload)
  },
  LOGIN: payload => {
    return axiosClient.post('/api/v1/users/login', payload)
  },
  LOGOUT: () => {
    return axiosClient.post('/api/v1/logout')
  },
  GET_ME: () => {
    return axiosClient.get('/api/v1/users/me')
  },
  UPDATE_ME: payload => {
    return axiosClient.post('/api/v1/users/me/update', payload)
  }
}

export { userAPI }
