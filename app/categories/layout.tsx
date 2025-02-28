'use client'
import { CATEGORIES } from '../../store/data'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h1>Categories</h1>
      <h2 suppressHydrationWarning>Categories as of: {new Date().toLocaleTimeString()}</h2>
      <ul>
        {Object.keys(CATEGORIES).map(slug => (
          <li key={slug}>
            <Link href={`/categories/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
      {children}
    </section>
  )
}