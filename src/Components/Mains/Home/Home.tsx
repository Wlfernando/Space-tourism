import { useNavigate } from 'react-router-dom'
import './Home.css'
import { destination } from '@utils/routes'
import { randomDestination } from '@utils/utils';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main className='home' >
        <article className='home__article'>
          <h2 className='home__title-complement' >so, you want to travel to</h2>
          <h1 className='home__title' >space</h1>
          <p className='home__paragraph' >
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </article>
        <a
          className='home__circle'
          href={`/${destination}`}
          onClick={({ currentTarget, nativeEvent }) => {
            const unkownDestination = randomDestination();
            nativeEvent.preventDefault();
            currentTarget.classList.add('home__circle_animate');
            currentTarget.addEventListener('animationend',() => {navigate(unkownDestination)}, { once: true });
          }}
        >
          explore
        </a>
      </main>
    </>
  )
}
