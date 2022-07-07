import React, { createContext } from 'react'

interface ContextValues {

}

export const CitasContext = createContext<ContextValues | null>(null)

export const CitasProvider = ({children}: {children: JSX.Element}) => {

  // crear tarea
  
  // eliminar tarea

  // obtener tareas
  


  return (
    <CitasContext.Provider value={{}}>
        {children}
    </CitasContext.Provider>
  )
}
