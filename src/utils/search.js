export const normalize = (s = '') =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export const matches = (product, query, categoryLabel) => {
  const q = normalize(query);
  if (!q) return true;
  const hay = normalize(
    [product.name, product.brand, product.description, categoryLabel].filter(Boolean).join(' ')
  );
  return q.split(/\s+/).every((word) => hay.includes(word));
};
