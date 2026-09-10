import React from 'react';
import store from '../config/store';
import { createWhatsAppUrl } from '../utils/formatters';

const Hero = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalogo');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-sparkle">✨</span> Beleza & Encanto em Cada Detalhe
        </div>
        
        <h1 className="hero-title">{store.name}</h1>
        <p className="hero-subtitle">{store.subtitle}</p>
        <p className="hero-tagline">"{store.tagline}"</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToCatalog}>
            🛍️ Ver Produtos
          </button>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            💬 Fazer Pedido Direto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

