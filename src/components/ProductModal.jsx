import React from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const getImageUrl = (imgPath) => {
    if (!imgPath) return '';
    if (imgPath.startsWith('http')) return imgPath;
    const cleanImg = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
    const base = import.meta.env.BASE_URL || '/';
    return `${base}${cleanImg}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>
        <div className="modal-img-wrapper">
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            className="modal-img"
          />
        </div>
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-desc">{product.description}</p>
        <a
          href={`https://wa.me/554197364003?text=Olá! Gostaria de encomendar o produto: ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-buy-btn"
        >
          💬 Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
}
