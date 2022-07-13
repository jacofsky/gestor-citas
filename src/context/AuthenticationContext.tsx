import { UserCredential } from '@firebase/auth'
import React, { createContext, useContext, useState } from 'react'
import { fbGithubRegister, fbGoogleRegister, fbRegister, fbSinginEmailPassword } from '../helpers/FirebaseConnections'

interface ContextValues {
  login: (email:string, password: string) => Promise<boolean>
  register: (email:string, password: string, name: string) => Promise<boolean>
  logout: () => void
  user: UserCredential | null
  googleLogin: () => Promise<boolean>
  githubLogin: () => Promise<boolean>
}

interface UserStorage {
  email: string,
  password: string
}

export const AuthContext = createContext<ContextValues | null>(null)

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  // useState | user data


  const [user, setUser] = useState<UserCredential | null>(null)

  // login

  const login = async(email:string, password: string) => {
    const credentials = await fbSinginEmailPassword(email, password)
    console.log(credentials);
    
    if (credentials.user.displayName) {
      setUser(credentials)
      localStorage.setItem('user', JSON.stringify({email, password}))
      return true
    }

    return false

  }

  // register

  const register = async(email:string, password: string, name: string) => {
    console.log('Hola');
    
    const credentials = await fbRegister(email, password, name)
    
    console.log(credentials);
    
    if (credentials.user.displayName) {
      setUser(credentials)
      localStorage.setItem('user', JSON.stringify({email, password}))
      return true
    }

    return false
  }

  // isLoged | localstorage

  const logout = () => {
    setUser(null)
    localStorage.clear()
  }

  // Login with google

  const googleLogin = async() => {
    const credentials = await fbGoogleRegister()

    if (credentials.user.displayName) {
      setUser(credentials)
      
      return true
    }

    return false

  } 

  // Login with github

  const githubLogin = async() => {
    const credentials = await fbGithubRegister()

    if (credentials.user.displayName) {
      setUser(credentials)
      
      return true
    }
    
    return false

  }

  const verifyLogin = async() => {
    const credentials = localStorage.getItem('user') 
    if (credentials) {
      const credParse:UserStorage = JSON.parse(credentials)
      const user = await fbSinginEmailPassword(credParse.email, credParse.password)

      if (user.user.displayName) {
        setUser(user)
        return true
      }
      return false
    }
    return false
  }

  return (
    <AuthContext.Provider value={{login, register, logout, user, googleLogin, githubLogin}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => {
  const auth = useContext(AuthContext) as ContextValues
  return auth
}