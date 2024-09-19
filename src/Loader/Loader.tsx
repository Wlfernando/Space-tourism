import {  Params, redirect } from "react-router-dom";
import { Place, pseudoREST } from "@utils/const";
import { capitalize } from "@utils/utils";
import { pathPlace } from "@utils/routes";

type PlaceParam = {params: Params<'place'>}

export function loadDestination({params: { place }}: PlaceParam) {
  return !place ? redirect(pathPlace) : null
}

export function LoadPlace({ params: { place } }: PlaceParam) {
  const thePlace = capitalize(place!);
  const destination = pseudoREST.destinations.find(({ name }) => name === thePlace) as Place;
  return { destination }
}
