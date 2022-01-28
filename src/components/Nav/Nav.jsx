import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png';

export const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ width: '80px' }}></img>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  navbar-font" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navbar-font" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navbar-font" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navbar-font" to="/reservar">
                  Reservar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navbar-font" to="/gestion">
                  Gestion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
