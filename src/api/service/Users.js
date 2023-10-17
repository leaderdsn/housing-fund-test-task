import api from '@/api'

const Users = {
  getUsers (params) {
    return api.get('/users', { params })
  }
}

export default Users
