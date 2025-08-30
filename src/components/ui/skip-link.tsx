import { useEffect, useState } from 'react'

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Manter visível por um tempo para permitir que o usuário veja
        setTimeout(() => setIsVisible(false), 3000)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Pular para o conteúdo principal
    </a>
  )
}
