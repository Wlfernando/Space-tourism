import './MainWithTitle.css'

export default function MainWithTitle({
  className,
  title,
  before,
  children,
}: {
  className: string;
  title: string;
  before: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={`main ${className}`}>
        <h1 className="main__title">
          <span className="main__before-title">{before + ' '}</span>
          {title}
        </h1>
        {children}
      </main>
    </>
  )
}
