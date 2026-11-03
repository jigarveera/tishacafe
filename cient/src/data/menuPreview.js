import groups from './menuCatalog.json'
import burgerImage from '../assets/food/vegetarian-burger-concept.webp'
import momosImage from '../assets/food/momos-concept.webp'
import pizzaImage from '../assets/food/pizza-concept.webp'

const imageById = {
  'district-049': burgerImage,
  'district-060': momosImage,
  'district-073': pizzaImage,
}

const categoryLabels = {
  STARTER: 'Starters',
  FRIES: 'Fries',
  BURGERS: 'Burgers',
  'GRILL SANDWICH': 'Sandwiches',
  MOMOS: 'Momos',
  PIZZA: 'Pizza',
  PASTA: 'Pasta',
  DESSERT: 'Desserts',
  COFFEE: 'Coffee',
  SHAKES: 'Shakes',
  MOCKTAIL: 'Mocktails',
}

export const menuCategories = groups.map((group) => ({
  id: group.name,
  label: categoryLabels[group.name] ?? group.name,
  count: group.items.length,
}))

export const menuItems = groups.flatMap((group) => group.items.map((item) => ({
  id: item.id,
  name: item.name,
  category: group.name,
  categoryLabel: categoryLabels[group.name] ?? group.name,
  price: item.price_inr ?? item.variants?.find((variant) => variant.price_inr != null)?.price_inr ?? null,
  variants: item.variants ?? [],
  ingredients: item.ingredients_as_listed ?? [],
  image: imageById[item.id] ?? null,
  imageIsConcept: Boolean(imageById[item.id]),
})))

export const featuredIds = ['district-049', 'district-060', 'district-073']
export const featuredItems = featuredIds.map((id) => menuItems.find((item) => item.id === id))

export const formatPrice = (price) => price == null ? 'Ask for price' : `₹${price.toLocaleString('en-IN')}`

export const variantLabel = (variant) => {
  if (variant.preparation) return variant.preparation
  if (variant.size_inches) return `${variant.size_inches} inch`
  if (variant.sauce) return variant.sauce
  return Object.entries(variant).filter(([key]) => key !== 'price_inr').map(([, value]) => value).join(' · ')
}
