import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onOpenDetails, activeCategory, searchQuery }) => {
  if (products.length === 0) {
    return (
      <div className="no-products-found">
        <div className="no-products-icon">🌸</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente ajustar sua busca ou selecionar outra categoria.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

