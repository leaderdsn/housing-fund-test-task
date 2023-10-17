import { createStore } from 'vuex'
import users from '@/store/modules/users'

export default createStore({
  modules: {
    users
  }
})
