import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import ThemeInitializer from './components/ThemeInitializer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata = {
  title: 'Edgar Pavlovsky',
  description: 'Technology entrepreneur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* This script must run synchronously before anything renders to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  let theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  
                  document.documentElement.setAttribute('data-theme', theme);
                  
                  // Immediately apply theme colors to prevent any flash
                  if (theme === 'dark') {
                    document.documentElement.style.backgroundColor = '#151515';
                    document.documentElement.style.color = '#f5f5f5';
                  } else {
                    document.documentElement.style.backgroundColor = 'white';
                    document.documentElement.style.color = 'black';
                  }
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeInitializer />
        {children}
        <ThemeToggle />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 