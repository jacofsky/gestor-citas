import React, { createContext, useContext, useEffect, useState } from 'react'
import { docsCitas, fbCreateCita, fbDeleteCita, fbGetCitas } from '../helpers/FirebaseCitas'

interface ContextValues {
  createCitas: (cita: citaValusTypes) => void,
  deleteCita: (id: string) => void,
  citas: docsCitas[]|null,
  loadingAction: boolean
}

export interface citaValusTypes {
  medico: string|undefined,
  fecha: string|undefined,
  hora: string|undefined,
  especialidad: string|undefined,
  sintomas: string|undefined
}

export const CitasContext = createContext<ContextValues | null>(null)

export const CitasProvider = ({children}: {children: JSX.Element}) => {


  const [loadingAction, setLoadingAction] = useState<boolean>(false)
  
  const [citas, setCitas] = useState<docsCitas[]|null>(null)

  // crear tarea

  const createCitas = async(cita: citaValusTypes) => {
    setLoadingAction(true)
    const citaId = await fbCreateCita(cita)

    if (!citaId) {
      alert('Problemasss')
    }
    setLoadingAction(false)

  }
  
  // eliminar tarea

  const deleteCita = async(id: string) => {
    setLoadingAction(true)

    await fbDeleteCita(id)
    setLoadingAction(false)

  }

  // obtener tareas
  const getCitas = async () => {
    
    const citasArray = await fbGetCitas()
    
    if (citasArray) {
      setCitas(citasArray)
    }
    
  }
  
  useEffect(() => {
    setLoadingAction(true)
    getCitas()
    setLoadingAction(false)

  }, [loadingAction])


  return (
    <CitasContext.Provider value={{createCitas, citas, deleteCita, loadingAction}}>
        {children}
    </CitasContext.Provider>
  )
}

export const useCitasContext = () => {
  const auth = useContext(CitasContext) as ContextValues
  return auth
}