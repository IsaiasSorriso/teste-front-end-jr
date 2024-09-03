import React from "react";
import "../styles/marking.scss";
import logo from "../imgs/logo-vtex/logo-vtex.png";
import imgNext from '../imgs/fundo/Vector.png';


const Markings: React.FC = () => {
  return (
    <section className="markinks">
      <div className="markinks__container">
        <h1>Navegue por marcas</h1>
        <ul className="markinks__container-logoMarcas">
          <li className="markink">
            <img src={logo} alt="" />
          </li>
          <li className="markink">
            <img src={logo} alt="" />
          </li>
          <li className="markink">
            <img src={logo} alt="" />
          </li>
          <li className="markink">
            <img src={logo} alt="" />
          </li>
          <li className="markink">
            <img src={logo} alt="" />
          </li>
          <li className="next">
            <img src={imgNext} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Markings;