import { useLoaderData } from "react-router-dom";
import MainWithTitle from "../MainWithTitle/MainWithTitle";
import { Member } from "@utils/const";
import Nav from "@Nav";
import { linksCrew } from "@utils/routes";
import './Crew.css'

export default function Crew() {
  const { member: {
    name,
    images,
    role,
    bio,
  }} = useLoaderData() as { member: Member }

  return (
    <>
      <MainWithTitle className="crew" before="02" title="meet your crew" >
        <div className="crew__text" >
          <article className="crew__info" >
            <p className="crew__role" >{role}</p>
            <h2 className="crew__name" >{name}</h2>
            <p className="crew__bio" >{bio}</p>
          </article>
          <Nav links={linksCrew} classMod="crew" />
        </div>
        <picture className="crew__pic">
          <source srcSet={images.webp} />
          <img src={images.png} alt="crew member" />
        </picture>
      </MainWithTitle>
    </>
  )
}