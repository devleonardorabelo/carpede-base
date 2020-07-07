export const treatPrice = (price) => {
  const treated = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
  return treated;
};

export const minimizeText = (text) => {
  if (text.length > 75) {
    const textCut = `${text.match(/^[\s\S]{0,75}/)}...`;
    return textCut;
  }
  return text;
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
