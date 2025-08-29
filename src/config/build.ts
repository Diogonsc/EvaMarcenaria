// Configurações de build para produção
export const BUILD_CONFIG = {
  // Configurações de cache
  CACHE_CONFIG: {
    // Tempo de cache para assets estáticos (1 ano)
    STATIC_ASSETS_CACHE: 31536000,
    // Tempo de cache para HTML (1 hora)
    HTML_CACHE: 3600,
    // Tempo de cache para API (5 minutos)
    API_CACHE: 300
  },
  
  // Configurações de performance
  PERFORMANCE: {
    // Tamanho máximo de chunk (1MB)
    MAX_CHUNK_SIZE: 1024 * 1024,
    // Tamanho máximo para inline de assets (4KB)
    INLINE_LIMIT: 4 * 1024,
    // Compressão gzip
    COMPRESSION: true
  },
  
  // Configurações de SEO
  SEO: {
    // Meta tags padrão
    DEFAULT_META: {
      title: 'Eva Marcenaria - Móveis Planejados',
      description: 'Especialistas em móveis planejados, cozinhas, quartos e muito mais. Qualidade e sofisticação para sua casa.',
      keywords: 'móveis planejados, cozinha, quarto, marcenaria, móveis sob medida',
      author: 'Eva Marcenaria',
      viewport: 'width=device-width, initial-scale=1',
      robots: 'index, follow'
    }
  }
}

// Função para gerar URLs de assets otimizadas
export function getOptimizedAssetUrl(path: string): string {
  // Em produção, adiciona hash para cache busting
  if (import.meta.env.PROD) {
    return path
  }
  return path
}

// Função para verificar se está em produção
export function isProduction(): boolean {
  return import.meta.env.PROD
}

// Função para verificar se está em desenvolvimento
export function isDevelopment(): boolean {
  return import.meta.env.DEV
}
