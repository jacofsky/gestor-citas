import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

interface citaValusTypes {
  medico: string|undefined,
  fecha: string|undefined,
  hora: string|undefined,
  especialidad: string|undefined,
  sintomas: string|undefined
}

const CitaForm = () => {

  // Medico 
  // Fecha
  // Hora 
  // Tipo de medico
  // Sintomas 

  const citaSchema: Yup.SchemaOf<citaValusTypes> = Yup.object({
    medico: Yup.string().required('El nombre del medico es requerido'),
    fecha: Yup.string().required('La fecha es requerida'),
    hora: Yup.string().required('La hora es requerida'),
    especialidad: Yup.string().required('La especialidad es requerida'),
    sintomas: Yup.string().required('Se requiere una breve descripcion de los sintomas')
  })

  const formik = useFormik<citaValusTypes>({
    initialValues:{
      medico: '',
      fecha: '',
      hora: '',
      especialidad: '',
      sintomas: ''
    },
    validationSchema: citaSchema,
    onSubmit: async(values) => {
      console.log(values);
      
    }
  })
   
  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <label htmlFor="medico">Medico</label>
        <input type="text" name="medico" id="medico" onChange={formik.handleChange} value={formik.values.medico} />

        <label htmlFor="fecha">Fecha</label>
        <input type="date" name="fecha" id="fecha" onChange={formik.handleChange} value={formik.values.fecha} />

        <label htmlFor="hora">Hora</label>
        <input type="time" name="hora" id="hora" onChange={formik.handleChange} value={formik.values.hora} />

        <label htmlFor="especialidad">Especialidad</label>
        <select name="especialidad" id="especialidad" onChange={formik.handleChange} value={formik.values.especialidad}>
          <option value="" selected disabled>Seleccionar</option>
          <option value="General">General</option>
          <option value="Traumatologia">Traumatologia</option>
          <option value="Pediatria">Pediatria</option>
          <option value="Oftalmologia">Oftalmologia</option>
          <option value="Radiologia">Radiologia</option>
        </select>

        <label htmlFor="sintomas">Sintomas</label>
        <textarea name="sintomas" id="sintomas" onChange={formik.handleChange} value={formik.values.sintomas}></textarea>

        <button type="submit">Enviar</button>
        <p>{formik.errors.especialidad}</p>
        <p>{formik.errors.fecha}</p>
        <p>{formik.errors.medico}</p>
        <p>{formik.errors.hora}</p>
        <p>{formik.errors.sintomas}</p>

    </form>
  )
}

export default CitaForm