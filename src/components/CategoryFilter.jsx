import React from 'react';
import { categories } from '../data/categories';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-name">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

