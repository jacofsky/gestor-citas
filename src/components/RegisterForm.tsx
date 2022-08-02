import React from 'react'
import { useAuthContext } from '../context/AuthenticationContext'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import styles from '../loginregister.module.css'


interface registerValusTypes {
  email: string,
  password: string,
  name: string,
  rPassword: string | undefined
}

const RegisterForm = () => {

  const {register} = useAuthContext()

  const registerSchema: Yup.SchemaOf<registerValusTypes> = Yup.object({
    email: Yup.string().required('El email es necesario'),
    password: Yup.string().min(6).required('La contraseña es necesaria'),
    name: Yup.string().min(3).required('El nombre es requerido'),
    rPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no son iguales')
  })

  const formik = useFormik<registerValusTypes>({
    initialValues:{
      email: '',
      password: '',
      name: '',
      rPassword: ''
    },
    validationSchema: registerSchema,
    onSubmit: async({email, password, name}) => {      
      const user = await register(email, password, name)
      
    }
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="name">Nombre</label>
          <input className={styles.input} type="name" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
          <p className={styles.error}>{formik.errors.name}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
          <p className={styles.error}>{formik.errors.email}</p>
        </div>
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="password">Contraseña</label>
          <input className={styles.input} type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
          <p className={styles.error}>{formik.errors.password}</p>
        </div>
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="rPassword">Repita la contraseña</label>
          <input className={styles.input} type="password" name="rPassword" id="rPassword" onChange={formik.handleChange} value={formik.values.rPassword} />
          <p className={styles.error}>{formik.errors.rPassword}</p>
        </div>



        <button className={styles.button} type="submit">Registrar</button>
    </form>
  )
}

export default RegisterForm