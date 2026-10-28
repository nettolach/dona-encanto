import React from 'react';

export default function ProductCard({ product, onSelect }) {
  // Garante que o caminho da imagem inclui a base do GitHub Pages (/dona-encanto/)
  const getImageUrl = (imgpath) => {
    if (!imgpath) return '';
    if (imgpath.startsWith('http')) return imgpath;
    const cleanPath = imgpath.startsWith('/') ? imgpath : `/${imgpath}`;
    // Se já tiver o prefixo do repo, retorna direto, senão adiciona a base
    return cleanPath.startsWith('/dona-encanto/') ? cleanPath : `/dona-encanto${cleanPath}`;
  };

  return (
    <div className="product-card">
      <div className="product-img-container" onClick={() => onSelect(product)}>
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="product-img"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">
          {product.description.length > 80 
            ? `${product.description.substring(0, 80)}...` 
            : product.description}
        </p>
        <div className="product-buttons">
          <button onClick={() => onSelect(product)} className="btn-view">
            👁️ Ver Produto
          </button>
          <a
            href={`https://wa.me/554197364003?text=Olá! Gostaria de encomendar o produto: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buy"
          >
            Comprar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
