import { useRef, useCallback } from 'react'

export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0)
  const lastCallTimer = useRef<NodeJS.Timeout | undefined>(undefined)

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now()

      if (now - lastCall.current >= delay) {
        callback(...args)
        lastCall.current = now
      } else {
        if (lastCallTimer.current) {
          clearTimeout(lastCallTimer.current)
        }

        lastCallTimer.current = setTimeout(() => {
          callback(...args)
          lastCall.current = Date.now()
        }, delay - (now - lastCall.current))
      }
    },
    [callback, delay]
  ) as T
}
