import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const location = useLocation();

  // Don't show button on landing page
  const isLandingPage = location.pathname === '/landing';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in solar installation. Can you provide me with more information about your services and pricing?"
    );
    const whatsappUrl = `https://wa.me/918019355353?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Don't render anything on landing page
  if (isLandingPage) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Live Indicator */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>
        
        {/* Live Text */}
        <div className="absolute -top-8 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
          Live
        </div>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
