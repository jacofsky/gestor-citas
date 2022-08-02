import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from '../context/AuthenticationContext';
import { CitasProvider } from '../context/CitasContext';
import GestorDeCitas from './GestorDeCitas';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Register from './Register';

const Router = () => {

  const {user} = useAuthContext()

  return (
    
    <Routes>
        <Route path='/login' element={
          <PublicRoute uid={user?.user.uid}>
            <Login/>
          </PublicRoute>
        } 
        />
        <Route path='/register' element={
          <PublicRoute uid={user?.user.uid}>
            <Register/>
          </PublicRoute>
        } />
        <Route path='/*'element={
        <PrivateRoute uid={user?.user.uid}>
            <GestorDeCitas/>
        </PrivateRoute>
        }/>
    </Routes>
  )
}

export default Router