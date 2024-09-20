import { pseudoREST, type PseudoREST } from './const'

function normalizeImageSrc(url: string): string {
  return url.replace('./assets', '')
};

export function formatSrcPhotos(REST: PseudoREST): PseudoREST {
  const newObj: any = {};

  for (const category in REST) {
    const info = REST[category as keyof PseudoREST];
    const [first, second] = Object.keys(info[0].images);
    newObj[category] = [];

    info.forEach((src) => {
      const { images } = src;

      newObj[category].push({...src, images: {
        [first]: normalizeImageSrc(images[first as keyof typeof images]),
        [second]: normalizeImageSrc(images[second as keyof typeof images]),
      }})
    })
  }

  return newObj satisfies PseudoREST
};

export default function clone(item: any) {
  let memo: any;

  if (Array.isArray(item)) {
    memo = []
    item.forEach(i => memo.push(clone(i)))

  } else if (typeof item === 'object') {
    memo = {}
    Object.entries(item).forEach(([key, value]) => memo[key] = clone(value))

  } else {
    memo = item
  }
  
  return memo
}

export function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function readName(string: string) {
  return string.split('-').map(capitalize).join(' ')
}

export function readTech(string: string) {
  return capitalize(string).replace('-', ' ')
}

export function get(path: keyof PseudoREST, itemName: string) {
  return pseudoREST[path].find(({ name }) => name === itemName)
}
