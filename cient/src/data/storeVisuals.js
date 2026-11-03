import pizza from '../assets/food/pizza-cutout.webp'
import burger from '../assets/food/burger-cutout.webp'
import momos from '../assets/food/momos-cutout.webp'
import cappuccino from '../assets/food/cappuccino-cutout.webp'
import cheesecake from '../assets/food/cheesecake-cutout.webp'
import { menuCategories, menuItems } from './menuPreview.js'

export const cutoutsByItemId = Object.freeze({
  'district-073': pizza,
  'district-049': burger,
  'district-060': momos,
  'district-001': cappuccino,
  'district-091': cheesecake,
})

const featuredCategoryIds = ['BURGERS', 'PIZZA', 'MOMOS', 'COFFEE', 'FRIES', 'DESSERT']
export const storeCategories = Object.freeze([
  ...featuredCategoryIds.map((id) => menuCategories.find((category) => category.id === id)),
  ...menuCategories.filter((category) => !featuredCategoryIds.includes(category.id)),
])

export const storeRows = Object.freeze([
  { id: 'trending', label: 'Trending now', ids: ['district-073', 'district-049', 'district-060', 'district-001', 'district-091'], searchCategory: null },
  { id: 'snacks', label: 'All snacks', ids: ['district-049', 'district-060', 'district-043', 'district-033', 'district-073'], searchCategory: null },
  ...menuCategories.map((category) => ({
    id: category.id.toLowerCase().replaceAll(' ', '-'),
    label: category.label,
    ids: menuItems.filter((item) => item.category === category.id).map((item) => item.id),
    searchCategory: category.id,
  })),
])
