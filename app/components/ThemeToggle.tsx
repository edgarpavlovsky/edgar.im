'use client'

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
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check cookie first, then localStorage, then default to light
    const cookieTheme = getCookie('theme')
    const localTheme = localStorage.getItem('theme')
    
    // Use stored theme if available, otherwise default to light mode
    const initialTheme = (cookieTheme || localTheme || 'light') as 'light' | 'dark'
    
    setTheme(initialTheme)
    setThemeOnDocument(initialTheme)
  }, [])

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    // Save to both localStorage and cookies
    localStorage.setItem('theme', newTheme)
    setCookie('theme', newTheme, 365) // Save for 1 year
    setThemeOnDocument(newTheme)
  }

  return (
    <div className={styles.themeToggle}>
      <button 
        onClick={() => toggleTheme('light')}
        className={theme === 'light' ? styles.active : ''}
      >
        Light
      </button>
      <span>|</span>
      <button 
        onClick={() => toggleTheme('dark')}
        className={theme === 'dark' ? styles.active : ''}
      >
        Dark
      </button>
    </div>
  )
} 