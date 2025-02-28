import { AUTHORS } from "../../../store/data"

export default function AuthorsPage({ params }: { params: { name: string } }) {
  const author = AUTHORS[params.name]

  return (
    <section>
      <h1>Articles by {params.name}</h1>
      <ul>
        {author && author.articles.map((slug) => (
          <li key={slug}>
            <a href={"/articles/replace-me"}>{slug}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
