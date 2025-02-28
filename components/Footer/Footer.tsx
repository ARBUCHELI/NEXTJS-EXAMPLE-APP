'use client'
import styles from './Footer.module.css'

export default function Footer() {
  const router = "REPLACE ME"

  return (
    <footer className={styles.footer}>
      <button>Back</button>
      <button>Home</button>
      <button>Forward</button>
    </footer>
  )
}