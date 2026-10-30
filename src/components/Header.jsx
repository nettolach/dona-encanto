import { useState } from 'react';

const LINKS = [
  ['#inicio', 'Início'],
  ['#produtos', 'Produtos'],
  ['#kits', 'Kits'],
  ['#compras', 'Como comprar'],
  ['#sobre', 'Sobre'],
  ['#contato', 'Contato'],
];

function Bow() {
  return (
    <svg className="logo-bow" viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5fb0" />
          <stop offset="1" stopColor="#d6126f" />
        </linearGradient>
      </defs>
      <path d="M32 32 L8 16 Q2 32 8 48 Z" fill="url(#g)" />
      <path d="M32 32 L56 16 Q62 32 56 48 Z" fill="url(#g)" />
      <circle cx="32" cy="32" r="8" fill="#9d174d" />
      <path d="M28 40 L22 58 M36 40 L42 58" stroke="#d6126f" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="Dona Encanto - início">
          <Bow />
          <span className="brand-text">
            <span className="brand-name">Dona Encanto</span>
            <span className="brand-sub">MAQUIAGEM • SKINCARE • ACESSÓRIOS</span>
          </span>
        </a>
        <button
          type="button"
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
