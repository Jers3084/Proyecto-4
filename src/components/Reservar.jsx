import React, { useState } from 'react'
import { dbConfig } from '../config/firebase'
import {
  collection,
  addDoc,
} from 'firebase/firestore/lite'
import './Reservar.css'

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
      <h1 className="titulo_reservaciones">Reservaciones</h1>
      <form
        id="formulario"
        onSubmit={handleSubmitr}
        className="formato_reservar"
      >
        <section className="inputs">
          <div
            className="col-auto inputs_reservaciones"
            style={{ width: '25rem' }}
          >
            <label className="form-label">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              placeholder="Nombre"
              required
              minLength={3}
              maxLength={40}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
            />
          </div>

          <div
            className="col-auto inputs_reservaciones"
            style={{ width: '15rem' }}
          >
            <label className="form-label">Correo electronico</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="email@example.com"
              required
              onChange={(e) => {
                setCorreo(e.target.value)
              }}
            />
          </div>

          <div
            className="col-auto inputs_reservaciones"
            style={{ width: '10rem' }}
          >
            <label className="form-label">Telefono</label>
            <input
              type="tel"
              className="form-control"
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
            className="col-auto inputs_reservaciones"
            style={{ width: '10rem' }}
          >
            <label className="form-label">No Personas</label>
            <input
              type="number"
              className="form-control"
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
            className="col-auto inputs_reservaciones"
            style={{ width: '10rem' }}
          >
            <label className="form-label">Fecha Reservación</label>
            <input
              className="entradas"
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
        <div className="boton">
          <button type="submit" className="btn btn-danger">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
