import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useCitasContext } from '../context/CitasContext'

import styles from '../citaregister.module.css'

interface citaValusTypes {
  medico: string|undefined,
  fecha: string|undefined,
  hora: string|undefined,
  especialidad: string|undefined,
  sintomas: string|undefined
}

const CitaForm = () => {

  const {createCitas} = useCitasContext()

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
      createCitas(values)
      
    }
  })
   
  return (
    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="medico">Medico</label>
          <input className={styles.input} type="text" name="medico" id="medico" onChange={formik.handleChange} value={formik.values.medico} />
          <p className={styles.errors}>{formik.errors.medico}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="fecha">Fecha</label>
          <input className={styles.input} type="date" name="fecha" id="fecha" onChange={formik.handleChange} value={formik.values.fecha} />
          <p className={styles.errors}>{formik.errors.fecha}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="hora">Hora</label>
          <input className={styles.input} type="time" name="hora" id="hora" onChange={formik.handleChange} value={formik.values.hora} />
          <p className={styles.errors}>{formik.errors.hora}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="especialidad">Especialidad</label>
          <select className={styles.input} name="especialidad" id="especialidad" onChange={formik.handleChange} value={formik.values.especialidad}>
            <option value="" selected disabled>Seleccionar</option>
            <option value="General">General</option>
            <option value="Traumatologia">Traumatologia</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Oftalmologia">Oftalmologia</option>
            <option value="Radiologia">Radiologia</option>
          </select>
          <p className={styles.errors}>{formik.errors.especialidad}</p>
        </div>

        <div className={styles.inputBox}> 
          <label className={styles.label} htmlFor="sintomas">Sintomas</label>
          <textarea className={styles.input} name="sintomas" id="sintomas" onChange={formik.handleChange} value={formik.values.sintomas}></textarea>
          <p className={styles.errors}>{formik.errors.sintomas}</p>
        </div>

        <button className={styles.button} type="submit">Enviar</button>

    </form>
  )
}

export default CitaForm