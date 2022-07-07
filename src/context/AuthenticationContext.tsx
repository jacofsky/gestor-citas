import React, { createContext } from 'react'

interface ContextValues {

}

export const AuthContext = createContext<ContextValues | null>(null)

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  // useState | user data

  // login

  // register

  // isLoged | localstorage


  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}
