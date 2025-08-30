import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AccessibleListProps {
  children: ReactNode
  className?: string
  role?: 'list' | 'listbox' | 'menu' | 'tablist' | 'tree'
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-multiselectable'?: boolean
  'aria-orientation'?: 'horizontal' | 'vertical'
}

interface AccessibleListItemProps {
  children: ReactNode
  className?: string
  role?: 'listitem' | 'option' | 'menuitem' | 'tab' | 'treeitem'
  'aria-selected'?: boolean
  'aria-expanded'?: boolean
  'aria-current'?: boolean
  'aria-disabled'?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
}

export function AccessibleList({
  children,
  className,
  role = 'list',
  ...props
}: AccessibleListProps) {
  return (
    <div
      role={role}
      className={cn('', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AccessibleListItem({
  children,
  className,
  role = 'listitem',
  ...props
}: AccessibleListItemProps) {
  return (
    <div
      role={role}
      className={cn('', className)}
      {...props}
    >
      {children}
    </div>
  )
}
