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
  const rows = [
    ['Marca', product.brand],
    ['Categoria', cat ? `${cat.icon} ${cat.label}` : null],
    ['Conteúdo', product.size],
    ['Composição', product.composition],
  ].filter(([, v]) => v);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        data-cat={product.category}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>
        <div className="modal-img"><ProductImage product={product} eager /></div>
        <div className="modal-body">
          <span className="tag">{cat?.icon} {cat?.label}</span>
          <h2 id="modal-title">{product.name}</h2>

          <h4>Descrição</h4>
          <p>{product.description}</p>

          {product.purpose && (<><h4>Para que serve</h4><p>{product.purpose}</p></>)}

          {product.items && (
            <>
              <h4>O que vem no kit</h4>
              <ul className="kit-items">
                {product.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </>
          )}

          {rows.length > 0 && (
            <dl className="info-list">
              {rows.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          )}

          <p className="price">{product.price ?? 'Consulte o preço'}</p>
          <div className="modal-actions">
            <a className="btn btn-primary" href={productLink(product.name)} target="_blank" rel="noopener noreferrer">
              Pedir pelo WhatsApp
            </a>
            <button type="button" className="btn btn-outline" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
