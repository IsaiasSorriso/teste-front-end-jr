import React from 'react';
import '../styles/separationPattern.scss';

const Sepatarion: React.FC = () => {
    return (
        <section className="separation">
            <div className="container">
                <div className="line"></div>
                <div className="text">
                    <h2 className="related-products-title">Produtos relacionados</h2>
                    <a href="#" className="view-all">Ver todos</a>
                </div>
                <div className="line"></div>
            </div>
        </section>
    )
}

export default Sepatarion;