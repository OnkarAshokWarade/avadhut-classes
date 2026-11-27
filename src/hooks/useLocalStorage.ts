import { useEffect, useState } from 'react'

/**
 * useState that is also saved in the browser (localStorage), so the value survives a page reload.
 * If storage is blocked (private mode, strict settings) it quietly behaves like normal useState.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved === null ? initialValue : (JSON.parse(saved) as T)
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage unavailable: keep the value in memory only.
    }
  }, [key, value])

  return [value, setValue] as const
}
