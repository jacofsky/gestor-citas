import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import styles from '../loginregister.module.css'

const Login = () => {
  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <h1 className={styles.title}>Login</h1>

            <div>
                <LoginForm/>
            </div>

            <div>
                <p>o</p>
            </div>

            <div>
                google.... 
            </div>

            <div className={styles.linkBox}>
                <Link className={styles.linkTo} to='/register'>No tienens una cuenta? Registrate!</Link>
            </div>
        </div>

    </div>
  )
}

export default Login