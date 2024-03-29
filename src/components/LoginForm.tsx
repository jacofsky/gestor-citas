import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useAuthContext } from '../context/AuthenticationContext'
import styles from '../loginregister.module.css'

interface loginValusTypes {
  email: string,
  password: string
}

const LoginForm = () => {

  const {login} = useAuthContext()
  
  const loginSchema: Yup.SchemaOf<loginValusTypes> = Yup.object({
    email: Yup.string().required('El email es necesario'),
    password: Yup.string().min(6).required('La contraseña es necesaria')
  })

  const formik = useFormik<loginValusTypes>({
    initialValues:{
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async({email, password}) => {
      
      await login(email, password)
      
    }
  })


  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>
          <p className={styles.error}>{formik.errors.email}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input className={styles.input} type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
          <p className={styles.error}>{formik.errors.password}</p>
        </div>

        <button className={styles.button} type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm