import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible] = useState(true);
  const [isOnline, setIsOnline] = useState(false);

  // Função para verificar se está no horário de atendimento
  const checkBusinessHours = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    // Segunda a sexta: 8:00 - 18:00
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return currentTime >= 8 && currentTime < 18;
    }
    
    // Sábado: 8:00 - 12:00
    if (dayOfWeek === 6) {
      return currentTime >= 8 && currentTime < 12;
    }
    
    // Domingo: fechado
    return false;
  };

  useEffect(() => {
    // Verificar status online ao carregar
    setIsOnline(checkBusinessHours());

    // Verificar status a cada minuto
    const interval = setInterval(() => {
      setIsOnline(checkBusinessHours());
    }, 60000); // 1 minuto

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    let message;
    
    if (isOnline) {
      message = 'Olá! Tenho interesse nos móveis planejados da Eva Marcenaria. Pode me ajudar com um projeto personalizado para minha casa?';
    } else {
      message = 'Olá! Tenho interesse nos móveis planejados da Eva Marcenaria. Aguardo seu retorno para conversarmos sobre meu projeto.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/552141013747?text=${encodedMessage}`, '_blank');
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className={`whatsapp-btn ${
            isOnline 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-gray-500 hover:bg-gray-600'
          } text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative animate-pulse-ring`}
          aria-label={`${isOnline ? 'Falar no WhatsApp - Online agora' : 'Falar no WhatsApp - Fora do horário de atendimento'}`}
        >
          <FaWhatsapp className="w-8 h-8" aria-hidden="true" />
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-4 z-40 animate-slide-in">
          <Card className="bg-white shadow-2xl border-0 max-w-sm">
            <CardContent className="p-4 relative">
              <button
                onClick={handleCloseTooltip}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar mensagem do WhatsApp"
              >
                <FaTimes className="w-4 h-4" aria-hidden="true" />
              </button>
              
              <div className="pr-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${
                    isOnline ? 'bg-green-500' : 'bg-gray-500'
                  } rounded-full flex items-center justify-center`}>
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-800">Eva Marcenaria</div>
                    <div className="text-sm text-gray-600">
                      {isOnline ? 'Online agora' : 'Fora do horário de atendimento'}
                    </div>
                  </div>
                </div>
                
                                  <p className="text-gray-700 text-sm mb-3">
                    {isOnline ? (
                      '👋 Olá! Precisa de móveis planejados para sua casa? Vamos conversar sobre seu projeto personalizado!'
                    ) : (
                      '📝 Olá! Tem interesse em móveis planejados? Deixe sua mensagem que retornarei assim que possível.'
                    )}
                  </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div className={`w-2 h-2 ${
                    isOnline ? 'bg-green-400' : 'bg-gray-400'
                  } rounded-full`}></div>
                                      <span>
                      {isOnline 
                        ? 'Orçamento gratuito para móveis planejados' 
                        : 'Horário de atendimento: Seg-Sex 8h-18h, Sáb 8h-12h'
                      }
                    </span>
                </div>
                
                <button
                  onClick={handleWhatsAppClick}
                  className={`w-full ${
                    isOnline 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gray-500 hover:bg-gray-600'
                  } text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors`}
                  aria-label={`${isOnline ? 'Solicitar orçamento de móveis no WhatsApp' : 'Deixar mensagem no WhatsApp'}`}
                >
                  {isOnline ? 'Solicitar Orçamento' : 'Deixar Mensagem'}
                </button>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
