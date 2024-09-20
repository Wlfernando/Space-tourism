export const [home, destination, crew, technology] = ['home', 'destination', 'crew', 'technology'];

export const linksNav = [
  [`/`, home],
  [`/${destination}`, destination],
  [`/${crew}`, crew],
  [`/${technology}`, technology],
];

export const [place, squad] = [`${destination}/:place?`, `${crew}/:squad?`]

const destinationNames = ['moon', 'mars', 'europa', 'titan'];
const [moon] = destinationNames;

const crewMembers = ['douglas-hurley', 'mark-shuttleworth', 'victor-glover', 'anousheh-ansari']
const [douglas] = crewMembers

export const [pathPlace, pathSquad] = [`/${destination}/${moon}`, `/${crew}/${douglas}`];

export const linksCrew = crewMembers
  .map(c => [`/${crew}/${c}`, ''])

export const linksDestination = destinationNames
  .map(d => [`/${destination}/${d}`, d]);
