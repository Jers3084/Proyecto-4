import React, { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore/lite'
import { dbConfig } from '../config/firebase'
import styles from './Gestion.module.css'

export const Gestion = () => {
  const [listadoReservas, setListadoReservas] = useState([])
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [numpersonas, setNumpersonas] = useState(0)
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    try {
      const DB = collection(dbConfig, 'proy4-reservas')
      const Reservaciones = await getDocs(DB)
      const listadoFinal = Reservaciones.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }))
      setListadoReservas(listadoFinal)
    } catch (e) {
      console.log('hubo un error!!!')
      console.log(e)
    }
  }

  const editarReserva = (item) => {
    setNombre(item.nombre)
    setCorreo(item.correo)
    setTelefono(item.telefono)
    setNumpersonas(item.numpersonas)
    setFecha(item.fecha)
    setId(item.id)
  }

  const actualizarEnDB = async () => {
    try {
      const datos = {
        nombre,
        correo,
        telefono,
        numpersonas,
        fecha,
      }

      const config = doc(dbConfig, 'proy4-reservas', id)
      await updateDoc(config, datos)
      obtenerDatos()
      setNombre('')
      setCorreo('')
      setTelefono('')
      setNumpersonas(0)
      setFecha('')
    } catch (e) {
      console.log('hubo un error!!!')
      console.log(e)
    }
  }

  const eliminarReserva = async (item) => {
    try {
      const ref = doc(dbConfig, 'proy4-reservas', item.id)
      await deleteDoc(ref)

      obtenerDatos()
    } catch (e) {
      console.log('hubo un error!!!')
      console.log(e)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    actualizarEnDB()
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.listadoDatos}>
        <p className={styles.titulos}>Listado de Reservaciones</p>
        <ul className={styles.listado_ul}>
          {listadoReservas.map((item) => (
            <div className={styles.list_group_item}>
              <li key={item.id} className={styles.list_group_item1}>
                {item.nombre}
                <div className={styles.botones}>
                  <button
                    className={styles.botonVerde}
                    onClick={() => editarReserva(item)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.botonRojo}
                    onClick={() => eliminarReserva(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className={styles.formato}>
        <p className={styles.titulos}>"Editar Reservación"</p>
        <form onSubmit={submit} className={styles.editarR}>
          <div className={styles.colauto} style={{ width: '25rem' }}>
            <label className={styles.formlabel}>
              <b>Nombre</b>
            </label>
            <input
              type="text"
              className={styles.formcontrol}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className={styles.colauto} style={{ width: '15rem' }}>
            <label className={styles.formlabel}>
              <b>Correo</b>
            </label>
            <input
              type="email"
              className={styles.formcontrol}
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
            />
          </div>
          <div className={styles.colauto} style={{ width: '10rem' }}>
            <label className={styles.formlabel}>
              <b>Telefono</b>
            </label>
            <input
              type="tel"
              className={styles.formcontrol}
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>
          <div className={styles.colauto} style={{ width: '5rem' }}>
            <label className={styles.formlabel}>
              <b>Num de Personas</b>
            </label>
            <input
              type="number"
              className={styles.formcontrol}
              onChange={(e) => setNumpersonas(e.target.value)}
              value={numpersonas}
            />
          </div>
          <div className={styles.colauto} style={{ width: '10rem' }}>
            <label className={styles.formlabel}>
              <b>Fecha</b>
            </label>
            <input
              type="text"
              className={styles.formcontrol}
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
            />
          </div>
          <div className={styles.divBoton}>
            <button type="submit" className={styles.boton}>
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
