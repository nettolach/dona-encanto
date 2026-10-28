import { generalLink } from '../utils/whatsapp.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">🌸 Beleza & autocuidado</span>
          <h1>Seu encanto começa nos detalhes.</h1>
          <p className="lead">
            Descubra produtos de beleza, maquiagem, skincare e acessórios escolhidos para deixar sua rotina ainda mais
            especial.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#produtos">Ver produtos</a>
            <a className="btn btn-outline" href={generalLink()} target="_blank" rel="noopener noreferrer">
              Fazer pedido pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art a1">💄</span>
          <span className="art a2">🌸</span>
          <span className="art a3">✨</span>
          <span className="art a4">🎀</span>
          <span className="art a5">🧴</span>
        </div>
      </div>
    </section>
  );
}
