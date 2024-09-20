import data from './data.json'
import { formatSrcPhotos } from './utils'

export type PseudoREST = typeof data;
export type Destinations = PseudoREST['destinations'];
export type Place = Destinations[number];
export type Crew = PseudoREST['crew'];
export type Member = Crew[number]

export const pseudoREST = formatSrcPhotos(data)
