import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useAuthContext } from '../context/AuthenticationContext'

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
      const user = await login(email, password)
      console.log(user);
      
    }
  })


  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>
        <p>{formik.errors.email}</p>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>

        <p>{formik.errors.password}</p>

        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm