'use client'
import { ReactNode } from 'react'

export default function LastUpdatedCategories({children}: {children: ReactNode}) {
  const updatedTime = new Date().toLocaleTimeString()
  return (
    <section>
      <h4 suppressHydrationWarning>Articles as of: {updatedTime}</h4>
      {children}
    </section>
  )
}