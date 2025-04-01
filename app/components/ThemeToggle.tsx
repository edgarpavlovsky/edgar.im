'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Make sure component is mounted before showing UI
  // This prevents hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.themeToggle}>
      <button 
        onClick={() => setTheme('light')}
        className={theme === 'light' ? styles.active : ''}
      >
        Light
      </button>
      <span>|</span>
      <button 
        onClick={() => setTheme('dark')}
        className={theme === 'dark' ? styles.active : ''}
      >
        Dark
      </button>
    </div>
  )
} 