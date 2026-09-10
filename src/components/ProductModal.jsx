import React, { useState } from 'react';
import { formatPrice, createWhatsAppUrl } from '../utils/formatters';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="%23f9ebf0"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%238a3b58">🎀</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%238a3b58">Dona Encanto</text></svg>`;

  const imagesList = product.images && product.images.length > 0
    ? product.images
    : [fallbackSvg];

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  // Suporte a gestos Touch/Swipe para celular
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 40) {
      handleNext(); // Deslizou para esquerda -> próxima foto
    } else if (diffX < -40) {
      handlePrev(); // Deslizou para direita -> foto anterior
    }
    setTouchStartX(null);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="modal-body-layout">
          
          {/* Seção da Galeria */}
          <div className="modal-gallery-section">
            <div
              className="gallery-main-view"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={imagesList[currentImgIndex]}
                alt={`${product.name} - Foto${currentImgIndex + 1}`}
                onError={(e) => { e.target.src = fallbackSvg; }}
              />

              {imagesList.length > 1 && (
                <>
                  <button className="gallery-nav-btn prev" onClick={handlePrev}>‹</button>
                  <button className="gallery-nav-btn next" onClick={handleNext}>›</button>
                  <span className="gallery-counter">
                    {currentImgIndex + 1} / {imagesList.length}
                  </span>
                </>
              )}
            </div>

            {/* Miniaturas */}
            {imagesList.length > 1 && (
              <div className="gallery-thumbnails">
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${idx === currentImgIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImgIndex(idx)}
                  >
                    <img
                      src={imgUrl}
                      alt="Miniatura"
                      onError={(e) => { e.target.src = fallbackSvg; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Seção de Detalhes */}
          <div className="modal-info-section">
            <span className="modal-category">{product.category.toUpperCase()}</span>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price">{formatPrice(product.price)}</div>

            <div className="modal-description">
              <h4>Descrição</h4>
              <p>{product.description}</p>
            </div>

            {product.additionalInfo && (
              <div className="modal-additional-info">
                <h4>Informações Adicionais</h4>
                <p>{product.additionalInfo}</p>
              </div>
            )}

            <div className="modal-stock-status">
              <span className="status-dot"></span> Disponível para pedido imediato
            </div>

            <a
              href={createWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-whatsapp-cta"
            >
              💬 Fazer Pedido no WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;

