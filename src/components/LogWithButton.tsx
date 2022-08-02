import React from 'react'

import styles from '../loginregister.module.css'


interface IProps {
    icon: string,
    login: () => Promise<boolean>
}

const LogWithButton = ({icon, login}:IProps) => {
  return (
    <button onClick={login} className={styles.loginWithBtn}>
        <i className={`bi bi-${icon}`}></i>        
    </button>
  )
}

export default LogWithButton