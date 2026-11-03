import { Heart, Minus, Plus, Coffee, Pizza, Sandwich, Dessert, UtensilsCrossed } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatPrice, variantLabel } from '../../data/menuPreview.js'
import { useStore } from '../../context/store.js'

const icons = { COFFEE: Coffee, SHAKES: Coffee, MOCKTAIL: Coffee, PIZZA: Pizza, 'GRILL SANDWICH': Sandwich, DESSERT: Dessert }

export default function MenuCard({ item, compact = false }) {
  const { liked, toggleLiked, cart, addToCart, setCartQuantity } = useStore()
  const Icon = icons[item.category] ?? UtensilsCrossed
  const isLiked = liked.includes(item.id)
  const firstVariant = item.variants[0]
  const variant = firstVariant ? variantLabel(firstVariant) : null
  const key = `${item.id}:${variant ?? 'default'}`
  const quantity = cart.find((entry) => entry.key === key)?.quantity ?? 0
  const price = firstVariant?.price_inr ?? item.price
  return <motion.article whileHover={{ y: -6, rotateY: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/65 p-2.5 shadow-[0_16px_45px_rgba(48,39,31,.09)] backdrop-blur-xl [transform-style:preserve-3d] dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
    <div className={`${compact ? 'aspect-[1.15]' : 'aspect-[1.08]'} relative overflow-hidden rounded-[22px] bg-sage-100 dark:bg-night-800`}>
      {item.image ? <img src={item.image} alt={`Concept image for ${item.name}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /> : <div className="grid h-full w-full place-items-center bg-gradient-to-br from-sage-100 via-cream-300 to-coffee-200 dark:from-night-800 dark:via-night-700 dark:to-coffee-900"><Icon size={52} strokeWidth={1.1} className="text-sage-700/80 dark:text-sage-300/80" /></div>}
      <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-cream-50/80 px-3 py-1.5 text-xs font-bold text-coffee-800 backdrop-blur-lg dark:border-white/10 dark:bg-night-900/80 dark:text-cream-100">{formatPrice(price)}</span>
      <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-cream-50/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-coffee-700 backdrop-blur-lg dark:border-white/10 dark:bg-night-900/80 dark:text-cream-100">{item.categoryLabel}</span>
      <button type="button" onClick={() => toggleLiked(item.id)} aria-label={isLiked ? `Remove ${item.name} from liked` : `Like ${item.name}`} className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/60 backdrop-blur-xl transition hover:scale-110 ${isLiked ? 'bg-coffee-700 text-white' : 'bg-cream-50/85 text-coffee-700'}`}><Heart size={17} fill={isLiked ? 'currentColor' : 'none'} /></button>
    </div>
    <div className="flex flex-1 flex-col px-2 pb-2 pt-4"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-sage-700 dark:text-sage-300">District menu preview</p><Link to={`/store/${item.id}`} className="mt-1.5 font-serif text-2xl font-bold leading-7 text-coffee-900 hover:underline dark:text-cream-100">{item.name}</Link><div className="mt-auto flex justify-end pt-5"><AnimatePresence mode="wait" initial={false}>{quantity ? <motion.div key="counter" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} className="flex h-13 items-center rounded-full bg-sage-700 text-white dark:bg-sage-300 dark:text-night-950"><button type="button" onClick={() => setCartQuantity(key, quantity - 1)} aria-label={`Remove one ${item.name}`} className="grid size-11 place-items-center"><Minus size={17} /></button><span className="min-w-5 text-center text-sm font-bold">{quantity}</span><button type="button" onClick={() => setCartQuantity(key, quantity + 1)} aria-label={`Add one ${item.name}`} className="grid size-11 place-items-center"><Plus size={17} /></button></motion.div> : <motion.button key="add" type="button" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} onClick={() => addToCart(item, variant, 1, price)} className="h-13 rounded-full bg-sage-700 px-6 text-base font-bold text-white shadow-lg shadow-sage-900/15 dark:bg-sage-300 dark:text-night-950">Add</motion.button>}</AnimatePresence></div></div>
  </motion.article>
}
