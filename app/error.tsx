'use client'

import { useEffect } from 'react'
import styles from './page.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <main className={styles.main}>
      <h2>Something went wrong</h2>
      <p>An unexpected error occurred. Please try again later.</p>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '8px 16px',
          backgroundColor: 'var(--background)',
          color: 'var(--text)',
          border: '1px solid var(--text)',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '16px',
        }}
      >
        Return to Homepage
      </button>
    </main>
  )
} 