import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const persistedTheme = localStorage.getItem('theme')
                  const hasPersistedTheme = typeof persistedTheme === 'string'

                  if (hasPersistedTheme) {
                    return persistedTheme
                  }

                  const mql = window.matchMedia('(prefers-color-scheme: dark)')
                  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

                  if (hasMediaQueryPreference) {
                    return mql.matches ? 'dark' : 'light'
                  }

                  return 'light'
                }

                const theme = getInitialTheme()
                document.documentElement.setAttribute('data-theme', theme)
              })()
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
} 