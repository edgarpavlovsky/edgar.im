'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

function setThemeOnDocument(theme: 'light' | 'dark') {
  // Set theme attribute which our CSS responds to
  document.documentElement.setAttribute('data-theme', theme)
  
  // Update iOS status bar style
  const metaStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (metaStatusBar) {
    metaStatusBar.setAttribute('content', theme === 'dark' ? 'black-translucent' : 'default');
  }
  
  // Update theme-color meta tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#151515' : 'white');
  }
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

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