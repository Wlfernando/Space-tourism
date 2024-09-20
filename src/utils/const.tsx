import data from './data.json'
import { formatSrcPhotos } from './utils'

export type PseudoREST = typeof data;

type Destinations = PseudoREST['destinations'];
export type Place = Destinations[number];

type Crew = PseudoREST['crew'];
export type Member = Crew[number];

type Technologies = PseudoREST['technology'];
export type Tech = Technologies[number];

export const pseudoREST = formatSrcPhotos(data)
