import { useEffect, useState } from 'react';
import { INSTAGRAM_URL, SELLER, DEV } from '../config.js';
import { generalLink, devLink } from '../utils/whatsapp.js';

// Métricas reais via GoatCounter (sem cookies). Sem VITE_GOATCOUNTER_CODE, nada é exibido.
const CODE = import.meta.env.VITE_GOATCOUNTER_CODE;

function VisitCounter() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!CODE) return;
    if (!document.querySelector('script[data-goatcounter]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://gc.zgo.at/count.js';
      s.dataset.goatcounter = `https://${CODE}.goatcounter.com/count`;
      document.body.appendChild(s);
    }
    fetch(`https://${CODE}.goatcounter.com/counter/TOTAL.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!CODE || !data) return null;
  const unique = data.count_unique;
  return (
    <p className="visits">
      ✨ {unique ? `Visitantes únicos: ${unique}` : `Visualizações de página: ${data.count}`}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand-name">Dona Encanto 🎀</p>
          <p className="brand-sub">MAQUIAGEM • SKINCARE • ACESSÓRIOS</p>
          <p>Catálogo de beleza com atendimento pelo WhatsApp.</p>
        </div>
        <div>
          <p className="foot-title">Navegação</p>
          <p><a href="#produtos">Catálogo</a></p>
          <p><a href="#kits">Kits</a></p>
          <p><a href="#sobre">Sobre</a></p>
          <p><a href="#contato">Contato</a></p>
        </div>
        <div>
          <p className="foot-title">Fale conosco</p>
          <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p>
            <a className="btn btn-primary small" href={generalLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp da {SELLER.name}
            </a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <VisitCounter />
        <p>Desenvolvido com carinho e tecnologia.</p>
        <a className="btn btn-outline small" href={devLink()} target="_blank" rel="noopener noreferrer">
          Falar com o desenvolvedor ({DEV.name})
        </a>
        <p className="privacy">
          Privacidade: este site usa métricas de visitas sem cookies e sem identificar pessoas. Pedidos são feitos
          pelo WhatsApp.
        </p>
        <p>© {new Date().getFullYear()} Dona Encanto</p>
      </div>
    </footer>
  );
}
