export const treatPrice = (price) => {
  const treated = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BR',
  }).format(price);
  return treated;
};

export const whatsappFormat = [
  { exactly: '(' },
  { char: /\d/, repeat: 2 },
  { exactly: ')' },
  { exactly: ' ' },
  { char: /\d/, repeat: 1 },
  { exactly: ' ' },
  { char: /\d/, repeat: 4 },
  { exactly: ' ' },
  { char: /\d/, repeat: 4 },
];
