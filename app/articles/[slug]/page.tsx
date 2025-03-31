import { getArticleBySlug, getAllArticles } from '../../../lib/articles'
import styles from '../../page.module.css'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className={styles.main} style={{ lineHeight: 1.75 }}>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <div className="article-content">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <p>
        <a href="/">← Back to home</a>
      </p>
    </main>
  )
} 