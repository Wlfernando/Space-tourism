export const [home, destination, crew, technology] = ['home', 'destination', 'crew', 'technology'];

export const linksNav = [
  [`/`, home],
  [`/${destination}`, destination],
  [`/${crew}`, crew],
  [`/${technology}`, technology],
];

export const [place, squad, tech] = [`${destination}/:place?`, `${crew}/:squad?`, `${technology}/:tech?`]

export const destinationNames = ['moon', 'mars', 'europa', 'titan'];
const [moon] = destinationNames;

const crewMembers = ['douglas-hurley', 'mark-shuttleworth', 'victor-glover', 'anousheh-ansari']
const [douglas] = crewMembers

const techEndpoints = ['launch-vehicle', 'spaceport', 'space-capsule']
const [launch] = techEndpoints

export const [pathPlace, pathSquad, pathLauch] = [`/${destination}/${moon}`, `/${crew}/${douglas}`, `/${technology}/${launch}`];

export const linksCrew = crewMembers
  .map(c => [`/${crew}/${c}`, ''])

export const linksDestination = destinationNames
  .map(d => [`/${destination}/${d}`, d]);

export const linksTech = techEndpoints
  .map((t, i) => [`/${technology}/${t}`, String(i + 1)])
