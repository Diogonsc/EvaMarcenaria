import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar se deve mostrar o botão
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-6 z-50">
      <button
        onClick={scrollToTop}
        className="bg-primary hover:bg-primary/80 text-white p-3 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Voltar ao topo da página"
      >
        <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackToTop; 