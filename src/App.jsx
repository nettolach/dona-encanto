import React, { useState } from 'react';
import { products } from './data/products';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const phoneStore = "554197364003";
  const instaUrl = "https://www.instagram.com/dona_encant0?utm_source=qr&stkn=djJlM2I5dTNoa3p5";
  const devPhone = "5541991271247";

  const categories = [
    { id: 'all', label: '✨ Todos' },
    { id: 'labiais', label: '💄 Labiais' },
    { id: 'rosto', label: '✨ Rosto' },
    { id: 'olhos', label: '👁️ Olhos' },
    { id: 'skincare', label: '🌿 Skincare' },
    { id: 'acessorios', label: '🎀 Acessórios' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToProducts = () => {
    const element = document.getElementById('catalogo-produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.pageBackground}>
      {/* Partículas animadas de fundo */}
      <div style={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              width: `${(i % 3) * 4 + 4}px`,
              height: `${(i % 3) * 4 + 4}px`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header style={styles.navHeader}>
        <div style={styles.navMainRow}>
          <div style={styles.brandGroup}>
            <span style={styles.bowIcon}>🎀</span>
            <div>
              <h1 style={styles.brandTitle}>Dona Encanto</h1>
              <span style={styles.brandSubtitle}>MAQUIAGEM & ACESSÓRIOS</span>
            </div>
          </div>
          <button style={styles.menuToggleBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div style={styles.searchWrapper}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {menuOpen && (
          <nav style={styles.mobileNavMenu}>
            <a href="#inicio" style={styles.navLink} onClick={() => setMenuOpen(false)}>Início</a>
            <a href="#catalogo-produtos" style={styles.navLink} onClick={() => setMenuOpen(false)}>Produtos & Categorias</a>
            <a href="#sobre" style={styles.navLink} onClick={() => setMenuOpen(false)}>Sobre a Loja</a>
            <a
              href={`https://wa.me/${phoneStore}?text=Ol%C3%A1!%20Gostaria%20de%20atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.navBtnWhatsapp}
            >
              💬 Falar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" style={styles.heroSection}>
        <div style={styles.heroBadge}>✨ Beleza & Encanto em Cada Detalhe</div>
        <h2 style={styles.heroTitle}>Dona Encanto</h2>
        <p style={styles.heroCategoryTag}>MAQUIAGEM & ACESSÓRIOS</p>
        <p style={styles.heroSlogan}>"Seu encanto começa nos detalhes."</p>

        <div style={styles.heroButtonsRow}>
          <button onClick={scrollToProducts} style={styles.primaryHeroBtn}>
            🛍️ Ver Produtos
          </button>
          <a
            href={`https://wa.me/${phoneStore}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryHeroBtn}
          >
            💬 Fazer Pedido Direto
          </a>
        </div>
      </section>

      {/* Catálogo */}
      <main id="catalogo-produtos" style={styles.mainContainer}>
        <div style={styles.categoriesScroll}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                ...styles.categoryPill,
                ...(selectedCategory === cat.id ? styles.categoryPillActive : {}),
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <div style={styles.cardImgContainer}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  style={styles.cardImg}
                  onError={(e) => {
                    if (!e.target.dataset.tried) {
                      e.target.dataset.tried = 'true';
                      e.target.src = product.images[0].replace('/', '');
                    }
                  }}
                />
              </div>

              <div style={styles.cardBody}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDesc}>
                  {product.description.length > 80 
                    ? `${product.description.substring(0, 80)}...` 
                    : product.description}
                </p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  style={styles.viewProductBtn}
                >
                  👁️ Ver Produto
                </button>

                <a
                  href={`https://wa.me/${phoneStore}?text=Olá! Gostaria de encomendar o produto: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.buyBtn}
                >
                  Comprar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={styles.emptyState}>
            <p>Nenhum produto encontrado na busca.</p>
          </div>
        )}
      </main>

      {/* Modal de Visualização Completa do Produto */}
      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeModalBtn} onClick={() => setSelectedProduct(null)}>✕</button>
            <div style={styles.modalImageWrapper}>
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.name}
                style={styles.modalImage}
              />
            </div>
            <h2 style={styles.modalTitle}>{selectedProduct.name}</h2>
            <p style={styles.modalFullDesc}>{selectedProduct.description}</p>
            <a
              href={`https://wa.me/${phoneStore}?text=Olá! Gostaria de encomendar o produto: ${encodeURIComponent(selectedProduct.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.buyBtn}
            >
              Comprar no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Sobre */}
      <section id="sobre" style={styles.aboutSection}>
        <div style={styles.aboutCard}>
          <span style={styles.aboutBow}>🎀</span>
          <h3 style={styles.aboutTitle}>Sobre a Dona Encanto</h3>
          <p style={styles.aboutText}>
            Na Dona Encanto, cada detalhe é escolhido para tornar seus momentos de beleza ainda mais especiais.
            Encontre maquiagens, acessórios e produtos selecionados com carinho para realçar seu encanto natural e único.
          </p>
          <p style={styles.aboutHighlight}>
            Entregamos charme, qualidade e atendimento atencioso diretamente para você.
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section style={styles.instaSection}>
        <div style={styles.instaCard}>
          <span style={{ fontSize: '1.8rem' }}>📸</span>
          <h3 style={styles.instaTitle}>Siga nosso Instagram</h3>
          <p style={styles.instaText}>
            Acompanhe novidades, tutoriais de make e bastidores!
          </p>
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.instaBtn}
          >
            @dona_encant0
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <div style={styles.footerHeader}>
          <span style={{ fontSize: '1.8rem' }}>🎀</span>
          <h4 style={styles.footerBrand}>Dona Encanto</h4>
          <p style={styles.footerTagline}>MAQUIAGEM & ACESSÓRIOS</p>
          <p style={styles.footerQuote}>Beleza, encanto e carinho em cada pedido.</p>
        </div>

        <div style={styles.footerBlock}>
          <h5 style={styles.footerHeading}>Navegação</h5>
          <ul style={styles.footerList}>
            <li><a href="#inicio" style={styles.footerLink}>Início</a></li>
            <li><a href="#catalogo-produtos" style={styles.footerLink}>Catálogo</a></li>
            <li><a href="#sobre" style={styles.footerLink}>Sobre Nós</a></li>
          </ul>
        </div>

        <div style={styles.footerBlock}>
          <h5 style={styles.footerHeading}>Atendimento & Redes</h5>
          <p style={styles.footerContactText}>💬 WhatsApp: +55 41 9736-4003</p>
          <p style={styles.footerContactText}>📸 Instagram: @dona_encant0</p>
        </div>

        <div style={styles.copyright}>
          <p>© 2026 Dona Encanto. Todos os direitos reservados.</p>
          <p style={{ marginTop: '0.5rem', color: '#ffb3da' }}>
            Desenvolvido por{' '}
            <a
              href={`https://wa.me/${devPhone}?text=Olá! Vim pelo site da Dona Encanto.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ffff', fontWeight: 'bold', textDecoration: 'none' }}
            >
              Netto (+55 41 99127-1247)
            </a>
          </p>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={`https://wa.me/${phoneStore}?text=Olá! Vim pelo site da Dona Encanto.`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.floatingWhatsapp}
        title="Falar no WhatsApp"
      >
       📞
      </a>
    </div>
  );
}

const styles = {
  pageBackground: {
    backgroundColor: '#0f0c1b',
    backgroundImage: 'linear-gradient(135deg, #2b0826 0%, #100a26 40%, #081d36 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    paddingBottom: '2rem',
    position: 'relative',
    overflowX: 'hidden',
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 1,
  },
  particle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 182, 217, 0.4)',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
  },
  navHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(15, 12, 27, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 105, 180, 0.2)',
    padding: '0.8rem 1rem',
  },
  navMainRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  bowIcon: {
    fontSize: '1.8rem',
  },
  brandTitle: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ff69b4',
  },
  brandSubtitle: {
    fontSize: '0.62rem',
    color: '#8ac6d1',
    letterSpacing: '1.5px',
    display: 'block',
  },
  menuToggleBtn: {
    background: 'none',
    border: 'none',
    color: '#ff69b4',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  searchWrapper: {
    position: 'relative',
    maxWidth: '1100px',
    margin: '0.6rem auto 0 auto',
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.9rem',
    color: '#ff69b4',
  },
  searchInput: {
    width: '100%',
    padding: '0.65rem 0.8rem 0.65rem 2.2rem',
    borderRadius: '20px',
    border: '1px solid #3b224c',
    backgroundColor: '#17132a',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  mobileNavMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginTop: '0.8rem',
    padding: '1rem',
    backgroundColor: '#18142d',
    borderRadius: '12px',
    border: '1px solid #3d1c2f',
  },
  navLink: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  navBtnWhatsapp: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#25D366',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '0.6rem',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
  heroSection: {
    textAlign: 'center',
    padding: '2.5rem 1rem 1.5rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  heroBadge: {
    display: 'inline-block',
    padding: '0.35rem 0.9rem',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 105, 180, 0.15)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
    color: '#ffb3d9',
    fontSize: '0.78rem',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: '2.2rem',
    margin: 0,
    color: '#ffffff',
  },
  heroCategoryTag: {
    fontSize: '0.75rem',
    color: '#00d2ff',
    letterSpacing: '2px',
    marginTop: '0.2rem',
    marginBottom: '0.8rem',
  },
  heroSlogan: {
    fontStyle: 'italic',
    color: '#c2b3d6',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
  },
  heroButtonsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  primaryHeroBtn: {
    backgroundColor: '#d63384',
    backgroundImage: 'linear-gradient(135deg, #e60073 0%, #7928ca 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.4rem',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  secondaryHeroBtn: {
    backgroundColor: '#17142b',
    color: '#ffffff',
    border: '1px solid #3b2354',
    padding: '0.75rem 1.4rem',
    borderRadius: '25px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  mainContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 2,
  },
  categoriesScroll: {
    display: 'flex',
    gap: '0.5rem',
    overflowX: 'auto',
    paddingBottom: '0.8rem',
    marginBottom: '1.5rem',
  },
  categoryPill: {
    backgroundColor: '#19152e',
    color: '#cccccc',
    border: '1px solid #2e264a',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  categoryPillActive: {
    backgroundColor: '#d63384',
    backgroundImage: 'linear-gradient(90deg, #d63384 0%, #0072ff 100%)',
    color: '#ffffff',
    borderColor: '#ff66b2',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.25rem',
  },
  card: {
    backgroundColor: 'rgba(23, 19, 43, 0.85)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 105, 180, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
  },
  cardImgContainer: {
    width: '100%',
    height: '240px',
    backgroundColor: '#0d0a17',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justify: 'space-between',
  },
  productTitle: {
    fontSize: '1.1rem',
    color: '#ffffff',
    margin: '0 0 0.5rem 0',
  },
  productDesc: {
    fontSize: '0.88rem',
    color: '#bfaecf',
    lineHeight: '1.4',
    marginBottom: '0.8rem',
  },
  viewProductBtn: {
    backgroundColor: 'transparent',
    color: '#00e5ff',
    border: '1px solid #00e5ff',
    padding: '0.5rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginBottom: '0.6rem',
    cursor: 'pointer',
  },
  buyBtn: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#25D366',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    padding: '0.75rem',
    borderRadius: '10px',
  },
  emptyState: {
    textAlign: 'center',
    color: '#888',
    padding: '3rem 0',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem',
  },
  modalContent: {
    backgroundColor: '#1b1633',
    borderRadius: '20px',
    padding: '1.5rem',
    maxWidth: '450px',
    width: '100%',
    position: 'relative',
    border: '1px solid #ff69b4',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  closeModalBtn: {
    position: 'absolute',
    top: '12px',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#ff69b4',
    fontSize: '1.4rem',
    cursor: 'pointer',
  },
  modalImageWrapper: {
    width: '100%',
    height: '260px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  modalTitle: {
    fontSize: '1.3rem',
    color: '#ffffff',
    margin: '0 0 0.8rem 0',
  },
  modalFullDesc: {
    fontSize: '0.95rem',
    color: '#d1c2e0',
    lineHeight: '1.5',
    marginBottom: '1.2rem',
  },
  aboutSection: {
    maxWidth: '800px',
    margin: '3rem auto 1.5rem auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 2,
  },
  aboutCard: {
    backgroundColor: 'rgba(24, 20, 43, 0.8)',
    borderRadius: '20px',
    padding: '1.8rem 1.5rem',
    textAlign: 'center',
    border: '1px solid rgba(0, 210, 255, 0.2)',
  },
  aboutBow: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  aboutTitle: {
    fontSize: '1.3rem',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  aboutText: {
    fontSize: '0.92rem',
    color: '#c2b8c7',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  aboutHighlight: {
    fontSize: '0.9rem',
    color: '#ff85c2',
  },
  instaSection: {
    maxWidth: '800px',
    margin: '0 auto 3rem auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 2,
  },
  instaCard: {
    backgroundColor: 'rgba(24, 20, 43, 0.8)',
    borderRadius: '20px',
    padding: '1.5rem',
    textAlign: 'center',
    border: '1px solid rgba(255, 105, 180, 0.2)',
  },
  instaTitle: {
    fontSize: '1.2rem',
    color: '#ffffff',
    margin: '0.4rem 0',
  },
  instaText: {
    fontSize: '0.88rem',
    color: '#b0a8b3',
    marginBottom: '1rem',
  },
  instaBtn: {
    display: 'inline-block',
    padding: '0.65rem 1.5rem',
    borderRadius: '20px',
    backgroundImage: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#120a1f',
    backgroundImage: 'linear-gradient(180deg, #210d2b 0%, #0a0512 100%)',
    padding: '2.5rem 1.5rem 1.5rem 1.5rem',
    borderTop: '1px solid rgba(255, 105, 180, 0.2)',
    marginTop: '3rem',
    position: 'relative',
    zIndex: 2,
  },
  footerHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  footerBrand: {
    fontSize: '1.4rem',
    color: '#ffffff',
    margin: '0.2rem 0',
  },
  footerTagline: {
    fontSize: '0.65rem',
    color: '#ff99cb',
    letterSpacing: '1.5px',
    marginBottom: '0.5rem',
  },
  footerQuote: {
    fontSize: '0.85rem',
    color: '#e6c2d4',
    fontStyle: 'italic',
  },
  footerBlock: {
    maxWidth: '600px',
    margin: '0 auto 1.5rem auto',
  },
  footerHeading: {
    fontSize: '1rem',
    color: '#ffffff',
    marginBottom: '0.8rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '0.3rem',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  footerLink: {
    color: '#d9b3c7',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  footerContactText: {
    fontSize: '0.88rem',
    color: '#d9b3c7',
    margin: '0.4rem 0',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '0.75rem',
    color: '#a67c92',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '1.2rem',
    marginTop: '2rem',
  },
  floatingWhatsapp: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    textDecoration: 'none',
  },
};
