export const [home, destination, crew, technology] = ['home', 'destination', 'crew', 'technology'];

export const linksNav = [
  [`/`, home],
  [`/${destination}`, destination],
  [`/${crew}`, crew],
  [`/${technology}`, technology],
];

export const [place] = [`${destination}/:place?`]

const destinationNames = ['moon', 'mars', 'europa', 'titan'];
const [moon] = destinationNames;

export const [pathPlace] = [`/${destination}/${moon}`];

export const linksDestination = destinationNames
  .map(d => [`/${destination}/${d}`, d]);
