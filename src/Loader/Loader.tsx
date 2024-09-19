import { Params, redirect } from "react-router-dom";
import { Place, pseudoREST } from "@utils/const";
import { capitalize } from "@utils/utils";
import { pathPlace } from "@utils/routes";

export function LoadPlace({ params: { place } }: {params: Params<'place'>}) {
  if (!place) return redirect(pathPlace)
  const thePlace = capitalize(place);
  const destination = pseudoREST.destinations.find(({ name }) => name === thePlace) as Place;
  return { destination }
}
