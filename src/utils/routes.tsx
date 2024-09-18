const [home, destination, crew, technology] = ['home', 'destination', 'crew', 'technology'];

export const linksNav = [
  [`/`, home],
  [`/${destination}/moon`, destination],
  [`/${crew}`, crew],
  [`/${technology}`, technology],
];

export const [pathDestination] = [`${destination}/:place`]

export const linksDestination = ['moon', 'mars', 'europa', 'titan']
  .map(d => [`/${destination}/${d}`, d]);
