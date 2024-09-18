import {  Params } from "react-router-dom";
import { Place, pseudoREST } from "@utils/const";
import { capitalize } from "@utils/utils";

export function loadDestination({ params }: {params: Params<'place'>}) {
  const place = capitalize(params.place!);
  const destination = pseudoREST.destinations.find(({ name }) => name === place) as Place;
  return { destination }
}
