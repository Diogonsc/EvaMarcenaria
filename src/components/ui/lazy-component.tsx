import { useState, useEffect } from 'react'
import { Loading, ComponentLoading } from './loading'
import { LazyLoadingError } from './error-boundary'

interface LazyComponentProps {
  importFn: () => Promise<any>
  fallback?: React.ReactNode
  preload?: boolean
  onLoad?: () => void
  onError?: (error: Error) => void
}

export function LazyComponent({ 
  importFn, 
  fallback = <ComponentLoading />,
  preload = false,
  onLoad,
  onError
}: LazyComponentProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const loadComponent = async () => {
    try {
      setLoading(true)
      setError(null)
      const module = await importFn()
      const Component = module.default || module
      setComponent(() => Component)
      setLoading(false)
      onLoad?.()
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Erro ao carregar componente')
      setError(error)
      setLoading(false)
      onError?.(error)
    }
  }

  const retry = () => {
    setError(null)
    loadComponent()
  }

  useEffect(() => {
    loadComponent()
  }, [])

  // Preload quando o componente estiver próximo de ser visível
  useEffect(() => {
    if (preload && !Component && !loading) {
      loadComponent()
    }
  }, [preload])

  if (error) {
    return <LazyLoadingError error={error} retry={retry} />
  }

  if (loading || !Component) {
    return <>{fallback}</>
  }

  return <Component />
}

// Hook para preload de componentes
export function usePreload(importFn: () => Promise<any>) {
  const [preloaded, setPreloaded] = useState(false)

  const preload = async () => {
    if (!preloaded) {
      try {
        await importFn()
        setPreloaded(true)
      } catch (error) {
        console.warn('Preload failed:', error)
      }
    }
  }

  return { preload, preloaded }
}

// Componente para lazy loading de imagens
export function LazyImage({ 
  src, 
  alt, 
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcnJlZ2FuZG8uLi48L3RleHQ+PC9zdmc+'
}: {
  src: string
  alt: string
  className?: string
  placeholder?: string
}) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    
    img.onload = () => {
      setImageSrc(src)
      setLoading(false)
    }
    
    img.onerror = () => {
      setError(true)
      setLoading(false)
    }
  }, [src])

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Erro ao carregar imagem</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-50' : 'opacity-100'
        }`}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading size="sm" variant="dots" />
        </div>
      )}
    </div>
  )
}
