import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { dbConfig } from "../config/firebase";
import "./Gestion.css";

export const Gestion = () => {
  const [listadoReservas, setListadoReservas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numpersonas, setNumpersonas] = useState(0);
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const DB = collection(dbConfig, "proy4-reservas");
      const Reservaciones = await getDocs(DB);
      const listadoFinal = Reservaciones.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setListadoReservas(listadoFinal);
    } catch (e) {
      console.log("hubo un error!!!");
      console.log(e);
    }
  };

  const editarReserva = (item) => {
    setNombre(item.nombre);
    setCorreo(item.correo);
    setTelefono(item.telefono);
    setNumpersonas(item.numpersonas);
    setFecha(item.fecha);
    setId(item.id);
  };

  const actualizarEnDB = async () => {
    try {
      const datos = {
        nombre,
        correo,
        telefono,
        numpersonas,
        fecha,
      };

      const config = doc(dbConfig, "proy4-reservas", id);
      await updateDoc(config, datos);
      obtenerDatos();
      setNombre("");
      setCorreo("");
      setTelefono("");
      setNumpersonas(0);
      setFecha("");
    } catch (e) {
      console.log("hubo un error!!!");
      console.log(e);
    }
  };

  const eliminarReserva = async (item) => {
    try {
      const ref = doc(dbConfig, "proy4-reservas", item.id);
      await deleteDoc(ref);

      obtenerDatos();
    } catch (e) {
      console.log("hubo un error!!!");
      console.log(e);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    actualizarEnDB();
  };

  const handleFormNombre = (texto) => {
    setNombre(texto);
  };

  const handleFormCorreo = (texto) => {
    setCorreo(texto);
  };

  const handleFormTelefono = (texto) => {
    setTelefono(texto);
  };

  const handleFormNPersonas = (numero) => {
    setNumpersonas(numero);
  };

  const handleFormFecha = (texto) => {
    setFecha(texto);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Listado de Reservaciones</h1>
          <ul className="list-group">
            {listadoReservas.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center">
                {item.nombre}
                <div className="botones">
                  <button
                    className="btn btn-warning"
                    onClick={() => editarReserva(item)}>
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarReserva(item)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-6">
          <h1>"Editar Reservación"</h1>
          <form onSubmit={submit} className="editarR">
            <label className="form-label">
              <b>Nombre</b>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleFormNombre(e.target.value)}
              value={nombre}
            />
            <label className="form-label">
              <b>Correo</b>
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => handleFormCorreo(e.target.value)}
              value={correo}
            />
            <label className="form-label">
              <b>Telefono</b>
            </label>
            <input
              type="tel"
              className="form-control"
              onChange={(e) => handleFormTelefono(e.target.value)}
              value={telefono}
            />
            <label className="form-label">
              <b>Num de Personas</b>
            </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => handleFormNPersonas(e.target.value)}
              value={numpersonas}
            />
            <label className="form-label">
              <b>Fecha</b>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleFormFecha(e.target.value)}
              value={fecha}
            />
            <button type="submit" className="btn btn-dark">
              Actualiza
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
