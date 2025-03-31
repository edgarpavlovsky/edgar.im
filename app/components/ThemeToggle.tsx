'use client'

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

function setThemeOnDocument(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme)
  // Also set on html and body for redundancy
  document.body.style.backgroundColor = theme === 'dark' ? '#151515' : 'white'
  document.body.style.color = theme === 'dark' ? '#f5f5f5' : 'black'
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
    // Check cookie first, then localStorage, then system preference
    const cookieTheme = getCookie('theme')
    const localTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = (cookieTheme || localTheme || (systemPrefersDark ? 'dark' : 'light')) as 'light' | 'dark'
    
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