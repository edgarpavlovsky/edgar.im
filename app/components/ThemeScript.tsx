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
          let theme = localStorage.getItem('theme');
          if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          
          document.documentElement.setAttribute('data-theme', theme);
          
          // Immediately apply theme colors to prevent any flash
          const bgColor = theme === 'dark' ? '#151515' : 'white';
          const textColor = theme === 'dark' ? '#f5f5f5' : 'black';
          document.documentElement.style.backgroundColor = bgColor;
          document.documentElement.style.color = textColor;
          
          // Update theme-color meta tag for Android devices
          const metaThemeColor = document.querySelector('meta[name="theme-color"]');
          if (metaThemeColor) {
            metaThemeColor.setAttribute('content', bgColor);
          }
          
          // Update iOS status bar style
          const metaStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
          if (metaStatusBar) {
            metaStatusBar.setAttribute('content', theme === 'dark' ? 'black-translucent' : 'default');
          }
          
          // Make the page visible once theme is applied
          document.documentElement.style.visibility = 'visible';
        } catch (e) {
          // Fallback to light theme
          document.documentElement.setAttribute('data-theme', 'light');
          document.documentElement.style.visibility = 'visible';
        }
      })();
    `}</Script>
  )
} 