import React from 'react'
import './Nosotros.css'

export const Nosotros = () => {
  return (
    <div className="nosotros">
      <h1 className="titulos_nosotros">
        El Sazón Yokot´an del Guero de Saloya
      </h1>
      <p className="text">
        <b>
          Somos un restaurant familiar con Tradición, Cultura y El Sazón
          Tabasqueño
        </b>
      </p>
      <br />
      <h3 className="titulos_nosotros">
        Pescados • Mariscos • Carnes • Aves • Menú Infantil
      </h3>
      <p className="text">
        <b>Disfrute de platillos tradicionales de la gastronomía Tabasqueña</b>
      </p>
      <p className="text">
        <b>El sabor de mi pueblo...</b>
      </p>
      <section className="horario">
        <h3 className="titulos_nosotros">
          <b>Horario de Atención</b>
        </h3>
        <p className="text">
          <b>domingo a lunes • 8:00–18:00 Hrs</b>
        </p>
      </section>
    </div>
  )
}
