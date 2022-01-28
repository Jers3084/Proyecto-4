import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import fondo from "./img/imagen.png";
import { Contacto } from "./components/Contacto/Contacto";
import { Gestion } from "./components/Gestion/Gestion";
import { Menu } from "./components/Menu/Menu";
import { Nav } from "./components/Nav/Nav";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Reservar } from "./components/Reservar/Reservar";

function App() {
  return (
    <div className="App">
      <img src={fondo} className="imagen"></img>
      
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
  );
}

export default App;
