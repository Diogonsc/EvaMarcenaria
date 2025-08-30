import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";

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
      message =
        "Olá! Tenho interesse nos móveis planejados da Eva Marcenaria. Pode me ajudar com um projeto personalizado para minha casa?";
    } else {
      message =
        "Olá! Tenho interesse nos móveis planejados da Eva Marcenaria. Aguardo seu retorno para conversarmos sobre meu projeto.";
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/552141013747?text=${encodedMessage}`, "_blank");
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  // Navegação por teclado
  useKeyboardNavigation(
    handleCloseTooltip, // ESC para fechar tooltip
    handleWhatsAppClick, // Enter para abrir WhatsApp
    handleWhatsAppClick // Espaço para abrir WhatsApp
  );

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
        <div className="relative">
          {/* Pulse ring effect */}
          <div className={`absolute inset-0 rounded-full animate-pulse-ring ${
            isOnline ? "bg-green-500" : "bg-gray-500"
          } opacity-75`}></div>
          
          {/* Main button */}
          <button
            onClick={handleWhatsAppClick}
            className={`relative ${
              isOnline
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-500 hover:bg-gray-600"
            } text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
            aria-label={`${
              isOnline
                ? "Falar no WhatsApp - Online agora"
                : "Falar no WhatsApp - Fora do horário de atendimento"
            }`}
            aria-describedby={showTooltip ? "whatsapp-tooltip" : undefined}
          >
            <FaWhatsapp className="w-8 h-8 md:w-8 md:h-8" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-20 left-2 md:bottom-24 md:left-4 z-40 animate-slide-in" id="whatsapp-tooltip" role="tooltip">
          <Card className="bg-white shadow-2xl border-0 max-w-sm md:max-w-md">
            <CardContent className="p-4 md:p-5 relative">
              <button
                onClick={handleCloseTooltip}
                className="absolute top-2 right-2 md:top-3 md:right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar mensagem do WhatsApp"
              >
                <FaTimes className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </button>

              <div className="pr-6 md:pr-8">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${
                      isOnline ? "bg-green-500" : "bg-gray-500"
                    } rounded-full flex items-center justify-center`}
                  >
                    <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-800 text-base md:text-lg">
                      Eva Marcenaria
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      {isOnline
                        ? "Online agora"
                        : "Fora do horário de atendimento"}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                  {isOnline
                    ? "👋 Olá! Precisa de móveis planejados para sua casa? Vamos conversar sobre seu projeto personalizado!"
                    : "📝 Olá! Tem interesse em móveis planejados? Deixe sua mensagem que retornarei assim que possível."}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 md:mb-4">
                  <div
                    className={`w-2 h-2 ${
                      isOnline ? "bg-green-400" : "bg-gray-400"
                    } rounded-full`}
                  ></div>
                  <span className="text-sm">
                    {isOnline
                      ? "Orçamento gratuito para móveis planejados"
                      : "Horário de atendimento: Seg-Sex 8h-18h, Sáb 8h-12h"}
                  </span>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className={`w-full ${
                    isOnline
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  } text-white px-4 py-3 md:px-5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors`}
                  aria-label={`${
                    isOnline
                      ? "Solicitar orçamento de móveis no WhatsApp"
                      : "Deixar mensagem no WhatsApp"
                  }`}
                >
                  {isOnline ? "Solicitar Orçamento" : "Deixar Mensagem"}
                </button>
              </div>

              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 left-8 md:left-10 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 md:border-l-10 md:border-r-10 md:border-t-10 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
