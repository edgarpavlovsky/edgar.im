import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import StatusBarTheme from './components/StatusBarTheme'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Viewport } from 'next'
import { Providers } from './providers'

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* iOS-specific meta tags for status bar appearance */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Providers>
          {children}
          <ThemeToggle />
          <StatusBarTheme />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
} 