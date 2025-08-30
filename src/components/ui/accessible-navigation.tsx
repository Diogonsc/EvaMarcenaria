import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AccessibleNavigationProps {
  children: ReactNode
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-orientation'?: 'horizontal' | 'vertical'
}

interface AccessibleNavigationItemProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  'aria-current'?: boolean
  'aria-expanded'?: boolean
  'aria-haspopup'?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
  disabled?: boolean
}

export function AccessibleNavigation({
  children,
  className,
  'aria-orientation': orientation = 'horizontal',
  ...props
}: AccessibleNavigationProps) {
  return (
    <nav
      role="navigation"
      aria-orientation={orientation}
      className={cn('', className)}
      {...props}
    >
      {children}
    </nav>
  )
}

export function AccessibleNavigationItem({
  children,
  className,
  href,
  onClick,
  disabled = false,
  ...props
}: AccessibleNavigationItemProps) {
  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
