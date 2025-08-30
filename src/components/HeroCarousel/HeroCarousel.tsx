import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// Importando as imagens
import slidePersonalidade from '@/assets/slide-personalidade.webp'
import slideConforto from '@/assets/slide-conforto.webp'
import slideSofisticacao from '@/assets/slide-sofisticacao.webp'

const slides = [
  {
    id: 1,
    image: slidePersonalidade,
    title: 'PERSONALIDADE',
    subtitle: 'AMBIENTES DESENVOLVIDOS PARA VOCÊ',
  },
  {
    id: 2,
    image: slideConforto,
    title: 'CONFORTO',
    subtitle: 'BELEZA E CONFORTO PARA TODA FAMÍLIA',
  },
  {
    id: 3,
    image: slideSofisticacao,
    title: 'SOFISTICAÇÃO',
    subtitle: 'QUALIDADE E BOM GOSTO NA ESCOLHA DOS MELHORES MATERIAIS',
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showAnimations, setShowAnimations] = useState(true)

  useEffect(() => {
    // Autoplay - muda slide a cada 5 segundos
    const autoplayInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [currentSlide])

  useEffect(() => {
    // Reset animations when slide changes - tempo reduzido para transição mais rápida
    setShowAnimations(false)
    const timer = setTimeout(() => {
      setShowAnimations(true)
    }, 50) // Reduzido de 100ms para 50ms
    
    return () => clearTimeout(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden" role="banner" aria-label="Carrossel de imagens da Eva Marcenaria">
      {/* Container das imagens com efeito de fade */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            {/* Imagem de fundo */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`
              }}
              aria-hidden="true"
            />
            
            {/* Overlay escuro para melhor legibilidade do texto */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Conteúdo do slide atual - centralizado perfeitamente nos eixos X e Y */}
      <div className="absolute inset-0 z-40 flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">
          <h1 
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight hero-title text-accent drop-shadow-lg transition-all duration-200 text-center ${
              showAnimations ? 'animate__animated animate__fadeInDown animate__delay-1s' : 'opacity-0'
            }`}
            aria-live="polite"
            aria-label={`Slide ${currentSlide + 1} de ${slides.length}: ${slides[currentSlide].title}`}
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className={`text-lg text-accent sm:text-xl md:text-2xl mb-4 md:mb-6 max-w-2xl leading-relaxed hero-subtitle drop-shadow-lg transition-all duration-200 text-center ${
              showAnimations ? 'animate__animated animate__fadeInUp animate__delay-2s' : 'opacity-0'
            }`}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Botões de navegação - ocultos em mobile */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex justify-between items-center px-4 md:px-8" role="group" aria-label="Navegação do carrossel">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/10 backdrop-blur-sm border-0 text-white hover:bg-black/30 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-6 md:size-12 opacity-40" strokeWidth={1.5} aria-hidden="true" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/10 backdrop-blur-sm border-0 text-white hover:bg-black/30 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-6 md:size-12 opacity-40" strokeWidth={1.5} aria-hidden="true" />
        </Button>
      </div>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3 md:space-x-4" role="tablist" aria-label="Indicadores de slides">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              currentSlide === index 
                ? 'bg-primary scale-125 border-primary' 
                : 'bg-[#b6b7b9] border-[#b6b7b9] hover:bg-[#a0a1a3] hover:border-[#a0a1a3]'
            } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Ir para slide ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  )
}
