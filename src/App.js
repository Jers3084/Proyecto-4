import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { Contacto } from './components/Contacto'
import { Gestion } from './components/Gestion'
import { Menu } from './components/Menu'
import { Nav } from './components/Nav'
import { Nosotros } from './components/Nosotros'
import { Reservar } from './components/Reservar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/reservar">
            <Reservar />
          </Route>
          <Route path="/gestion">
            <Gestion />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
