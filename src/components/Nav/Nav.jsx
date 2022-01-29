import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

export const Nav = () => {

  
  return (
    <div>
      <nav className="nav-style">
        <div className="container-logo">
          <Link to="/">
            <img className='logo' src={logo} alt="Logo" style={{ width: '75px' }}></img>
          </Link>
        </div>
       
          
        <ul id="list" className="navbar-list">
          <li className="navbar-item">
                <Link className="navbar-font" to="/nosotros">
                  Nosotros
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/contacto">
                  Contacto
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/menu">
                  Menu
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/reservar">
                  Reservar
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/gestion">
                  Gestion
                </Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}
