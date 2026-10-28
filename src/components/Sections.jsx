import { INSTAGRAM_URL, INSTAGRAM_HANDLE, SELLER } from '../config.js';
import { generalLink } from '../utils/whatsapp.js';

export function Kits({ onShowKits }) {
  return (
    <section id="kits" className="section alt">
      <div className="container center">
        <h2>Kits Encanto 🎁</h2>
        <p className="lead">Kits em bolsa transparente com combinações de beleza e cuidados. Veja os 4 kits disponíveis no catálogo.</p>
        <a href="#produtos" className="btn btn-primary" onClick={onShowKits}>Ver os kits</a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container narrow center">
        <h2>Sobre a Dona Encanto</h2>
        <p className="lead">
          A Dona Encanto é um catálogo de maquiagem, skincare, beleza e acessórios. Escolha seus favoritos e
          fale direto com a {SELLER.name} pelo WhatsApp para consultar preço e disponibilidade.
        </p>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram" className="section alt">
      <div className="container center">
        <h2>Acompanhe a Dona Encanto</h2>
        <p className="lead">Conheça as novidades e fique por dentro de tudo no nosso Instagram.</p>
        <p className="handle">📸 {INSTAGRAM_HANDLE}</p>
        <a className="btn btn-primary" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Visitar Instagram
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="section">
      <div className="container center">
        <h2>Fale com a {SELLER.name}</h2>
        <p className="lead">O pedido é iniciado por conversa no WhatsApp, onde você confirma preço e disponibilidade.</p>
        <a className="btn btn-primary" href={generalLink()} target="_blank" rel="noopener noreferrer">
          Falar com a {SELLER.name}
        </a>
      </div>
    </section>
  );
}
