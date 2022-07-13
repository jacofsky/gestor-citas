import { UserInfo } from '@firebase/auth-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children, uid}: {children: JSX.Element, uid: any}) => {

  return !!uid
    ?  children
    :  <Navigate to='/login'/>
}

export default PrivateRoute