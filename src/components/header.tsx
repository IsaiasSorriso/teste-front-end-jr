import React, { useState } from 'react';
import '../styles/header.scss';

import iconeFavorit from '../imgs/header/Heart.png';
import iconeUser from '../imgs/header/UserCircle.png';
import iconeVector from '../imgs/header/Vector.png';
import iconeVerfi from '../imgs/header/ShieldCheck.png';
import iconeFrete from '../imgs/header/Truck.png';
import iconeParcela from '../imgs/header/CreditCard.png';
import iconeLupa from '../imgs/header/MagnifyingGlass.png';
import iconeCarrinho from '../imgs/header/ShoppingCart.png';
import logo from "../imgs/logo-vtex/logo-vtex.png";
import coroa from '../imgs/header/CrownSimple.png';

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeVerfi} alt="Compra 100% segura" />
              <p>Compra <b>100% segura</b></p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeFrete} alt="Frete grátis acima de R$ 200" />
              <p><b>Frete grátis</b> acima de R$ 200</p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeParcela} alt="Parcele suas compras" />
              <p><b>Parcele</b> suas compras</p>
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__search">
        <div className="header__logo">
          <img src={logo} alt="VTEX Logo" />
        </div>
        <div className="header__search-search">
          <input
            type="search"
            className="header__search-input"
            placeholder="O que você está buscando?"
            aria-label="Pesquisar"
          />
          <button className="header__search-button" aria-label="Buscar">
            <img src={iconeLupa} alt="Buscar" />
          </button>
        </div>
        <div className="header__icons">
          <a href="#" aria-label="Pedidos" className="header__icon-link">
            <img src={iconeCarrinho} alt="Pedidos" />
          </a>
          <a href="#" aria-label="Favoritos" className="header__icon-link">
            <img src={iconeFavorit} alt="Favoritos" />
          </a>
          <a href="#" aria-label="Perfil" className="header__icon-link">
            <img src={iconeUser} alt="Perfil" />
          </a>
          <a href="#" aria-label="Carrinho" className="header__icon-link">
            <img src={iconeVector} alt="Carrinho" />
          </a>
        </div>
      </div>
      <div className="header__bottom">
        <nav className="header__bottom-menu">
          <ul className="header__bottom-menu-list">
            <li className={`header__bottom-menu-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleMenuItemClick(0)}>
              Todas Categorias
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleMenuItemClick(1)}>
              Supermercado
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleMenuItemClick(2)}>
              Livros
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleMenuItemClick(3)}>
              Moda
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleMenuItemClick(4)}>
              Lançamentos
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => handleMenuItemClick(5)}>
              Ofertas do Dia
            </li>
            <li className={`header__bottom-menu-item ${activeIndex === 6 ? 'active' : ''}`} onClick={() => handleMenuItemClick(6)}>
              <img src={coroa} alt="Assinatura" />
              Assinatura
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
