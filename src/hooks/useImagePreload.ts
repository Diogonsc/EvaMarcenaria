import { useEffect, useState } from 'react'

interface UseImagePreloadOptions {
  images: string[]
  onComplete?: () => void
  onError?: (error: Error) => void
}

export function useImagePreload({ images, onComplete, onError }: UseImagePreloadOptions) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(false)
      return
    }

    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]))
          resolve()
        }
        
        img.onerror = () => {
          const error = new Error(`Failed to load image: ${src}`)
          reject(error)
        }
        
        img.src = src
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false)
        onComplete?.()
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
        onError?.(err)
      })
  }, [images, onComplete, onError])

  return {
    loadedImages: Array.from(loadedImages),
    isLoading,
    error,
    progress: loadedImages.size / images.length
  }
}
