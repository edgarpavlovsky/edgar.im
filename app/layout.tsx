import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import ThemeScript from './components/ThemeScript'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cookies } from 'next/headers'
import './theme-init.css'
import './globals.css'
import { Viewport } from 'next'

export const metadata = {
  title: 'Edgar Pavlovsky',
  description: 'Technology entrepreneur',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#151515' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get theme preference from cookies on the server
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')
  const theme = themeCookie?.value || 'light'
  
  // Determine initial colors
  const backgroundColor = theme === 'dark' ? '#151515' : 'white'
  const textColor = theme === 'dark' ? '#f5f5f5' : 'black'
  const statusBarStyle = theme === 'dark' ? 'black-translucent' : 'default'
  
  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning>
      <head>
        {/* Server-side initial styles to avoid flash */}
        <style>{`
          :root {
            background-color: ${backgroundColor};
            color: ${textColor};
          }
        `}</style>
        
        {/* iOS-specific meta tags for status bar appearance */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={statusBarStyle} />
        <meta name="theme-color" content={backgroundColor} />
        <ThemeScript />
        
        {/* Non-JS users will have this style */}
        <noscript>
          <style>{`
            html { visibility: visible !important; }
            body { background-color: white; color: black; }
          `}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        {children}
        <ThemeToggle />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 