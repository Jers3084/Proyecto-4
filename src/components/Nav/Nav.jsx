import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

export const Nav = () => {

  
  return (
    <div>
      <nav className={styles.nav_style}>
        <div className={styles.container_logo}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" style={{ width: '75px' }}></img>
          </Link>
        </div>
       
          
        <ul id="list" className={styles.navbar_list}>
          <li className={styles.navbar_item}>
                <Link className={styles.navbar_font} to="/nosotros">
                  Nosotros
                </Link>
          </li>

          <li className={styles.navbar_item}>
                <Link className={styles.navbar_font} to="/contacto">
                  Contacto
                </Link>
          </li>

          <li className={styles.navbar_item}>
                <Link className={styles.navbar_font} to="/menu">
                  Menu
                </Link>
          </li>

          <li className={styles.navbar_item}>
                <Link className={styles.navbar_font} to="/reservar">
                  Reservar
                </Link>
          </li>

          <li className={styles.navbar_item}>
                <Link className={styles.navbar_font} to="/gestion">
                  Gestion
                </Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}
