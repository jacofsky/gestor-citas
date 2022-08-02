import React from 'react'
import { useAuthContext } from '../context/AuthenticationContext'

import styles from '../citaregister.module.css'


const Logout = () => {
  
  const {logout} = useAuthContext()
  
  return (
    <div className={styles.buttonBox}>
        <button className={styles.buttonLogout} onClick={logout}>Salir <i className='bi bi-door-closed'></i></button>
    </div>
  )
}

export default Logout