import React from 'react';
import '../styles/productContainer.scss';
import img_fundo from '../imgs/fundo/produtos.png';

const ProductContainer: React.FC = () => {
  return (
    <section className="container">
      <div className="container__product">
        <div className="container__product-card">
          <img src={img_fundo} alt="Parceiro 2" className="product-image"></img>
          <div className="product-info">
            <h2 className="product-title">Produtos</h2>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
        <div className="container__product-card">
          <img src={img_fundo} alt="Parceiro 2" className="product-image"></img>
          <div className="product-info">
            <h2 className="product-title">Produtos</h2>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
