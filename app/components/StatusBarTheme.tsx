'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function StatusBarTheme() {
  const { theme, resolvedTheme } = useTheme()
  
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return
    
    // Use resolvedTheme which accounts for system preference
    const currentTheme = resolvedTheme || theme
    
    // Update iOS status bar style
    // const metaStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
    // if (metaStatusBar) {
    //   metaStatusBar.setAttribute('content', currentTheme === 'dark' ? '#151515' : '#f5f5f5')
    // }
    
    // Update theme-color meta tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentTheme === 'dark' ? '#151515' : '#f5f5f5')
    }
  }, [theme, resolvedTheme])
  
  // This component doesn't render anything visible
  return null
} 