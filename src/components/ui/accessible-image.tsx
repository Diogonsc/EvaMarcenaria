import { useState, useEffect } from 'react'

interface AccessibleImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
}

export function AccessibleImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  fallbackSrc
}: AccessibleImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImageSrc(src)
    setIsLoaded(false)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
    onError?.()
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
      aria-hidden={hasError}
    />
  )
}
