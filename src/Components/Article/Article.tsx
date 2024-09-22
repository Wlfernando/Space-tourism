import './Article.css'

export default function Article({
  title,
  subTitle,
  description,
  children,
}: {
  title: string;
  subTitle?: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
    <article className={`article${Boolean(children) ? ' article_children' : ''}`} >
      {subTitle && <h3 className="article__sub-title" >{subTitle}</h3>}
      <h2 className={`article__${subTitle ? 'title' : 'only-title' }`} >{title}</h2>
      <p className="article__description" >{description}</p>
      {children}
    </article>
    </>
  )
}