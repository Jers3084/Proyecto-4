import React from 'react'
import './Contacto.css'

export const Contacto = () => {
  return (
    <div>
      <form>
        <h1 className='titulo_contacto'>Contacto</h1>
        <div className="contenedor_contacto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Telefono
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su numero telefonico"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Comentarios
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={''}
            />
          </div>
        </div>
          <div className='contenedor_boton' >
            <button type="submit" className="btn btn-primary mb-3">
              Enviar
            </button>
          </div>
      </form>
    </div>
  )
}
