import { useEffect, useState } from 'react'
import users from '../data/users'

const useLogin = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', user.email)
      window.localStorage.setItem('username', user.username)
      setUser(user)
    }
  }, [user])

  const login = (email, password) => {
    const user = users.find(user => user.email === email)

    if (user) {
      const passwordError = user.password !== password
      !passwordError && setUser(user)
      return {
        emailError: false,
        passwordError
      }
    } else {
      return {
        emailError: true,
        passwordError: false
      }
    }
  }

  return [user, login]
}

export default useLogin
