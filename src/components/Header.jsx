import { useState } from 'react';

const LINKS = [
  ['#inicio', 'Início'],
  ['#produtos', 'Produtos'],
  ['#kits', 'Kits'],
  ['#sobre', 'Sobre'],
  ['#contato', 'Contato'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="Dona Encanto - início">
          <span className="brand-name">Dona Encanto 🎀</span>
          <span className="brand-sub">MAQUIAGEM • SKINCARE • ACESSÓRIOS</span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav id="nav" className={`nav ${open ? 'open' : ''}`} aria-label="Principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#produtos" className="nav-search" onClick={() => setOpen(false)}>
            🔍 Buscar
          </a>
        </nav>
      </div>
    </header>
  );
}
