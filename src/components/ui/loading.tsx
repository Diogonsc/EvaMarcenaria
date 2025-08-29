interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  text?: string
  className?: string
}

export function Loading({ 
  size = 'md', 
  variant = 'spinner', 
  text = 'Carregando...',
  className = ''
}: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const renderSpinner = () => (
    <div className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}></div>
  )

  const renderDots = () => (
    <div className="flex space-x-1">
      <div className={`animate-bounce bg-blue-600 rounded-full ${sizeClasses[size]}`} style={{ animationDelay: '0ms' }}></div>
      <div className={`animate-bounce bg-blue-600 rounded-full ${sizeClasses[size]}`} style={{ animationDelay: '150ms' }}></div>
      <div className={`animate-bounce bg-blue-600 rounded-full ${sizeClasses[size]}`} style={{ animationDelay: '300ms' }}></div>
    </div>
  )

  const renderPulse = () => (
    <div className={`animate-pulse bg-blue-600 rounded-full ${sizeClasses[size]}`}></div>
  )

  const renderLoading = () => {
    switch (variant) {
      case 'dots':
        return renderDots()
      case 'pulse':
        return renderPulse()
      default:
        return renderSpinner()
    }
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {renderLoading()}
      {text && (
        <span className={`ml-3 text-gray-600 ${textSizes[size]}`}>
          {text}
        </span>
      )}
    </div>
  )
}

// Componente específico para loading de páginas
export function PageLoading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loading size="lg" text="Carregando página..." />
    </div>
  )
}

// Componente para loading de componentes menores
export function ComponentLoading() {
  return (
    <div className="flex items-center justify-center py-8">
      <Loading size="md" text="Carregando..." />
    </div>
  )
}
