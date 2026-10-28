import { useEffect, useRef } from 'react';
import { CATEGORIES } from '../data/products.js';
import { productLink } from '../utils/whatsapp.js';
import { ProductImage } from './ProductCard.jsx';

export default function ProductModal({ product, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll('.modal button, .modal a');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [onClose]);

  const cat = CATEGORIES.find((c) => c.id === product.category);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>
        <div className="modal-img"><ProductImage product={product} eager /></div>
        <div className="modal-body">
          <span className="tag">{cat?.icon} {cat?.label}</span>
          <h2 id="modal-title">{product.name}</h2>
          {product.brand && <p className="brand-line">{product.brand}</p>}
          <p>{product.description}</p>
          <p className="price">{product.price ?? 'Consulte o preço'}</p>
          <a className="btn btn-primary" href={productLink(product.name)} target="_blank" rel="noopener noreferrer">
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
