import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Check, Heart, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { formatPrice, menuItems, variantLabel } from '../../data/menuPreview.js'
import { cutoutsByItemId } from '../../data/storeVisuals.js'
import { useStore } from '../../context/store.js'
import StoreCategoryIcon from '../ui/StoreCategoryIcon.jsx'
import StoreProductCard from '../ui/StoreProductCard.jsx'
import StoreHeader from '../layout/StoreHeader.jsx'

function ProductGallery({ item }) {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  const images = [cutoutsByItemId[item.id], item.image].filter(Boolean)
  const image = images[active]
  const change = (direction) => setActive((current) => (current + direction + images.length) % images.length)

  return <section aria-label={`${item.name} images`} className="w-full min-w-0">
    <div className="relative grid aspect-[1.12] place-items-center overflow-hidden rounded-[38px] border border-white/80 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.95),rgba(226,230,212,.75)_45%,rgba(205,207,186,.65)_100%)] shadow-[0_24px_65px_rgba(48,39,31,.14),inset_0_1px_0_rgba(255,255,255,.9)] sm:aspect-square dark:border-white/10 dark:bg-[radial-gradient(circle_at_50%_45%,rgba(93,101,78,.65),rgba(34,39,31,.95)_75%)]">
      <div aria-hidden="true" className="absolute inset-8 rounded-[32px] border border-white/45" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-400/35 dark:border-sage-300/20" />
      <AnimatePresence mode="wait"><motion.div key={image ?? 'placeholder'} initial={reducedMotion ? false : { opacity: 0, x: 28, scale: .94 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0, x: -28, scale: .94 }} transition={{ duration: .4 }} drag={images.length > 1 ? 'x' : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={.25} onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 55) change(info.offset.x < 0 ? 1 : -1) }} className="relative z-10 grid h-[82%] w-[82%] place-items-center">
        {image ? <img src={image} alt={`Concept image of ${item.name}`} className={`h-full w-full ${image === cutoutsByItemId[item.id] ? 'object-contain drop-shadow-[0_25px_20px_rgba(48,39,31,.24)]' : 'rounded-[28px] object-cover'}`} /> : <StoreCategoryIcon type={item.category} className="size-[60%]" />}
      </motion.div></AnimatePresence>
      <span className="absolute bottom-5 left-5 z-20 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-coffee-700 backdrop-blur-xl dark:border-white/10 dark:bg-night-800/70 dark:text-cream-200">{image ? 'Concept imagery' : 'Image coming soon'}</span>
      {images.length > 1 && <span className="absolute bottom-5 right-5 z-20 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[10px] font-bold text-coffee-700 backdrop-blur-xl dark:border-white/10 dark:bg-night-800/70 dark:text-cream-200">{active + 1} / {images.length}</span>}
    </div>
    {images.length > 1 && <div className="mt-4 flex items-center justify-center gap-3">{images.map((src, index) => <button key={src} type="button" onClick={() => setActive(index)} aria-label={`Show ${item.name} image ${index + 1}`} aria-pressed={active === index} className={`${active === index ? 'border-sage-700 bg-sage-100 shadow-lg dark:border-sage-300' : 'border-white/70 bg-white/55 dark:border-white/10 dark:bg-white/5'} grid size-16 place-items-center overflow-hidden rounded-[22px] border-2 p-1 transition sm:size-19`}><img src={src} alt="" className="h-full w-full rounded-[15px] object-contain" /></button>)}</div>}
  </section>
}

export default function ProductPage() {
  const { id } = useParams()
  const item = menuItems.find((entry) => entry.id === id)
  const [variantIndex, setVariantIndex] = useState(0)
  const { liked, toggleLiked, cart, addToCart, setCartQuantity, setListOpen } = useStore()
  const reducedMotion = useReducedMotion()

  if (!item) return <main className="mx-auto min-h-[65vh] max-w-7xl px-4 py-20 text-center"><h1 className="font-serif text-5xl font-bold">We could not find that item.</h1><Link to="/store" className="mt-6 inline-block rounded-full bg-sage-700 px-6 py-3 text-sm font-bold text-white">Back to store</Link></main>

  const selectedVariant = item.variants[variantIndex] ?? item.variants[0]
  const variant = selectedVariant ? variantLabel(selectedVariant) : null
  const key = `${item.id}:${variant ?? 'default'}`
  const quantity = cart.find((entry) => entry.key === key)?.quantity ?? 0
  const price = selectedVariant?.price_inr ?? item.price
  const similar = menuItems.filter((entry) => entry.category === item.category && entry.id !== item.id).slice(0, 5)
  const isLiked = liked.includes(item.id)
  const add = () => addToCart(item, variant, 1, price)
  const buyNow = () => { add(); setListOpen(true) }

  return <main className="min-h-screen pb-26">
    <StoreHeader />
    <div className="sticky top-0 z-40 rounded-b-[30px] border-x border-b border-white/75 bg-cream-50/80 px-4 pb-3 pt-3 shadow-[0_18px_35px_rgba(48,39,31,.12)] backdrop-blur-3xl dark:border-white/10 dark:bg-night-900/85"><div className="mx-auto flex w-full max-w-6xl items-center gap-3"><AnimatePresence mode="wait" initial={false}>{quantity > 0 ? <motion.div key="counter" initial={reducedMotion ? false : { opacity: 0, scaleX: .7 }} animate={{ opacity: 1, scaleX: 1 }} exit={reducedMotion ? undefined : { opacity: 0, scaleX: .7 }} transition={{ duration: .28 }} className="flex h-13 w-full items-center justify-between rounded-full bg-sage-700 px-2 text-white shadow-[0_12px_28px_rgba(57,61,50,.22)] dark:bg-sage-300 dark:text-night-950"><button type="button" onClick={() => setCartQuantity(key, quantity - 1)} aria-label="Remove one from cart" className="grid size-10 place-items-center rounded-full bg-white/15"><Minus size={19} /></button><span className="text-sm font-bold">{quantity} in cart</span><button type="button" onClick={() => setCartQuantity(key, quantity + 1)} aria-label="Add one to cart" className="grid size-10 place-items-center rounded-full bg-white/15"><Plus size={19} /></button></motion.div> : <motion.div key="actions" initial={reducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -8 }} className="flex w-full gap-3"><button type="button" onClick={add} className="flex h-13 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-sage-700 bg-white/65 px-4 text-sm font-bold text-sage-800 shadow-sm dark:border-sage-300 dark:bg-white/10 dark:text-sage-300"><ShoppingBag size={17} /> Add to cart</button><button type="button" onClick={buyNow} className="h-13 min-w-0 flex-1 rounded-full bg-sage-700 px-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(57,61,50,.22)] dark:bg-sage-300 dark:text-night-950">Buy now</button></motion.div>}</AnimatePresence></div></div>

    <div className="mx-auto max-w-6xl px-4"><Link to="/store" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-sage-700 dark:text-sage-300"><ArrowLeft size={16} /> Store</Link>
      <div className="mt-4 grid items-start gap-7 lg:grid-cols-[1.04fr_.96fr] lg:gap-12"><ProductGallery key={item.id} item={item} />
        <section className="rounded-[34px] border border-white/75 bg-white/55 p-6 shadow-[0_18px_50px_rgba(48,39,31,.09)] backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-white/5"><div className="flex items-start justify-between gap-3"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-sage-700 dark:text-sage-300">{item.categoryLabel}</p><button type="button" onClick={() => toggleLiked(item.id)} aria-label={isLiked ? `Remove ${item.name} from liked` : `Like ${item.name}`} className={`${isLiked ? 'bg-coffee-700 text-white' : 'bg-white/75 text-coffee-700 dark:bg-white/10 dark:text-cream-100'} grid size-11 shrink-0 place-items-center rounded-full border border-white/75 dark:border-white/10`}><Heart size={19} fill={isLiked ? 'currentColor' : 'none'} /></button></div><h1 className="mt-2 font-serif text-[clamp(2.8rem,5vw,5.2rem)] font-bold leading-[.95] tracking-tight">{item.name}</h1><p className="mt-6 text-3xl font-bold text-sage-800 dark:text-sage-300">{formatPrice(price)}</p><p className="mt-2 text-xs leading-5 text-coffee-500 dark:text-cream-300">Price and availability need café confirmation before checkout.</p>
          {item.variants.length > 0 && <fieldset className="mt-8"><legend className="text-xs font-bold uppercase tracking-[.15em] text-coffee-600 dark:text-cream-300">Choose {item.category === 'PIZZA' ? 'size' : item.category === 'MOMOS' ? 'preparation' : 'option'}</legend><div className="mt-3 flex flex-wrap gap-2">{item.variants.map((option, index) => <button key={`${variantLabel(option)}-${index}`} type="button" onClick={() => setVariantIndex(index)} aria-pressed={variantIndex === index} className={`${variantIndex === index ? 'border-sage-700 bg-sage-700 text-white dark:border-sage-300 dark:bg-sage-300 dark:text-night-950' : 'border-white/75 bg-white/70 text-coffee-800 dark:border-white/10 dark:bg-white/5 dark:text-cream-100'} inline-flex items-center gap-1.5 rounded-[17px] border px-4 py-3 text-xs font-bold shadow-sm transition`}>{variantIndex === index && <Check size={13} />}{variantLabel(option)}{option.price_inr != null && <span className="opacity-75">· {formatPrice(option.price_inr)}</span>}</button>)}</div></fieldset>}
          {item.ingredients.length > 0 && <div className="mt-8 border-t border-coffee-200/70 pt-6 dark:border-white/10"><p className="text-xs font-bold uppercase tracking-[.15em] text-coffee-600 dark:text-cream-300">What goes in</p><p className="mt-3 text-sm leading-7 text-coffee-700 dark:text-cream-200">{item.ingredients.join(' · ')}</p></div>}
          <div className="mt-8 rounded-[25px] border border-white/75 bg-sage-100/70 p-5 text-sm leading-6 text-coffee-700 dark:border-white/10 dark:bg-sage-900/25 dark:text-cream-200"><p className="font-serif text-2xl font-bold">Made for your café moment.</p><p className="mt-2">Choose your option, add it to your cart, and keep exploring Tisha’s menu.</p></div>
        </section></div>
      {similar.length > 0 && <section aria-labelledby="related-heading" className="mt-15"><div className="flex items-end justify-between gap-3"><h2 id="related-heading" className="font-serif text-4xl font-bold">You may also like</h2><Link to={`/search?category=${encodeURIComponent(item.category)}`} className="text-xs font-bold text-sage-700 dark:text-sage-300">See all</Link></div><div className="mt-2 flex gap-4 overflow-x-auto pb-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{similar.map((entry) => <StoreProductCard key={entry.id} item={entry} />)}</div></section>}
    </div>
  </main>
}
