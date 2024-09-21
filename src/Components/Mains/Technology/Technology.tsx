import Nav from "@Components/Nav/Nav";
import MainWithTitle from "../MainWithTitle/MainWithTitle";
import { linksTech } from "@utils/routes";
import { useLoaderData } from "react-router-dom";
import { Tech } from "@utils/const";
import './Technology.css'

export default function Technology() {
  const {tech: {
    name,
    images,
    description,
  }} = useLoaderData() as { tech: Tech };

  return (
    <>
      <MainWithTitle className="tech" before="03" title='space launch 101' >
        <Nav links={linksTech} classMod="tech" />
        <article className="tech__article" >
          <h3 className="tech__terminology" >The terminology...</h3>
          <h2 className="tech__name" >{name}</h2>
          <p className="tech__description" >{description}</p>
        </article>
        <picture className="tech__pic" >
          <source srcSet={images.landscape} media="(max-width:1024px)" />
          <img className="tech__img" src={images.portrait} alt={name} />
        </picture>
      </MainWithTitle>
    </>
  )
}
