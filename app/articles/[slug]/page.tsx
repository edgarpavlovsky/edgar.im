import { getArticleBySlug, getAllArticles } from '../../../lib/articles'
import styles from '../../page.module.css'

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
    return <div>Article not found</div>
  }

  return (
    <main className={styles.main} style={{ lineHeight: 1.75 }}>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <p>
        <a href="/">← Back to home</a>
      </p>
    </main>
  )
} 