import { useState, useEffect } from 'react'

interface UseLazyLoadingOptions {
  retryCount?: number
  retryDelay?: number
  onError?: (error: Error) => void
}

interface UseLazyLoadingReturn {
  loading: boolean
  error: Error | null
  retry: () => void
}

export function useLazyLoading(
  importFn: () => Promise<any>,
  options: UseLazyLoadingOptions = {}
): UseLazyLoadingReturn {
  const { retryCount = 3, retryDelay = 1000, onError } = options
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [retryAttempts, setRetryAttempts] = useState(0)

  const loadComponent = async () => {
    try {
      setLoading(true)
      setError(null)
      await importFn()
      setLoading(false)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Erro ao carregar componente')
      setError(error)
      setLoading(false)
      
      if (onError) {
        onError(error)
      }
    }
  }

  const retry = () => {
    if (retryAttempts < retryCount) {
      setRetryAttempts(prev => prev + 1)
      setTimeout(() => {
        loadComponent()
      }, retryDelay)
    }
  }

  useEffect(() => {
    loadComponent()
  }, [])

  return { loading, error, retry }
}

// Hook para detectar quando o componente está visível na viewport
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {
      threshold: 0.1,
      ...options
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options])

  return isIntersecting
}
