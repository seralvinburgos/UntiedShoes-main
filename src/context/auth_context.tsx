import { createContext, ReactNode, useState } from 'react'
import { login as authenticate, refreshTokens } from '../services'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import dayjs from 'dayjs'

interface AuthContextProps {
  login: (username: string, password: string) => void
  logout: () => void
  user: UserToken | null
}

export const AuthContext = createContext<AuthContextProps>(null!)

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null)
  const [user, setUser] = useState<UserToken | null>(null)

  const login = async (username: string, password: string) => {
    const { data } = await authenticate(username, password)
    setAuthTokens(data)
    setUser(jwt_decode(data.access))
    localStorage.setItem('authTokens', JSON.stringify(data))
  }

  const logout = () => {
    setUser(null)
    setAuthTokens(null)
    localStorage.removeItem('authTokens')
  }

  useEffect(() => {
    if (authTokens) {
      let user: UserToken = jwt_decode(authTokens.access)
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
      if (isExpired) {
        refreshTokens(authTokens.refresh).then(({ data }) => {
          setAuthTokens(data)
          setUser(jwt_decode(data.access))
          localStorage.setItem('authTokens', JSON.stringify(data))
        })
      }
      else setUser(user)
    }
  }, [authTokens])

  return (
    <AuthContext.Provider
      value={{ login, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}