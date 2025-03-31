'use client'

import { useEffect } from 'react'

export default function ThemeInitializer() {
  useEffect(() => {
    function getInitialTheme() {
      try {
        const persistedTheme = localStorage.getItem('theme')
        if (persistedTheme) {
          return persistedTheme
        }
        
        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        if (mql.matches) {
          return 'dark'
        }
      } catch (e) {
        // If localStorage is not available or other errors occur
        console.error('Error accessing theme preferences:', e)
      }
      
      return 'light' // Default to light theme
    }

    const theme = getInitialTheme()
    document.documentElement.setAttribute('data-theme', theme)
    
    // Apply theme colors immediately to prevent flash
    if (theme === 'dark') {
      document.documentElement.style.backgroundColor = '#151515'
      document.documentElement.style.color = '#f5f5f5'
      
      // Update status bar color for mobile
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#151515')
      }
    } else {
      document.documentElement.style.backgroundColor = 'white'
      document.documentElement.style.color = 'black'
      
      // Update status bar color for mobile
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', 'white')
      }
    }
    
    // Make the page visible once the theme is applied
    document.documentElement.style.visibility = 'visible'
  }, [])

  return null
} 