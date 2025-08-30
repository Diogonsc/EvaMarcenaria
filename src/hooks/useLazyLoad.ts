import { useState, useEffect, useRef } from 'react'

interface UseLazyLoadOptions {
  threshold?: number
  rootMargin?: string
  fallback?: string
}

export function useLazyLoad<T extends HTMLElement = HTMLImageElement>(
  src: string,
  options: UseLazyLoadOptions = {}
) {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const elementRef = useRef<T>(null)

  const { threshold = 0.1, rootMargin = '50px', fallback } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elemento está visível, carregar a imagem
            const img = new Image()
            
            img.onload = () => {
              setImageSrc(src)
              setIsLoaded(true)
            }
            
            img.onerror = () => {
              setHasError(true)
              if (fallback) {
                setImageSrc(fallback)
                setIsLoaded(true)
              }
            }
            
            img.src = src
            
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [src, threshold, rootMargin, fallback])

  return {
    elementRef,
    imageSrc,
    isLoaded,
    hasError,
  }
}
