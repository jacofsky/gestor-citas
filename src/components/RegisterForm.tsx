import React from 'react'
import { useAuthContext } from '../context/AuthenticationContext'
import { useFormik } from 'formik';
import * as Yup from 'yup'


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
      console.log(user);
      
    }
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <label htmlFor="name">Nombre</label>
        <input type="name" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />

        <label htmlFor="rPassword">Repita la contraseña</label>
        <input type="password" name="rPassword" id="rPassword" onChange={formik.handleChange} value={formik.values.rPassword} />

        <p>{formik.errors.rPassword}</p>
        <p>{formik.errors.password}</p>
        <p>{formik.errors.email}</p>
        <p>{formik.errors.name}</p>


        <button type="submit">Registrar</button>
    </form>
  )
}

export default RegisterForm