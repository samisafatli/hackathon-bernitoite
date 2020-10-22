import { useEffect, useState } from 'react'
import { getUserByEmail } from '../client/liefeClient'

const useLogin = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', user.email)
      window.localStorage.setItem('username', user.username)
      setUser(user)
    }
  }, [user])

  const login = async (email, password) => {
    try {
      const user = await getUserByEmail(email)
      const passwordError = user.password !== password

      !passwordError && setUser(user)
      return {
        emailError: false,
        passwordError: passwordError
      }
    } catch(err) {
      return {
        emailError: true,
        passwordError: false
      }
    }
  }

  return [user, login]
}

export default useLogin
