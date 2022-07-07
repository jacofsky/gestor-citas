import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { CitasProvider } from '../context/CitasContext';
import GestorDeCitas from './GestorDeCitas';
import Login from './Login';
import Register from './Register';

const Router = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <CitasProvider>
            <Route path='/'element={<GestorDeCitas/>}/>
        </CitasProvider>
    </Routes>
  )
}

export default Router