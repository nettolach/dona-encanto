import React, { useState } from 'react';

export default function Header({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-area">
          <span className="logo-icon">🎀</span>
          <div>
            <h1 className="logo-title">Dona Encanto</h1>
            <p className="logo-sub">MAQUIAGEM & ACESSÓRIOS</p>
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#catalogo" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
          <a href="#kits" onClick={() => setMenuOpen(false)}>Kits</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      </div>

      <div className="search-bar-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Pesquisar produto, marca ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </header>
  );
}
