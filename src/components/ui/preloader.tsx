import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { preloadComponent } from '../../config/lazy-loading'

interface PreloaderProps {
  routes: Array<{
    path: string
    importFn: () => Promise<any>
  }>
}

export function Preloader({ routes }: PreloaderProps) {
  const location = useLocation()
  const preloadedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    // Preload das rotas adjacentes
    const currentPath = location.pathname
    const adjacentRoutes = routes.filter(route => route.path !== currentPath)

    adjacentRoutes.forEach(route => {
      if (!preloadedRef.current.has(route.path)) {
        preloadComponent(route.importFn)
          .then(() => {
            preloadedRef.current.add(route.path)
            console.log(`Preloaded: ${route.path}`)
          })
          .catch(error => {
            console.warn(`Failed to preload ${route.path}:`, error)
          })
      }
    })
  }, [location.pathname, routes])

  return null // Componente invisível
}

// Hook para preload de recursos
export function usePreloadResources(resources: Array<() => Promise<any>>) {
  const preloadedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    resources.forEach((resource, index) => {
      const key = `resource-${index}`
      if (!preloadedRef.current.has(key)) {
        preloadComponent(resource)
          .then(() => {
            preloadedRef.current.add(key)
          })
          .catch(error => {
            console.warn(`Failed to preload resource ${index}:`, error)
          })
      }
    })
  }, [resources])
}

// Componente para preload de imagens
export function ImagePreloader({ images }: { images: string[] }) {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  return null
}
