'use client'

import Script from 'next/script'

export default function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
    >{`
      (function() {
        try {
          // Try to get theme from localStorage
          let theme = localStorage.getItem('theme');
          
          // If no theme is stored, check cookies next
          if (!theme) {
            const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
            if (themeCookie) {
              theme = themeCookie.split('=')[1];
            }
          }
          
          // If still no theme, use system preference
          if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          
          // Apply theme to document
          document.documentElement.setAttribute('data-theme', theme);
          
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
        } catch (e) {
          console.error('Theme initialization error:', e);
        }
      })();
    `}</Script>
  )
} 