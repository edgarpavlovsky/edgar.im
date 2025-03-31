'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  return (
    <header className={styles.header}>
      {!isHomePage && (
        <Link href="/" className={styles.backLink}>
          ← home
        </Link>
      )}
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
    </header>
  )
} 