import { ARTICLES } from '../../../store/data'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.css'
export default function ArticlePage({ params }: { params: { titles?: string[] } }) {
  const foundArticles = params.titles?.map(title => ARTICLES[title]) || [];
  
  return (
    <section className={styles.articlesContainer}>
      {foundArticles?.map((article, idx) => (
        article ?
          (<article key={article.slug}>
            <h1 className={styles.title}>{article.title}</h1>
            <p>By <Link href={`/authors/${article.author}`}>{article.author}</Link></p>
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </article>)
          // eslint-disable-next-line react/jsx-key
          : (<h1 className={styles.notFound}>No article found for with title: {params.titles?.[idx]}</h1>)))}
      {(!foundArticles || foundArticles.length === 0) && <h1>No articles to display...</h1>}
  </section>
  )
}
