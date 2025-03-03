'use client'
import styles from './Footer.module.css'
import { useRouter } from 'next/navigation'
export default function Footer() {
  const router = useRouter();
  const callingPush = () => router.push("/about")
  return (
    <footer className={styles.footer}>
      <button onClick={router.back}>Back</button>
      <button onClick={callingPush}>Home</button>
      <button onClick={router.forward}>Forward</button>
    </footer>
  )
}