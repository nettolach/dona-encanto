import { useMemo, useState } from 'react';
import { CATEGORIES, PRODUCTS } from './data/products.js';
import { matches } from './utils/search.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductModal from './components/ProductModal.jsx';
import { Kits, About, InstagramSection, ContactSection } from './components/Sections.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const results = useMemo(
    () =>
      PRODUCTS.filter((p) => {
        const label = CATEGORIES.find((c) => c.id === p.category)?.label;
        return (category === 'all' || p.category === category) && matches(p, query, label);
      }),
    [category, query]
  );

  const clear = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="produtos" className="section">
          <div className="container">
            <h2 className="center">Nossos produtos</h2>
            <div className="search">
              <label htmlFor="busca" className="sr-only">Buscar produtos</label>
              <input
                id="busca"
                type="search"
                placeholder="Buscar produto, marca ou categoria..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button className="btn btn-soft small" onClick={() => setQuery('')} aria-label="Limpar busca">
                  Limpar
                </button>
              )}
            </div>
            <div className="filters" role="group" aria-label="Filtrar por categoria">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`chip ${category === c.id ? 'active' : ''}`}
                  aria-pressed={category === c.id}
                  onClick={() => setCategory(c.id)}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>
            <p className="count" aria-live="polite">
              {results.length} {results.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
            {results.length === 0 ? (
              <div className="empty">
                <p>Nenhum produto encontrado 🌸</p>
                <button className="btn btn-primary" onClick={clear}>Ver todos os produtos</button>
              </div>
            ) : (
              <div className="grid">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} onOpen={setSelected} />
                ))}
              </div>
            )}
          </div>
        </section>
        <Kits onShowKits={() => { setCategory('all'); setQuery('Kit Encanto'); }} />
        <About />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
