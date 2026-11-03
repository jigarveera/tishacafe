// Candidate media from public listings. URLs are research references, not approved site assets.
// Move cafe-supplied originals into the matching src/assets folder when received.
export const assetFolders = Object.freeze({
  brand: 'src/assets/brand',
  food: 'src/assets/food',
  ambience: 'src/assets/ambience',
  menu: 'src/assets/menu',
  reviews: 'src/assets/reviews',
  reels: 'src/assets/reels',
})

export const siteConceptAssets = Object.freeze([
  { id: 'cafe-table', localPath: 'src/assets/food/cafe-table-concept.webp', type: 'food', generatedConcept: true },
  { id: 'vegetarian-burger', localPath: 'src/assets/food/vegetarian-burger-concept.webp', type: 'food', generatedConcept: true },
  { id: 'momos', localPath: 'src/assets/food/momos-concept.webp', type: 'food', generatedConcept: true },
  { id: 'pizza', localPath: 'src/assets/food/pizza-concept.webp', type: 'food', generatedConcept: true },
  { id: 'interior', localPath: 'src/assets/ambience/interior-concept.webp', type: 'ambience', generatedConcept: true },
  { id: 'pizza-cutout', localPath: 'src/assets/food/pizza-cutout.webp', type: 'food', generatedConcept: true },
  { id: 'burger-cutout', localPath: 'src/assets/food/burger-cutout.webp', type: 'food', generatedConcept: true },
  { id: 'momos-cutout', localPath: 'src/assets/food/momos-cutout.webp', type: 'food', generatedConcept: true },
  { id: 'cappuccino-cutout', localPath: 'src/assets/food/cappuccino-cutout.webp', type: 'beverage', generatedConcept: true },
  { id: 'cheesecake-cutout', localPath: 'src/assets/food/cheesecake-cutout.webp', type: 'dessert', generatedConcept: true },
])

export const candidateAssets = Object.freeze({
  menu: [
    ['district-beverages-1', 'https://b.zmtcdn.com/data/dining_catalog/5df/3cd247353ecf8cc3f63bedc5303505df.png'],
    ['district-food-1', 'https://b.zmtcdn.com/data/dining_catalog/ce8/b6a28777b6de4bb98c6ab806ad43ece8.png'],
    ['district-food-2', 'https://b.zmtcdn.com/data/dining_catalog/163/e3d02947376187d486f4b604d43a8163.png'],
    ['district-food-3', 'https://b.zmtcdn.com/data/dining_catalog/a9d/e19a312ddfd4304cf4cea19da7e15a9d.png'],
  ].map(([id, sourceUrl]) => ({ id, sourceUrl, localPath: null, source: 'District' })),
  unclassifiedListingPhotos: [
    'https://b.zmtcdn.com/data/pictures/5/22761435/b04f63c42896a1b2ec6f2a3adb7df78f.png',
    'https://b.zmtcdn.com/data/pictures/5/22761435/469901009e85f2075d058fb0bf0d4030.png',
    'https://b.zmtcdn.com/data/pictures/5/22761435/ee9430fb84d968c0d881c09cdf781399.jpg',
    'https://b.zmtcdn.com/data/pictures/5/22761435/2a96f3e5b9993833cffdb8af4a675e98.png',
    'https://b.zmtcdn.com/data/pictures/chains/5/22761435/1780495191db92d7a8-f869-47b8-afc7-04bac117cf4c.jpg',
  ].map((sourceUrl, index) => ({ id: `district-listing-${index + 1}`, sourceUrl, localPath: null, source: 'District' })),
})
