"use client";

import UrlBar from "../UrlBar/UrlBar";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div>
      <UrlBar baseURL="http://localhost:4001" />
      <nav className={styles.nav}>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
        <Link href="/articles" className={pathname === "/articles" ? styles.active : ""}>Articles</Link>
        <Link href="/categories" className={pathname === "/categories" ? styles.active : ""}>Categories</Link>
      </nav>
    </div>
  );
}
