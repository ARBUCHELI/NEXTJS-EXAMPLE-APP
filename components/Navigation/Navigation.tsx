"use client";

import UrlBar from "../UrlBar/UrlBar";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <UrlBar baseURL="http://localhost:4001" />
      <nav className={styles.nav}>
        <a href="/about">About</a>
        <a href="/articles">Articles</a>
        <a href="/categories">Categories</a>
      </nav>
    </div>
  );
}
