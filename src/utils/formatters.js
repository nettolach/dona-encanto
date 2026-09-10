import store from '../config/store';

export const formatPrice = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const createWhatsAppUrl = (product = null) => {
  let message = '';
  
  if (product) {
    message = `Olá! 💕 Tenho interesse no produto:\n\n*${product.name}*\nValor:${formatPrice(product.price)}\n\nGostaria de verificar a disponibilidade e tirar algumas dúvidas!`;
  } else {
    message = `Olá! 💕 Gostaria de conhecer mais sobre os produtos da *Dona Encanto*!`;
  }

  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
};

