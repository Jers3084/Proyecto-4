import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import fondo from "./img/imagen.png";
import menu1 from "./img/Menu_pag1.jpg";
import menu2 from "./img/Menu_pag2.jpg";
import menu3 from "./img/Menu_pag3.jpg";
import menu4 from "./img/Menu_pag4.jpg";
import menu5 from "./img/Menu_pag5.jpg";
import menu6 from "./img/Menu_pag6.jpg";
import menu7 from "./img/Menu_pag7.jpg";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <img src={fondo} className={styles.imagen} alt="fondo"></img>
      <Link id="arriba" to=""></Link>
      <h1 className={styles.titulo_menu}>Menu</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu1} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu2} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu3} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu4} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu5} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu6} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={menu7} className={styles.cardimgtop} alt="..." />
          </div>
        </div>
        <div className={styles.col}>
          <div className="">
            <br />
            <br />
            <Link to={"arriba"}>Arriba</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
