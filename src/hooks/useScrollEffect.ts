import { useState, useEffect, useCallback } from 'react'

export function useScrollEffect(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false)

  const checkScroll = useCallback(() => {
    const scrollY = window.scrollY || 
                   window.pageYOffset || 
                   document.documentElement.scrollTop || 
                   document.body.scrollTop || 0
    
    const newIsScrolled = scrollY > threshold
    
    setIsScrolled(newIsScrolled)
  }, [threshold])

  // Verificar posição inicial após a montagem
  useEffect(() => {
    // Aguardar um frame para garantir que o DOM esteja pronto
    requestAnimationFrame(checkScroll)
  }, [checkScroll])

  // Listener para mudanças de scroll
  useEffect(() => {
    // Adicionar listener
    window.addEventListener('scroll', checkScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [checkScroll])

  return isScrolled
}
