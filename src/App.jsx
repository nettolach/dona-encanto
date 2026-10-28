import React, { useState } from 'react';

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

  const products = [
    { id: "1", name: "Lip Balm Cupcake (We Candy)", category: "labiais", description: "Hidratação profunda com aroma adocicado e embalagem divertida em formato de cupcake.", image: "IMG-20260910-WA0087.jpg" },
    { id: "2", name: "Gloss Teddy (Vivai)", category: "labiais", description: "Brilho espelhado e lábios macios em uma embalagem fofa em formato de potinho de mel.", image: "IMG-20260910-WA0113.jpg" },
    { id: "3", name: "Máscara Labial Mel + Colágeno", category: "labiais", description: "Tratamento intensivo noturno que regenera, previne o ressecamento e melhora a firmeza dos lábios.", image: "IMG-20260910-WA0115.jpg" },
    { id: "4", name: "Gloss Espiral (We Candy)", category: "labiais", description: "Efeito viçoso multicolorido com textura leve e confortável que não fica pegajosa.", image: "IMG-20260910-WA0124.jpg" },
    { id: "5", name: "Blush Cremoso Formato Pudim", category: "rosto", description: "Proporciona cor natural e acabamento corado e fresco. Textura fácil de espalhar com os dedos ou pincel.", image: "IMG-20260910-WA0117.jpg" },
    { id: "6", name: "Pó Facial Rosa Mosqueta (Diamand)", category: "rosto", description: "Pó solto ultrafino de 15g com efeito matte aveludado; sela a maquiagem sem pescar e nutre a pele.", image: "IMG-20260910-WA0126.jpg" },
    { id: "7", name: "Iluminador Pó de Fada (Vivai)", category: "rosto", description: "Brilho radiante em pó solto para destacar os pontos altos do rosto e do colo com acabamento luminoso.", image: "IMG-20260910-WA0141.jpg" },
    { id: "8", name: "Máscara de Cílios Black All Day (Vivai)", category: "olhos", description: "Pigmentação preta de longa duração que entrega volume, alongamento e definição aos cílios o dia todo.", image: "IMG-20260910-WA0121.jpg" },
    { id: "9", name: "Caneta Delineadora (Miamake)", category: "olhos", description: "Ponta fina de alta precisão que facilita o traço do delineado gatinho com secagem rápida e cor intensa.", image: "IMG-20260910-WA0122.jpg" },
    { id: "10", name: "Quarteto de Sombras (Ludurana)", category: "olhos", description: "Paleta compacta com 4 cores super pigmentadas e textura aveludada, ideal para criar esfumados rápidos.", image: "IMG-20260910-WA0127.jpg" },
    { id: "11", name: "Sabonete Facial Rosa Mosqueta (Lady Beauty)", category: "skincare", description: "Limpeza facial diária de 100ml com D-Pantenol e Ácido Lático; limpa suavemente e auxilia na regeneração.", image: "IMG-20260910-WA0137.jpg" },
    { id: "12", name: "Sérum Facial Cotton Bons Sonhos (Porán)", category: "skincare", description: "Sérum noturno de 20ml com notas de lavanda e algodão; repara a barreira cutânea e deixa a pele aveludada.", image: "IMG-20260910-WA0149.jpg" },
    { id: "13", name: "Lenço Demaquilante Vai na Bolsa (Miamake)", category: "skincare", description: "Ação 4 em 1: remove a maquiagem, hidrata, acalma e combate radicais livres com Vitamina C e Colágeno.", image: "IMG-20260910-WA0150.jpg" },
    { id: "14", name: "Touca de Cetim", category: "acessorios", description: "Protege os fios durante o sono, reduzindo drasticamente o atrito, o frizz, a quebra e o ressecamento do cabelo.", image: "IMG-20260910-WA0142.jpg" },
    { id: "15", name: "Kit Encanto Morango & Vaquinha", category: "skincare", description: "Kit especial na bolsa transparente contendo hidratante corporal Pure Milk, esfoliante de morango, creme facial Kyrav, máscara labial de colágeno e gloss de morango com chaveiro.", image: "1000176740.jpg" },
    { id: "16", name: "Kit Encanto Rosa Mosqueta & Cuidados", category: "skincare", description: "Bolsa transparente com presilha de flor contendo sabonete facial em espuma de morango, esfoliante Rosa Mosqueta, faixa de cabelo em pelúcia e xuxinha de cetim.", image: "1000176739.jpg" },
    { id: "17", name: "Kit Encanto Melancia & Make Sweet", category: "skincare", description: "Bolsa transparente temática melancia contendo espuma facial Melô, sabonete Rosa Mosqueta, paletinha de sombras em formato de coração Sweet Love e lip gloss com chaveiro.", image: "1000176738.jpg" },
    { id: "18", name: "Kit Encanto Lilás & Iluminador", category: "skincare", description: "Bolsa transparente delicada contendo pó de fada iluminador Vivai, creme facial efeito lifting Kyrav, gloss espiral e faixa de cabelo lilás em pelúcia.", image: "1000176737.jpg" }
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
              href={`https://wa.me/${phoneStore}?text=Olá! Gostaria de atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.navBtnWhatsapp}
            >
              💬 Falar no WhatsApp
            </a>
          </nav>
        )}
      </header>

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
            href={`https://wa.me/${phoneStore}?text=Olá! Gostaria de fazer um pedido.`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryHeroBtn}
          >
            💬 Fazer Pedido Direto
          </a>
        </div>
      </section>

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
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  style={styles.cardImg}
                />
              </div>

              <div style={styles.cardBody}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDesc}>
                  {product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}
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

      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeModalBtn} onClick={() => setSelectedProduct(null)}>✕</button>
            <div style={styles.modalImageWrapper}>
              <img
                src={`${import.meta.env.BASE_URL}${selectedProduct.image}`}
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

      <footer style={styles.footer}>
        <div style={styles.footerHeader}>
          <span style={{ fontSize: '1.8rem' }}>🎀</span>
          <h4 style={styles.footerBrand}>Dona Encanto</h4>
          <p style={styles.footerTagline}>MAQUIAGEM & ACESSÓRIOS</p>
        </div>
        <div style={styles.copyright}>
          <p>© 2026 Dona Encanto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  pageBackground: {
    backgroundColor: '#0f0c1b',
    backgroundImage: 'linear-gradient(135deg, #2b0826 0%, #100a26 40%, #081d36 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    paddingBottom: '2rem',
  },
  navHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(15, 12, 27, 0.95)',
    padding: '0.8rem 1rem',
    borderBottom: '1px solid rgba(255, 105, 180, 0.2)',
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
  bowIcon: { fontSize: '1.8rem' },
  brandTitle: { margin: 0, fontSize: '1.25rem', fontWeight: '700', color: '#ff69b4' },
  brandSubtitle: { fontSize: '0.62rem', color: '#8ac6d1', letterSpacing: '1.5px', display: 'block' },
  menuToggleBtn: { background: 'none', border: 'none', color: '#ff69b4', fontSize: '1.5rem' },
  searchWrapper: { maxWidth: '1100px', margin: '0.6rem auto 0 auto', position: 'relative' },
  searchIcon: { position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#ff69b4' },
  searchInput: {
    width: '100%',
    padding: '0.6rem 0.8rem 0.6rem 2.2rem',
    borderRadius: '20px',
    border: '1px solid #3b224c',
    backgroundColor: '#17132a',
    color: '#fff',
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
  },
  navLink: { color: '#e0e0e0', textDecoration: 'none' },
  navBtnWhatsapp: { backgroundColor: '#25D366', color: '#fff', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' },
  heroSection: { textAlign: 'center', padding: '2.5rem 1rem 1.5rem 1rem', maxWidth: '800px', margin: '0 auto' },
  heroBadge: { display: 'inline-block', padding: '0.35rem 0.9rem', borderRadius: '15px', backgroundColor: 'rgba(255, 105, 180, 0.15)', color: '#ffb3d9', fontSize: '0.78rem', marginBottom: '1rem' },
  heroTitle: { fontSize: '2.2rem', margin: 0, color: '#fff' },
  heroCategoryTag: { fontSize: '0.75rem', color: '#00d2ff', letterSpacing: '2px', margin: '0.2rem 0 0.8rem 0' },
  heroSlogan: { fontStyle: 'italic', color: '#c2b3d6', marginBottom: '1.5rem' },
  heroButtonsRow: { display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' },
  primaryHeroBtn: { backgroundColor: '#d63384', color: '#fff', border: 'none', padding: '0.75rem 1.4rem', borderRadius: '25px', fontWeight: 'bold' },
  secondaryHeroBtn: { backgroundColor: '#17142b', color: '#fff', border: '1px solid #3b2354', padding: '0.75rem 1.4rem', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold' },
  mainContainer: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' },
  categoriesScroll: { display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.8rem', marginBottom: '1.5rem' },
  categoryPill: { backgroundColor: '#19152e', color: '#ccc', border: '1px solid #2e264a', padding: '0.5rem 1rem', borderRadius: '20px', whiteSpace: 'nowrap' },
  categoryPillActive: { backgroundColor: '#d63384', color: '#fff', fontWeight: 'bold' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' },
  card: { backgroundColor: 'rgba(23, 19, 43, 0.85)', borderRadius: '16px', border: '1px solid rgba(255, 105, 180, 0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  cardImgContainer: { width: '100%', height: '240px', backgroundColor: '#0d0a17' },
  cardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  cardBody: { padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' },
  productTitle: { fontSize: '1.1rem', color: '#fff', margin: '0 0 0.5rem 0' },
  productDesc: { fontSize: '0.88rem', color: '#bfaecf', marginBottom: '0.8rem' },
  viewProductBtn: { backgroundColor: 'transparent', color: '#00e5ff', border: '1px solid #00e5ff', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', marginBottom: '0.6rem' },
  buyBtn: { display: 'block', textAlign: 'center', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', fontWeight: 'bold', padding: '0.75rem', borderRadius: '10px' },
  emptyState: { textAlign: 'center', color: '#888', padding: '3rem 0' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' },
  modalContent: { backgroundColor: '#1b1633', borderRadius: '20px', padding: '1.5rem', maxWidth: '450px', width: '100%', position: 'relative', border: '1px solid #ff69b4' },
  closeModalBtn: { position: 'absolute', top: '12px', right: '15px', background: 'none', border: 'none', color: '#ff69b4', fontSize: '1.4rem' },
  modalImageWrapper: { width: '100%', height: '260px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' },
  modalImage: { width: '100%', height: '100%', objectFit: 'cover' },
  modalTitle: { fontSize: '1.3rem', color: '#fff', margin: '0 0 0.8rem 0' },
  modalFullDesc: { fontSize: '0.95rem', color: '#d1c2e0', marginBottom: '1.2rem' },
  footer: { backgroundColor: '#120a1f', padding: '2rem 1rem 1rem 1rem', marginTop: '3rem', borderTop: '1px solid rgba(255, 105, 180, 0.2)', textAlign: 'center' },
  footerBrand: { fontSize: '1.4rem', color: '#fff', margin: '0.2rem 0' },
  footerTagline: { fontSize: '0.65rem', color: '#ff99cb', letterSpacing: '1.5px' },
  copyright: { fontSize: '0.75rem', color: '#a67c92', marginTop: '1.5rem' },
};
