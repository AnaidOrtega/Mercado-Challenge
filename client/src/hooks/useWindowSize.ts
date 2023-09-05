import { useLayoutEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])
  return windowSize
}
