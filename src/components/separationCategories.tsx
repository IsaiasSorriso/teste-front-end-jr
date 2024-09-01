import React from "react";
import "../styles/separationCategories.scss";

const Sepatarion2: React.FC = () => {
  return (
    <section className="separationCategories">
      <div className="container">
        <div className="line"></div>
        <div className="text">
          <h2 className="separation-title">Produtos relacionados</h2>
        </div>
        <div className="line"></div>
        <div className="categorie-eletronic">
          <ul className="list-eletronic">
            <li className="type">
              <a href=""><b>CELULAR</b></a>
            </li>
            <li className="type">
              <a href="">ACESSÓRIOS</a>
            </li>
            <li className="type">
              <a href="">TABLETS</a>
            </li>
            <li className="type">
              <a href="">NOTEBOOKS</a>
            </li>
            <li className="type">
              <a href="">TVS</a>
            </li>
            <li className="type">
              <a href="">VER TODOS</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sepatarion2;
