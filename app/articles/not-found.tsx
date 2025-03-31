import styles from '../page.module.css'
import Link from 'next/link'

export default function ArticleNotFound() {
  return (
    <main className={styles.main}>
      <h2>Article Not Found</h2>
      <p>The article you are looking for does not exist.</p>
      <Link href="/">Return to Homepage</Link>
    </main>
  )
} 