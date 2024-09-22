import { useLoaderData } from "react-router-dom"
import './Destination.css'
import Nav from "@Nav";
import { linksDestination } from "@utils/routes";
import { Place } from "@utils/const";
import MainWithTitle from "../MainWithTitle/MainWithTitle";
import Article from "@Components/Article/Article";

export default function Destination() {
  const { destination: {
    name,
    images,
    description,
    distance,
    travel,
  } } = useLoaderData() as { destination: Place };

  return (
    <>
      <MainWithTitle className="destination" before="01" title="Pick your destination">
        <picture className="destination__img">
          <source srcSet={images.webp} />
          <img src={images.png} alt={name} />
        </picture>
        <div className="destination__text">
          <Nav links={linksDestination} classMod="destination" />
          <Article title={name} description={description} >
            <hr className="destination__line" />
            <div className="destination__length">
              <p>avg. distance</p>
              <p>{distance}</p>
            </div>
            <div className="destination__length">
              <p>est. travel time</p>
              <p>{travel}</p>
            </div>
          </Article>
        </div>
      </MainWithTitle>
    </>
  )
}
