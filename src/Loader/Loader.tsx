import { Params, redirect } from "react-router-dom";
import { Member, Place, pseudoREST } from "@utils/const";
import { capitalize, readName } from "@utils/utils";
import { pathPlace, pathSquad } from "@utils/routes";

export function loadPlace({ params: { place } }: {params: Params<'place'>}) {
  if (!place) return redirect(pathPlace)
  const thePlace = capitalize(place);
  const destination = pseudoREST.destinations.find(({ name }) => name === thePlace) as Place;
  return { destination }
}

export function loadSquad({ params: { squad }}: {params: Params<'squad'>}) {
  if (!squad) return redirect(pathSquad)
  const theSquadMember = readName(squad)
  const member = pseudoREST.crew.find(({name}) => name === theSquadMember) as Member
  return { member }
} 