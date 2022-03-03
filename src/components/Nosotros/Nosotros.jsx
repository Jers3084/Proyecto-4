import React from 'react'
import styles from './Nosotros.module.css'

export const Nosotros = () => {
  return (
    <div>
      <div className={styles.nosotros}>
        <p className={styles.titulos_nosotros}>
          <b>El Sazón Yokot´an del Guero de Saloya</b>
        </p>
        <p className={styles.text}>
          <b>
            Somos un restaurant familiar con Tradición, Cultura y El Sazón
            Tabasqueño
          </b>
        </p>
        <br />
        <p className={styles.titulos_nosotros}>
          <b>Pescados • Mariscos • Carnes • Aves • Menú Infantil</b>
        </p>
        <p className={styles.text}>
          <b>
            Disfrute de platillos tradicionales de la gastronomía Tabasqueña
          </b>
        </p>
        <p className={styles.text}>
          <b>El sabor de mi pueblo...</b>
        </p>
        <section className={styles.horario}>
          <p className={styles.titulos_nosotros}>
            <b>Horario de Atención</b>
          </p>
          <p className={styles.text}>
            <b>domingo a lunes • 8:00–18:00 Hrs</b>
          </p>
          <br/>
          <p className={styles.titulos_nosotros}>
            <b>Dirección y Ubicación:</b>
          </p>
          <p className={styles.text}>
            <b>Carretera Villahermosa - Nacajuca,Tab Km 6.5</b>
          </p>
        </section>
      </div>
      <section className={styles.ubicacion_map}>
        <iframe
          title="Mi Ubicacion"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.0847159168025!2d-92.93868093845296!3d18.06967601650082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee782a59db8c71%3A0xac7861448a9f6ad4!2sSaz%C3%B3n%20Yokot'an%20del%20G%C3%BCero%20de%20Saloya!5e0!3m2!1ses-419!2smx!4v1642987807131!5m2!1ses-419!2smx"
          width={1400}
          height={450}
          style={{ border: '3px' }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  )
}
