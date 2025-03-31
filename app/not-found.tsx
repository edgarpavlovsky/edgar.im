import styles from './page.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return to Homepage</Link>
    </main>
  )
} 