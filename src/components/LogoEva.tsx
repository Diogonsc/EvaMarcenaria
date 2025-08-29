import LogoEva from '@/assets/logo-marrom-eva.webp'

interface LogoEvaProps {
  isScrolled: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LogoEvaComponent({ isScrolled, className = '', size = 'md' }: LogoEvaProps) {
  const sizeClasses = {
    sm: 'h-16 w-auto',
    md: 'h-24 w-auto',
    lg: 'h-32 w-auto'
  }

  return (
    <picture>
      <source srcSet={LogoEva} type="image/png" />
      <img 
        src={LogoEva} 
        alt="Eva Marcenaria" 
        className={`${sizeClasses[size]} transition-all duration-300 ${className}`}
        style={{
          filter: isScrolled 
            ? 'brightness(0) saturate(100%) invert(30%) sepia(40%) saturate(150%) hue-rotate(15deg) brightness(0.8)' // --primary (#865e4a)
            : 'brightness(0) saturate(100%) invert(85%) sepia(25%) saturate(80%) hue-rotate(35deg) brightness(1.1)' // --bg-header (#ded4bc)
        }}
      />
    </picture>
  )
}
