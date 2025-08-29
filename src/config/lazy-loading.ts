// Configurações para lazy loading
export const LAZY_LOADING_CONFIG = {
  // Tempo de delay para preload (em ms)
  preloadDelay: 1000,
  
  // Número máximo de tentativas de retry
  maxRetries: 3,
  
  // Delay entre tentativas (em ms)
  retryDelay: 2000,
  
  // Threshold para Intersection Observer
  intersectionThreshold: 0.1,
  
  // Root margin para Intersection Observer
  rootMargin: '50px',
}

// Função para criar lazy imports com retry
export function createLazyImport<T>(
  importFn: () => Promise<T>,
  retryCount: number = LAZY_LOADING_CONFIG.maxRetries
): () => Promise<T> {
  return async () => {
    let lastError: Error | null = null
    
    for (let i = 0; i <= retryCount; i++) {
      try {
        return await importFn()
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Erro desconhecido')
        
        if (i < retryCount) {
          // Aguarda antes de tentar novamente
          await new Promise(resolve => 
            setTimeout(resolve, LAZY_LOADING_CONFIG.retryDelay * (i + 1))
          )
        }
      }
    }
    
    throw lastError
  }
}

// Função para preload de componentes
export function preloadComponent<T>(importFn: () => Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      importFn()
        .then(resolve)
        .catch(reject)
    }, LAZY_LOADING_CONFIG.preloadDelay)
  })
}

// Configurações de performance
export const PERFORMANCE_CONFIG = {
  // Tamanho máximo do bundle antes de dividir
  maxBundleSize: 250 * 1024, // 250KB
  
  // Tempo máximo de carregamento antes de mostrar loading
  loadingDelay: 200, // 200ms
  
  // Cache de componentes carregados
  enableCache: true,
  
  // Preload de rotas adjacentes
  preloadAdjacentRoutes: true,
}

// Cache para componentes já carregados
const componentCache = new Map<string, any>()

export function getCachedComponent(key: string) {
  return componentCache.get(key)
}

export function setCachedComponent(key: string, component: any) {
  if (PERFORMANCE_CONFIG.enableCache) {
    componentCache.set(key, component)
  }
}

export function clearComponentCache() {
  componentCache.clear()
}
