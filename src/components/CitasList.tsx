import React from 'react'
import { useCitasContext } from '../context/CitasContext'
import CitasCard from './CitasCard';

const CitasList = () => {

  const {citas} = useCitasContext()
  
  console.log(citas);

  return (
    <div>
        {citas?.map(cita => <CitasCard key={cita.id} doc={cita}/>)}
    </div>
  )
}

export default CitasList