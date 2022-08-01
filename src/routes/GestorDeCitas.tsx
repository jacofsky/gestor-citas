import React from 'react'
import CitaForm from '../components/CitaForm'
import CitasList from '../components/CitasList'
import { CitasProvider } from '../context/CitasContext'

import styles from '../citaregister.module.css'

const GestorDeCitas = () => {
  return (
    <CitasProvider>
      <div className={styles.container}>


        <div className='row'>
          <div className={`col-12 col-md-6 ${styles.citascontainer}`}>
            <h1>TUCITA.COM</h1>
            <CitaForm/>
          </div>

          <div className='col-12 col-md-6'>
            <CitasList/>
          </div>

        </div>

      </div>
    </CitasProvider>
    
  )
}

export default GestorDeCitas