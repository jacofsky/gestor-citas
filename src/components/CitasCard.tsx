import React from 'react'
import { useCitasContext } from '../context/CitasContext'
import { citaData } from '../helpers/FirebaseCitas'
import styles from '../citaregister.module.css'

interface Props {
  doc: {id: string, data: citaData }
}


const CitasCard = ({doc}:Props) => {

  const {data , id} = doc

  const { deleteCita } = useCitasContext()

  return (
    <div className={styles.cardCita}>
      <h3>Turno de: {data.especialidad}</h3>
      <p>Agendado para el {data.fecha} a las {data.hora}hs</p>
      <p>Medico: {data.medico}</p>
      <p>Paciente: {data.paciente}</p>
      <p>Sintomas: {data.sintomas}</p>
      <button className={styles.borrarButton} onClick={() => deleteCita(id)}>Borrar</button>
    </div>
  )
}

export default CitasCard