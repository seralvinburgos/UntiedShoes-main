import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}token/`, {
    username,
    password
  })
  return response
}

export const refreshTokens = async (refreshToken: string) => {
  const response = await axios.post(`${API_URL}token/refresh/`, {
    refresh: refreshToken
  })
  return response
}