import React from 'react'
import { UserInfo } from '@firebase/auth-types'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children, uid}: {children: JSX.Element, uid: any}) => {

  return !!uid
    ?  <Navigate to='/'/>
    :  children
}

export default PublicRoute