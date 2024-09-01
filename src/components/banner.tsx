import React from 'react'
import '../styles/banner.scss'

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__promotion">
        <h1 className="textPromo">Venha conhecer nossas promoções</h1>
        <p className="textDesconto">50% Off nos produtos</p>
        <a href="#" className="btn-promo">Ver produto</a>
      </div>
    </section>
  );
};

export default Banner;
