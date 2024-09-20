import { Params, redirect } from "react-router-dom";
import { capitalize, get, readName, readTech } from "@utils/utils";
import { pathLauch, pathPlace, pathSquad } from "@utils/routes";

export function loadPlace({ params: { place } }: {params: Params<'place'>}) {
  if (!place) return redirect(pathPlace)
  const thePlace = capitalize(place);
  const destination = get('destinations', thePlace);
  return { destination }
}

export function loadSquad({ params: { squad }}: {params: Params<'squad'>}) {
  if (!squad) return redirect(pathSquad)
  const theSquadMember = readName(squad)
  const member = get('crew', theSquadMember);
  return { member }
}

export function loadTech({ params: { tech }}: {params: Params<'tech'>}) {
  if (!tech) return redirect(pathLauch)
  const techName = readTech(tech)
  const theTech = get('technology', techName);
  return { tech: theTech }
}