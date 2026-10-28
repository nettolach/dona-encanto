export const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: '✨' },
  { id: 'labiais', label: 'Labiais', icon: '💄' },
  { id: 'rosto', label: 'Rosto', icon: '🌸' },
  { id: 'olhos', label: 'Olhos', icon: '👁️' },
  { id: 'skincare', label: 'Skincare', icon: '🌿' },
  { id: 'acessorios', label: 'Acessórios', icon: '🎀' },
];

// Para ter foto real: salve em public/images/products/<id>.jpg
// Sem preço cadastrado, o site mostra "Consulte o preço". Para definir: price: 'R$ 00,00'
const p = (id, name, brand, category, description) => ({
  id,
  name,
  brand,
  category,
  description,
  image: `images/products/${id}.jpg`,
  price: null,
});

export const PRODUCTS = [
  p('lip-balm-cupcake', 'Lip Balm Cupcake', 'We Candy', 'labiais', 'Hidratação profunda com aroma adocicado e embalagem divertida em formato de cupcake.'),
  p('gloss-teddy', 'Gloss Teddy', 'Vivai', 'labiais', 'Brilho espelhado e lábios macios em uma embalagem fofa em formato de potinho de mel.'),
  p('mascara-labial-mel-colageno', 'Máscara Labial Mel + Colágeno', null, 'labiais', 'Tratamento labial noturno destinado à hidratação e ao cuidado dos lábios, ajudando a reduzir o ressecamento.'),
  p('gloss-espiral', 'Gloss Espiral', 'We Candy', 'labiais', 'Efeito luminoso multicolorido e textura leve, desenvolvido para proporcionar uma aplicação confortável.'),
  p('blush-cremoso-pudim', 'Blush Cremoso Formato Pudim', null, 'rosto', 'Proporciona aparência naturalmente corada e acabamento fresco. Sua textura permite aplicação com os dedos ou pincel.'),
  p('po-facial-rosa-mosqueta', 'Pó Facial Rosa Mosqueta', 'Diamand', 'rosto', 'Pó facial solto ultrafino de 15 g, com acabamento matte aveludado, indicado para finalizar a maquiagem.'),
  p('iluminador-po-de-fada', 'Iluminador Pó de Fada', 'Vivai', 'rosto', 'Iluminador em pó solto para destacar os pontos altos do rosto e do colo com acabamento luminoso.'),
  p('mascara-de-cilios-black-all-day', 'Máscara de Cílios Black All Day', 'Vivai', 'olhos', 'Máscara de cílios preta para valorizar o olhar, proporcionando aparência de maior volume, alongamento e definição.'),
  p('caneta-delineadora', 'Caneta Delineadora', 'Miamake', 'olhos', 'Delineador em formato de caneta, com ponta fina que facilita a criação de traços precisos.'),
  p('quarteto-de-sombras', 'Quarteto de Sombras', 'Ludurana', 'olhos', 'Paleta compacta com quatro cores para criar combinações de maquiagem e diferentes estilos de esfumado.'),
  p('sabonete-facial-rosa-mosqueta', 'Sabonete Facial Rosa Mosqueta', 'Lady Beauty', 'skincare', 'Produto de limpeza facial de 100 ml com D-pantenol e ácido lático, destinado à rotina diária de cuidados com a pele.'),
  p('serum-facial-cotton-bons-sonhos', 'Sérum Facial Cotton Bons Sonhos', 'Porán', 'skincare', 'Sérum noturno de 20 ml com notas de lavanda e algodão, destinado à rotina de cuidados faciais.'),
  p('lenco-demaquilante-vai-na-bolsa', 'Lenço Demaquilante Vai na Bolsa', 'Miamake', 'skincare', 'Lenço demaquilante com proposta de ação 4 em 1, incluindo remoção da maquiagem, hidratação e cuidado da pele. A composição informada inclui vitamina C e colágeno.'),
  p('touca-de-cetim', 'Touca de Cetim', null, 'acessorios', 'Acessório para proteger os cabelos durante o sono, reduzindo o atrito entre os fios e o travesseiro e ajudando a controlar o frizz.'),
  p('kit-morango-vaquinha', 'Kit Encanto Morango & Vaquinha', null, 'skincare', 'Kit em bolsa transparente contendo hidratante corporal Pure Milk, esfoliante de morango, creme facial Kyrav, máscara labial de colágeno e gloss de morango com chaveiro.'),
  p('kit-rosa-mosqueta-cuidados', 'Kit Encanto Rosa Mosqueta & Cuidados', null, 'skincare', 'Kit em bolsa transparente com presilha de flor, sabonete facial em espuma de morango, esfoliante de rosa mosqueta, faixa de cabelo em pelúcia e xuxinha de cetim.'),
  p('kit-melancia-make-sweet', 'Kit Encanto Melancia & Make Sweet', null, 'skincare', 'Kit em bolsa transparente temática de melancia contendo espuma facial Melô, sabonete de rosa mosqueta, paleta de sombras Sweet Love em formato de coração e lip gloss com chaveiro.'),
  p('kit-lilas-iluminador', 'Kit Encanto Lilás & Iluminador', null, 'skincare', 'Kit em bolsa transparente contendo iluminador Pó de Fada Vivai, creme facial efeito lifting Kyrav, gloss espiral e faixa de cabelo lilás em pelúcia.'),
];
