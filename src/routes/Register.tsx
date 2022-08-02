import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import LogWithButton from '../components/LogWithButton'
import RegisterForm from '../components/RegisterForm'
import { useAuthContext } from '../context/AuthenticationContext'

import styles from '../loginregister.module.css'

const Register = () => {

  const {googleLogin, githubLogin} = useAuthContext()

  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <h1 className={styles.title}>Register</h1>

            <div>
                <RegisterForm/>
            </div>

            <Divider/>

            

            <div className='row'>
                <div className='col-6 d-flex justify-content-center'>
                    <LogWithButton login={googleLogin} icon='google'/>
                </div>
                <div className='col-6 d-flex justify-content-center'>
                    <LogWithButton login={githubLogin} icon='github'/>
                </div>
            </div>

            <div className={styles.linkBox}>
                <Link className={styles.linkTo} to='/login'>Ya tienes cuenta? Entra aqui!</Link>
            </div>
        </div>

    </div>
  )
}

export default Register