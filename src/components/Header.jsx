import React, { useState, useEffect } from 'react';
import store from '../config/store';
import { createWhatsAppUrl } from '../utils/formatters';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Logo / Marca */}
        <div className="brand-logo-container" onClick={() => scrollToSection('hero')}>
          <div className="brand-bow-icon">🎀</div>
          <div className="brand-titles">
            <span className="brand-name">{store.name}</span>
            <span className="brand-subtitle">{store.subtitle}</span>
          </div>
        </div>

        {/* Pesquisa Desktop */}
        <div className="header-search-desktop">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Pesquisar batom, presilha, perfume..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* Menu Desktop */}
        <nav className="desktop-nav">
          <button onClick={() => scrollToSection('hero')}>Início</button>
          <button onClick={() => scrollToSection('catalogo')}>Produtos</button>
          <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-nav-btn"
          >
            <span>💬 WhatsApp</span>
          </a>
        </nav>

        {/* Botão Hamburger Mobile */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Pesquisa Mobile */}
      <div className="header-search-mobile">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
        )}
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <button onClick={() => scrollToSection('hero')}>Início</button>
          <button onClick={() => scrollToSection('catalogo')}>Produtos & Categorias</button>
          <button onClick={() => scrollToSection('sobre')}>Sobre a Loja</button>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-wa-btn"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

