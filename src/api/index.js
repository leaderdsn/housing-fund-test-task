import axios from 'axios'

const loginConfig = {
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}

export default axios.create(loginConfig)
