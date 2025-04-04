import { getArticleBySlug, getAllArticles } from '../../../lib/articles'
import styles from '../../page.module.css'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// This function tells Next.js which paths to pre-render
export async function generateStaticParams() {
  const articles = await getAllArticles()
  
  // Generate params for valid article slugs
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Handle dynamic request for this page
export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  // Try to get the article
  const article = await getArticleBySlug(slug)

  // For static export, this should never happen since we only generate
  // pages for valid slugs, but we'll handle it just in case
  if (!article) {
    return (
      <main className={styles.main}>
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist.</p>
        <Link href="/">Return to Homepage</Link>
      </main>
    )
  }

  return (
    <main className={styles.main} style={{ lineHeight: 1.75 }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{article.title}</h1>
      <p style={{ marginBottom: '2rem', opacity: 0.7 }}>{article.date}</p>
      <div className="article-content">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <div className="desktop-back-link">
        <Link href="/">← Back to home</Link>
      </div>
    </main>
  )
} 