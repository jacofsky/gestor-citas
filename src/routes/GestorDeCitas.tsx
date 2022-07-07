import React from 'react'
import CitaForm from '../components/CitaForm'
import CitasList from '../components/CitasList'
import { CitasProvider } from '../context/CitasContext'

const GestorDeCitas = () => {
  return (
    <CitasProvider>
      <div>

        <h1>TUCITA.COM</h1>

        <div>
          <CitaForm/>
        </div>

        <div>
          <CitasList/>
        </div>

      </div>
    </CitasProvider>
    
  )
}

export default GestorDeCitas