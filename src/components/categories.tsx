import React, { useState } from 'react';
import '../styles/categories.scss';

import iconeMonitor from '../imgs/categorias/monitorar-tablet-e-smartohone.png';
import iconeMercado from '../imgs/categorias/supermercados.png';
import iconeFerramentes from '../imgs/categorias/ferramentas.png';
import iconeModa from '../imgs/categorias/moda.png';
import iconeSaude from '../imgs/categorias/cuidados-de-saude.png';
import iconeCorrida from '../imgs/categorias/corrida.png';
import iconeBebida from '../imgs/categorias/whiskey.png';

const Categories: React.FC = () => {
  // Estado para armazenar o item ativo
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Função para lidar com o clique e definir o item ativo
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  // Lista de categorias para renderização
  const categories = [
    { icon: iconeMonitor, label: 'Tecnologia' },
    { icon: iconeMercado, label: 'Supermercado' },
    { icon: iconeBebida, label: 'Bebidas' },
    { icon: iconeFerramentes, label: 'Ferramentas' },
    { icon: iconeSaude, label: 'Saúde' },
    { icon: iconeCorrida, label: 'Esportes e Fitness' },
    { icon: iconeModa, label: 'Moda' },
  ];

  return (
    <section className="categories">
      <ul className="categories__list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <div className="icon-container">
              <img
                src={category.icon}
                alt={category.label}
                className={activeItem === index ? 'active-img' : ''}
              />
            </div>
            <a href="#">
              <span className="category-label">{category.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
