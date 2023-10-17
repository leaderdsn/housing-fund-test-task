import Users from '@/api/service/Users'

const users = {
  state: {
    users: JSON.parse(localStorage.getItem('users')) || null,
    isLoading: false,
    error: null
  },

  getters: {
    users: state => state.users,
    isLoading: state => state.isLoading,
    error: state => state.error
  },

  mutations: {
    setUsers: (state, data) => {
      state.users = data
      localStorage.setItem('users', JSON.stringify(data))
    },
    removeUsers: (state) => {
      localStorage.removeItem('users')
      state.users = null
    },
    setLoading: (state, data) => {
      state.isLoading = data
    },
    setError: (state, data) => {
      state.error = data
    }
  },

  actions: {
    async search ({ commit }, payload) {
      commit('setLoading', true)
      await Users.getUsers(payload)
        .then(({ data }) => {
          commit('setUsers', data)
          commit('setLoading', false)
        })
        .catch((err) => {
          commit('setError', err)
          commit('setLoading', false)
        })
    }
  }
}

export default users
