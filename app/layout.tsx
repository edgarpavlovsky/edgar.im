import React from 'react'
import Header from './components/Header'
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
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
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
      <body>
        <Providers>
          <Header />
          {children}
          <div className="desktop-theme-toggle">
            <ThemeToggle />
          </div>
          <StatusBarTheme />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
} 