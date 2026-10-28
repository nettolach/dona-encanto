import { SELLER, DEV } from '../config.js';

const link = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const productLink = (name) =>
  link(
    SELLER.phone,
    `Olá, ${SELLER.name}! Vim pelo site Dona Encanto e gostaria de consultar o preço e a disponibilidade do produto: ${name}.`
  );

export const generalLink = () =>
  link(SELLER.phone, `Olá, ${SELLER.name}! Vim pelo site Dona Encanto e gostaria de conhecer os produtos disponíveis.`);

export const devLink = () =>
  link(DEV.phone, `Olá, ${DEV.name}! Vi o site da Dona Encanto e gostaria de falar com você.`);
