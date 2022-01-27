import React, { useEffect, useState } from 'react'
import { dbConfig } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore/lite'
import './Contacto.css'

export const Contacto = () => {
  const [mensdcontacto, setMensdcontacto] = useState([])
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [comentario, setComentario] = useState('')

  function handleSubmit(e) {
    guardamensaje()
    document.getElementById('Correo').value = ''
    document.getElementById('Telefono').value = ''
    document.getElementById('Comentario').value = ''
    e.preventDefault()
  }

  useEffect(() => {}, [comentario])

  const guardamensaje = async () => {
    const mensajeAGuardar = {
      correo,
      telefono,
      comentario,
    }
    try {
      const DB = collection(dbConfig, 'proy4-3084')
      const item = await addDoc(DB, mensajeAGuardar)
      setMensdcontacto([
        ...mensdcontacto,
        { id: item.id, correo, telefono, comentario },
      ])
    } catch (e) {
      console.log('hubo un error')
      console.log(e)
    }
  }

  return (
    <div>
      <form id="formcontacto" onSubmit={handleSubmit}>
        <h1 className="titulo_contacto">Contacto</h1>
        <div className="contenedor_contacto">
          <div className="mb-3">
            <label htmlFor="Correo" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Correo"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setCorreo(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Telefono" className="form-label">
              Telefono
            </label>
            <input
              type="tel"
              className="form-control"
              id="Telefono"
              placeholder="Ingrese su numero telefonico"
              minLength={10}
              maxLength={10}
              required
              onChange={(e) => {
                setTelefono(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Comentario" className="form-label">
              Comentarios
            </label>
            <textarea
              className="form-control"
              id="Comentario"
              rows={3}
              defaultValue={''}
              required
              onChange={(e) => {
                setComentario(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="contenedor_boton">
          <button type="submit" className="btn btn-danger mb-3">
            Enviar
          </button>
        </div>
      </form>
      <footer className="footer">
        <p>Telefono de contacto: +52 993 16 94 442</p>
      </footer>
    </div>
  )
}
