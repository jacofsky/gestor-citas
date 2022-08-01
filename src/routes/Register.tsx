import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import RegisterForm from '../components/RegisterForm'

import styles from '../loginregister.module.css'

const Register = () => {
  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <h1 className={styles.title}>Register</h1>

            <div>
                <RegisterForm/>
            </div>

            <Divider/>

            <div>
                google.... 
            </div>

            <div className={styles.linkBox}>
                <Link className={styles.linkTo} to='/login'>Ya tienes cuenta? Entra aqui!</Link>
            </div>
        </div>

    </div>
  )
}

export default Register