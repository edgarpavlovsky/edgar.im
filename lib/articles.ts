import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'articles')

export type Article = {
  slug: string
  title: string
  date: string
  content: string
}

export async function getAllArticles(): Promise<Article[]> {
  // Create articles directory if it doesn't exist
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory)
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: fileName.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        content: content
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return articles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      content: content
    }
  } catch {
    return null
  }
} 