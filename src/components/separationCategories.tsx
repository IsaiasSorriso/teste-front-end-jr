import React, { useState } from 'react';
import "../styles/separationCategories.scss";

const Sepatarion2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

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
            <li 
              className={`type ${activeIndex === 0 ? 'active' : ''}`} 
              onClick={() => handleClick(0)}
            >
              <a href="#">CELULAR</a>
            </li>
            <li 
              className={`type ${activeIndex === 1 ? 'active' : ''}`} 
              onClick={() => handleClick(1)}
            >
              <a href="#">ACESSÓRIOS</a>
            </li>
            <li 
              className={`type ${activeIndex === 2 ? 'active' : ''}`} 
              onClick={() => handleClick(2)}
            >
              <a href="#">TABLETS</a>
            </li>
            <li 
              className={`type ${activeIndex === 3 ? 'active' : ''}`} 
              onClick={() => handleClick(3)}
            >
              <a href="#">NOTEBOOKS</a>
            </li>
            <li 
              className={`type ${activeIndex === 4 ? 'active' : ''}`} 
              onClick={() => handleClick(4)}
            >
              <a href="#">TVS</a>
            </li>
            <li 
              className={`type ${activeIndex === 5 ? 'active' : ''}`} 
              onClick={() => handleClick(5)}
            >
              <a href="#">VER TODOS</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sepatarion2;
