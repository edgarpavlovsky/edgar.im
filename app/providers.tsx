'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
      // Disable SSR flash
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
} 