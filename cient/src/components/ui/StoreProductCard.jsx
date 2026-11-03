import { useRef } from 'react'
import { Heart, Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatPrice, variantLabel } from '../../data/menuPreview.js'
import { cutoutsByItemId } from '../../data/storeVisuals.js'
import { useStore } from '../../context/store.js'
import StoreCategoryIcon from './StoreCategoryIcon.jsx'

export default function StoreProductCard({ item }) {
  const cardRef = useRef(null)
  const revealed = useInView(cardRef, { once: true, amount: 0.5 })
  const reducedMotion = useReducedMotion()
  const { liked, toggleLiked, cart, addToCart, setCartQuantity } = useStore()
  const cutout = cutoutsByItemId[item.id]
  const selected = liked.includes(item.id)
  const variant = item.variants[0]
  const variantName = variant ? variantLabel(variant) : null
  const key = `${item.id}:${variantName ?? 'default'}`
  const quantity = cart.find((entry) => entry.key === key)?.quantity ?? 0
  const price = variant?.price_inr ?? item.price

  return <motion.article ref={cardRef} whileHover={reducedMotion ? undefined : { y: -5 }} className="group relative mt-9 w-[calc((100vw-3rem)/2)] shrink-0 snap-start sm:mt-11 sm:w-[242px]">
    <div className="relative h-[260px] rounded-[23px] border border-white/75 bg-white/55 shadow-[0_18px_45px_rgba(48,39,31,.16),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-2xl sm:h-[286px] sm:rounded-[27px] dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
      <div aria-hidden="true" className="absolute left-1/2 top-5 size-24 -translate-x-1/2 rounded-full bg-sage-200/80 blur-2xl sm:size-32 dark:bg-sage-700/25" />
      <div className="pointer-events-none absolute inset-x-0 -top-9 z-10 flex justify-center sm:-top-11"><motion.div initial={reducedMotion ? false : { y: -150, opacity: 0 }} animate={revealed ? { y: reducedMotion ? 0 : [-150, 0, -13, 6, 0], opacity: 1 } : { y: -150, opacity: 0 }} transition={reducedMotion ? { duration: 0 } : { y: { delay: .3, duration: 1.2, times: [0, .42, .68, .84, 1], ease: 'easeOut' }, opacity: { delay: .3, duration: .3 } }} className="grid h-42 w-[90%] place-items-center drop-shadow-[0_18px_14px_rgba(48,39,31,.22)] sm:h-48 sm:w-45">
        {cutout ? <img src={cutout} alt="" loading="lazy" className="h-full w-full object-contain" /> : <div className="grid h-22 w-[63%] place-items-center rounded-full bg-sage-100/70 sm:h-27 sm:w-32 dark:bg-night-700/70"><StoreCategoryIcon type={item.category} className="size-11 sm:size-15" /></div>}
      </motion.div></div>
      <span className="absolute left-2 top-2 z-20 rounded-full border border-white/75 bg-cream-50/80 px-2.5 py-1.5 text-[11px] font-bold text-coffee-800 shadow-sm backdrop-blur-xl sm:left-3 sm:top-3 sm:px-3 sm:text-xs dark:border-white/10 dark:bg-night-800/80 dark:text-cream-100">{formatPrice(price)}</span>
      <button type="button" onClick={() => toggleLiked(item.id)} aria-label={selected ? `Remove ${item.name} from liked` : `Like ${item.name}`} className={`absolute right-2 top-2 z-20 grid size-7 place-items-center rounded-full border border-white/65 backdrop-blur-xl sm:right-3 sm:top-3 sm:size-8 ${selected ? 'bg-coffee-700 text-white' : 'bg-cream-50/75 text-coffee-700 dark:bg-night-800/75 dark:text-cream-100'}`}><Heart size={14} fill={selected ? 'currentColor' : 'none'} /></button>
      <div className="pointer-events-none absolute inset-x-2 bottom-2 z-20 rounded-[16px] border border-white/75 bg-cream-50/70 p-2 backdrop-blur-xl sm:inset-x-3 sm:bottom-3 sm:rounded-[19px] sm:p-3.5 dark:border-white/10 dark:bg-night-800/75">
        <p className="truncate text-[8px] font-bold uppercase tracking-[.09em] text-sage-700 sm:text-[10px] sm:tracking-[.13em] dark:text-sage-300">{item.categoryLabel}</p>
        <h3 className="mt-0.5 truncate font-serif text-sm font-bold leading-4 sm:mt-1 sm:text-[1.4rem] sm:leading-6">{item.name}</h3>
        <div className="mt-3"><AnimatePresence mode="wait" initial={false}>{quantity ? <motion.div key="quantity" initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .82 }} className="pointer-events-auto flex h-9 w-full items-center justify-between rounded-full bg-sage-700 text-white sm:h-11 dark:bg-sage-300 dark:text-night-950"><button type="button" onClick={() => setCartQuantity(key, quantity - 1)} aria-label={`Remove one ${item.name}`} className="grid size-9 place-items-center sm:size-11"><Minus size={16} /></button><span className="min-w-5 text-center text-sm font-bold sm:text-base">{quantity}</span><button type="button" onClick={() => setCartQuantity(key, quantity + 1)} aria-label={`Add one ${item.name}`} className="grid size-9 place-items-center sm:size-11"><Plus size={16} /></button></motion.div> : <motion.button key="add" type="button" initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .82 }} onClick={() => addToCart(item, variantName, 1, price)} className="pointer-events-auto h-9 w-full rounded-full bg-sage-700 px-3 text-sm font-bold text-white shadow-md sm:h-11 sm:text-base dark:bg-sage-300 dark:text-night-950">Add</motion.button>}</AnimatePresence></div>
      </div>
      <Link to={`/store/${item.id}`} aria-label={`View ${item.name}`} className="absolute inset-0 z-10 rounded-[23px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-700 sm:rounded-[27px]" />
    </div>
  </motion.article>
}
