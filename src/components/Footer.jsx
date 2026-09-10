import React from 'react';
import store from '../config/store';
import { createWhatsAppUrl } from '../utils/formatters';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">🎀 {store.name}</div>
          <p className="footer-subtitle">{store.subtitle}</p>
          <p className="footer-desc">Beleza, encanto e carinho em cada pedido.</p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#hero">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">Sobre Nós</a>
        </div>

        <div className="footer-social">
          <h4>Atendimento & Redes</h4>
          <p>💬 WhatsApp: {store.whatsappFormatted}</p>
          <a
            href={store.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            📸 Instagram: {store.instagramHandle}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {store.name}. Todos os direitos reservados.</p>
        <span className="footer-notice">Preços e disponibilidade sujeitos a alteração.</span>
      </div>
    </footer>
  );
};

export default Footer;

