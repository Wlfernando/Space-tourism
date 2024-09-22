import { useLoaderData } from "react-router-dom";
import MainWithTitle from "../MainWithTitle/MainWithTitle";
import { Member } from "@utils/const";
import Nav from "@Nav";
import { linksCrew } from "@utils/routes";
import './Crew.css'
import Article from "@Components/Article/Article";

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
          <Article title={name} subTitle={role} description={bio} />
          <Nav links={linksCrew} classMod="crew" />
        </div>
        <picture className="crew__pic">
          <source srcSet={images.webp} />
          <img src={images.png} alt={name} />
        </picture>
      </MainWithTitle>
    </>
  )
}