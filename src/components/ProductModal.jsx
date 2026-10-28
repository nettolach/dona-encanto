import React from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const getImageUrl = (imgpath) => {
    if (!imgpath) return '';
    if (imgpath.startsWith('http')) return imgpath;
    const cleanPath = imgpath.startsWith('/') ? imgpath : `/${imgpath}`;
    return cleanPath.startsWith('/dona-encanto/') ? cleanPath : `/dona-encanto${cleanPath}`;
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
          className="btn-buy modal-buy-btn"
        >
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
}
