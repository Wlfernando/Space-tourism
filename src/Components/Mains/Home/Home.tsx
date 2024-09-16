import './Home.css'

export default function Home() {
  return (
    <>
      <main className='home' >
        <section className="home__container">
          <article className='home__article'>
            <h2 className='home__title-complement' >so, you want to travel to</h2>
            <h1 className='home__title' >space</h1>
            <p className='home__paragraph' >
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
              Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </article>
          <div className='home__circle'>
            <p>explore</p>
          </div>
        </section>
      </main>
    </>
  )
}
