'use client'
import { ARTICLES } from '../../../store/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
export default function ArticlesLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <>
      <section>
        <h1>Articles</h1>
        <ul>
          {Object.values(ARTICLES)
            .filter(article => !pathname.includes(article.slug))
            .map(article => (
              <li key={article.slug}>
                <Link href={`${pathname}/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
        </ul>
      </section>
      {children}
  </>
  )
}
