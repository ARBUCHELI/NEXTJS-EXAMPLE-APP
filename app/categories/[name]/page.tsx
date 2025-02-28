'use client'

import { CATEGORIES, ARTICLES } from '../../../store/data'
import Link from 'next/link'

export default function CategoryPage( { params } : {
  params: { name: string }}) {
  const categoryName = params.name
  return (
    <section>
      <h2>Articles related to {categoryName}</h2>
      <ul>
        {CATEGORIES[categoryName]?.map(articleSlug => (
          <li key={articleSlug}>
            <Link href={`/articles/${articleSlug}`}>{ARTICLES[articleSlug].title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}



