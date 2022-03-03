import React, { useState } from 'react'
import { dbConfig } from '../config/firebase'
import {
  collection,
  addDoc,
} from 'firebase/firestore/lite'
import styles from './Reservar.module.css'

export const Reservar = () => {
  const [reservacion, setReservacion] = useState([]);
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [numpersonas, setNumpersonas] = useState(0)
  const [fecha, setFecha] = useState('')

  const handleSubmitr = (e) => {
    e.preventDefault()
    guardareserva();
    setNombre('')
    setCorreo('')
    setTelefono('')
    setNumpersonas(0)
    setFecha('')
    document.getElementById('inputNombre').value = ''
    document.getElementById('inputEmail').value = ''
    document.getElementById('inputTelefono').value = ''
    document.getElementById('inputNPersonas').value = 0
    alert('Reserva Realizada');
  }

  const guardareserva = async () => {
    const reservaAGuardar = {
      nombre,
      correo,
      telefono,
      numpersonas,
      fecha,
    };
    try {
      const DB = collection(dbConfig, "proy4-reservas");
      const item = await addDoc(DB, reservaAGuardar);
      setReservacion([...reservacion, { id: item.id, nombre, correo, telefono, numpersonas, fecha }]);
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };


  return (
    <div>
      <h1 className={styles.titulo_reservaciones}>Reservaciones</h1>
      <form
        id="formulario"
        onSubmit={handleSubmitr}
        className={styles.formato_reservar}
      >
        <section className={styles.inputs}>
          <div
            className={styles.inputs_reservaciones}
            style={{ width: '25rem' }}
          >
            <label className={styles.formlabel}>Nombre Completo</label>
            <input 
              type="text"
              id="inputNombre"
              placeholder="Nombre"
              required
              className={styles.formcontrol}
              minLength={3}
              maxLength={40}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
            />
          </div>

          <div
            className={styles.inputs_reservaciones}
            style={{ width: '15rem' }}
          >
            <label className={styles.formlabel}>Correo electronico</label>
            <input
              type="email"
              className={styles.formcontrol}
              id="inputEmail"
              placeholder="email@example.com"
              required
              onChange={(e) => {
                setCorreo(e.target.value)
              }}
            />
          </div>

          <div
            className={styles.inputs_reservaciones}
            style={{ width: '10rem' }}
          >
            <label className={styles.formlabel}>Telefono</label>
            <input
              type="tel"
              className={styles.formcontrol}
              id="inputTelefono"
              placeholder="Telefono"
              minLength={10}
              maxLength={10}
              required
              onChange={(e) => {
                setTelefono(e.target.value)
              }}
            />
          </div>

          <div
            className={styles.inputs_reservaciones}
            style={{ width: '10rem' }}
          >
            <label className={styles.formlabel}>No Personas</label>
            <input
              type="number"
              className={styles.formcontrol}
              id="inputNPersonas"
              placeholder="# personas"
              required
              min={1}
              maxLength={100}
              onChange={(e) => {
                setNumpersonas(e.target.value)
              }}
            />
          </div>

          <div
            className={styles.inputs_reservaciones}
            style={{ width: '10rem' }}
          >
            <label className={styles.formlabel}>Fecha Reservación</label>
            <input
              className={styles.formcontrol}
              style={{ width: '17rem' }}
              type="datetime-local"
              name="fecha"
              id="fecha"
              required
              onChange={(e) => {
                setFecha(e.target.value)
              }}
            />
          </div>
        </section>
        <div className={styles.contenedor_boton}>
          <button type="submit" className={styles.boton}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
