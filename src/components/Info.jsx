import { generalLink } from '../utils/whatsapp.js';

const SEALS = [
  ['🛡️', 'Compra segura'],
  ['💳', 'Diversas formas de pagamento'],
  ['💗', 'Atendimento com carinho e respeito'],
  ['✨', 'Produtos de qualidade e variedade'],
];

function PixIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true" fill="#d6126f">
      <rect x="18" y="3" width="12" height="12" rx="3" transform="rotate(45 24 9)" />
      <rect x="18" y="33" width="12" height="12" rx="3" transform="rotate(45 24 39)" />
      <rect x="3" y="18" width="12" height="12" rx="3" transform="rotate(45 9 24)" />
      <rect x="33" y="18" width="12" height="12" rx="3" transform="rotate(45 39 24)" />
    </svg>
  );
}

export function HowToBuy() {
  return (
    <section id="compras" className="section">
      <div className="container">
        <p className="eyebrow center">COMPRAS NA LOJA</p>
        <h2 className="center">É praticidade e beleza até você!</h2>

        <div className="info-grid">
          <article className="info-box">
            <div className="info-icon" aria-hidden="true">🛵</div>
            <div>
              <span className="pill">ENTREGAS</span>
              <p>Fazemos entregas na sua região com uma taxinha, que varia de acordo com a sua localização.</p>
              <p className="script">💗 Mais comodidade para você!</p>
            </div>
          </article>

          <article className="info-box">
            <div className="info-icon" aria-hidden="true">📍</div>
            <div>
              <span className="pill">RETIRADA NO LOCAL</span>
              <p>Você também pode retirar seu pedido diretamente no nosso local, sem taxa!</p>
              <p className="script">💗 É só combinar!</p>
            </div>
          </article>
        </div>

        <ul className="seals">
          {SEALS.map(([icon, text]) => (
            <li key={text}>
              <span aria-hidden="true">{icon}</span>
              <small>{text}</small>
            </li>
          ))}
        </ul>

        <p className="center cta-line">
          <a className="btn btn-primary" href={generalLink()} target="_blank" rel="noopener noreferrer">
            Faça já o seu pedido!
          </a>
        </p>
      </div>
    </section>
  );
}

export function Payments() {
  return (
    <section id="pagamento" className="section alt">
      <div className="container">
        <p className="eyebrow center">FORMAS DE</p>
        <h2 className="center">Pagamento</h2>
        <div className="pay-grid">
          <div className="pay-box">
            <span className="pay-icon" aria-hidden="true">💳</span>
            <strong>Cartão de débito e crédito</strong>
          </div>
          <div className="pay-box">
            <PixIcon />
            <strong>PIX</strong>
          </div>
          <div className="pay-box">
            <span className="pay-icon" aria-hidden="true">💵</span>
            <strong>Dinheiro</strong>
          </div>
        </div>
        <p className="center script big">É prático, seguro e do seu jeito! 💗</p>
      </div>
    </section>
  );
}
