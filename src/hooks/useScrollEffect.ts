import { useState, useEffect, useCallback } from 'react'
import { useThrottledCallback } from './useThrottle'

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

  // Usar throttle para melhorar performance
  const throttledCheckScroll = useThrottledCallback(checkScroll, 16) // ~60fps

  // Verificar posição inicial após a montagem
  useEffect(() => {
    // Aguardar um frame para garantir que o DOM esteja pronto
    requestAnimationFrame(checkScroll)
  }, [checkScroll])

  // Listener para mudanças de scroll
  useEffect(() => {
    // Adicionar listener com throttle
    window.addEventListener('scroll', throttledCheckScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledCheckScroll)
    }
  }, [throttledCheckScroll])

  return isScrolled
}
