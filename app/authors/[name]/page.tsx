import { AUTHORS } from "../../../store/data"
import Link from 'next/link'

export default function AuthorsPage({ params }: { params: { name: string } }) {
  const author = AUTHORS[params.name]

  return (
    <section>
      <h1>Articles by {params.name}</h1>
      <ul>
        {author && author.articles.map((slug) => (
          <li key={slug}>
            <Link href={"/articles/replace-me"}>{slug}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
