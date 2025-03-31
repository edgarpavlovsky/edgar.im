import styles from './page.module.css'
import Link from 'next/link'

// This is a special page for static export that will be rendered as 404.html
export default function Custom404() {
  return (
    <main className={styles.main}>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return to Homepage</Link>
    </main>
  )
} 