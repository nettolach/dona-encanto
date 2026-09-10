import React, { useState } from 'react';
import { formatPrice, createWhatsAppUrl } from '../utils/formatters';

const ProductCard = ({ product, onOpenDetails }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback visual delicado para caso a foto não exista na pasta
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="100%" height="100%" fill="%23f9ebf0"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="28" fill="%238a3b58">🎀</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%238a3b58">Dona Encanto</text></svg>`;

  const primaryImage = product.images && product.images.length > 0 && !imgError
    ? product.images[0]
    : fallbackSvg;

  return (
    <div className="product-card">
      {product.featured && <span className="featured-badge">Destaque</span>}
      
      <div className="card-image-wrapper" onClick={() => onOpenDetails(product)}>
        <img
          src={primaryImage}
          alt={product.name}
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="card-overlay">
          <span>🔍 Ver Detalhes</span>
        </div>
      </div>

      <div className="card-body">
        <span className="card-category">{product.category.toUpperCase()}</span>
        <h3 className="card-title" onClick={() => onOpenDetails(product)}>
          {product.name}
        </h3>
        <p className="card-short-desc">{product.shortDescription}</p>
        
        <div className="card-price">{formatPrice(product.price)}</div>

        <div className="card-actions">
          <button className="btn-details" onClick={() => onOpenDetails(product)}>
            Detalhes
          </button>
          <a
            href={createWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-order-wa"
          >
            💬 Pedir
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

