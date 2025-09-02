export const openWhatsAppQuote = () => {
  const phoneNumber = '918019355353';
  const message = encodeURIComponent(
    'Hi! I would like to get a quote for solar panel installation. Please provide me with more information.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open WhatsApp in new tab/window
  window.open(whatsappUrl, '_blank');
};
