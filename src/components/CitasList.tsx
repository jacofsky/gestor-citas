import React from 'react'
import { useCitasContext } from '../context/CitasContext'
import CitasCard from './CitasCard';

import styles from '../citaregister.module.css'


const CitasList = () => {

  const {citas, loadingAction} = useCitasContext()
  
  return (
    <>
      {
        loadingAction ? 
          <div className={styles.loader}>
            <div className="spinner-border text-light" role="status">
            </div>
            <p>
              Organizando citas...
            </p>
          </div>
        :
          <div className={styles.citasColumn}>
              {citas?.map(cita => <CitasCard key={cita.id} doc={cita}/>)}
          </div>
      }
    </>
  )
}

export default CitasList