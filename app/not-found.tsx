'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function NotFound() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to home page after a short delay
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, 100)
    
    return () => clearTimeout(redirectTimer)
  }, [router])
  
  return (
    <main className={styles.main}>
      <h2>Page not found</h2>
      <p>Redirecting to home page...</p>
    </main>
  )
} 