import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import menu1 from '../img/Menu_pag1.jpg'
import menu2 from '../img/Menu_pag2.jpg'
import menu3 from '../img/Menu_pag3.jpg'
import menu4 from '../img/Menu_pag4.jpg'
import menu5 from '../img/Menu_pag5.jpg'
import menu6 from '../img/Menu_pag6.jpg'
import menu7 from '../img/Menu_pag7.jpg'

export const Menu = () => {
  return (
    <div className="menu">
      <Link id="arriba" to=''></Link>
      <h1 className='titulo_menu'>Menu</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={menu1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={menu2} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={menu3} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={menu4} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={menu5} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={menu6} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={menu7} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="">
            <br/>
            <br/>
            <Link to={'arriba'}>Arriba</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
