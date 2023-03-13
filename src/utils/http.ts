import axios from 'axios'
import jwt_decode from "jwt-decode"
import dayjs from 'dayjs'

const API_URL = 'http://localhost:8000/api/'

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// http.interceptors.request.use(async req => {
//   if (!authTokens) {
//     authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null
//     req.headers.Authorization = `Bearer ${authTokens?.access}`
//   }

//   const user: UserToken = jwt_decode(authTokens.access)
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

//   if (!isExpired) return req

//   const response = await axios.post(`${API_URL}/token/refresh/`, {
//     refresh: authTokens.refresh
//   })

//   localStorage.setItem('authTokens', JSON.stringify(response.data))
//   req.headers.Authorization = `Bearer ${response.data.access}`
//   return req
// })