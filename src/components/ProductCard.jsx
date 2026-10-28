import { useState } from 'react';
import { CATEGORIES } from '../data/products.js';
import { productLink } from '../utils/whatsapp.js';

export function ProductImage({ product, eager = false }) {
  const [failed, setFailed] = useState(false);
  const cat = CATEGORIES.find((c) => c.id === product.category);
  if (failed) {
    return (
      <div className="img-placeholder" role="img" aria-label={`Imagem de ${product.name} indisponível`}>
        <span>{cat?.icon}</span>
        <small>Foto em breve</small>
      </div>
    );
  }
  return (
    <img
      src={`${import.meta.env.BASE_URL}${product.image}`}
      alt={product.name}
      width="400"
      height="400"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductCard({ product, onOpen }) {
  const cat = CATEGORIES.find((c) => c.id === product.category);
  return (
    <article className="card">
      <div className="card-img">
        <ProductImage product={product} />
      </div>
      <div className="card-body">
        <span className="tag">{cat?.icon} {cat?.label}</span>
        <h3>{product.name}</h3>
        {product.brand && <p className="brand-line">{product.brand}</p>}
        <p className="desc">{product.description}</p>
        <p className="price">{product.price ?? 'Consulte o preço'}</p>
        <div className="card-actions">
          <button className="btn btn-soft" onClick={() => onOpen(product)}>Ver produto</button>
          <a className="btn btn-primary" href={productLink(product.name)} target="_blank" rel="noopener noreferrer">
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
