import { getAllArticles } from '../lib/articles'
import styles from './page.module.css'

export default async function Home() {
  const articles = await getAllArticles()

  return (
    <main className={styles.main}>
      <h2 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Edgar Pavlovsky</h2>
      <a>technology entrepreneur</a>
      
      <h3 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Articles</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={`/articles/${article.slug}`} style={{ textDecoration: 'none' }}>
              {article.title} <span className={styles.articleDate}>{article.date}</span>
            </a>
          </li>
        ))}
      </ul>

      <a>----</a>
      <br />

      <a href="mailto:edgarpavlovsky@gmail.com">email</a> | <a href="https://x.com/edgarpavlovsky">twitter/x</a>
    </main>
  )
} 