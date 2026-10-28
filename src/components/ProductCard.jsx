import React from 'react';

export default function ProductCard({ product, onSelect }) {
  // Usa o BASE_URL do Vite configurado no vite.config.js (ex: /dona-encanto/)
  const getImageUrl = (imgPath) => {
    if (!imgPath) return '';
    if (imgPath.startsWith('http')) return imgPath;
    const cleanImg = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
    const base = import.meta.env.BASE_URL || '/';
    return `${base}${cleanImg}`;
  };

  return (
    <div className="product-card-box">
      <div className="product-img-wrapper" onClick={() => onSelect(product)}>
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        <span className="product-badge">Destaque</span>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">
          {product.description.length > 70 
            ? `${product.description.substring(0, 70)}...` 
            : product.description}
        </p>
        <div className="product-card-actions">
          <button onClick={() => onSelect(product)} className="btn-action btn-details">
            👁️ Ver Detalhes
          </button>
          <a
            href={`https://wa.me/554197364003?text=Olá! Gostaria de encomendar o produto: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action btn-whatsapp"
          >
            💬 Comprar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
