import { useEffect, useCallback } from 'react'

export function useKeyboardNavigation(
  onEscape?: () => void,
  onEnter?: () => void,
  onSpace?: () => void
) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          if (onEscape) {
            event.preventDefault()
            onEscape()
          }
          break
        case 'Enter':
          if (onEnter) {
            event.preventDefault()
            onEnter()
          }
          break
        case ' ':
          if (onSpace) {
            event.preventDefault()
            onSpace()
          }
          break
      }
    },
    [onEscape, onEnter, onSpace]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
