import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'


export const metadata: Metadata = {
  title: 'Articler Reader',
  description: 'Application to read codecademy articles',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Navigation/>
          <main>
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  )
}
