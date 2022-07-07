import React from 'react'
import CitaForm from '../components/CitaForm'
import CitasList from '../components/CitasList'

const GestorDeCitas = () => {
  return (
    <div>

        <h1>TUCITA.COM</h1>

        <div>
            <CitaForm/>
        </div>

        <div>
            <CitasList/>
        </div>

    </div>
  )
}

export default GestorDeCitas