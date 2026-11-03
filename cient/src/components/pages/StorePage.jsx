import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Heart, Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice, menuItems, variantLabel } from '../../data/menuPreview.js'
import { cutoutsByItemId, storeCategories, storeRows } from '../../data/storeVisuals.js'
import { useStore } from '../../context/store.js'
import StoreCategoryIcon from '../ui/StoreCategoryIcon.jsx'
import StoreProductCard from '../ui/StoreProductCard.jsx'
import StoreSearchBar from '../layout/StoreSearchBar.jsx'
import CategoryFadeSection from '../layout/CategoryFadeSection.jsx'
import cafePoster from '../../assets/food/cafe-table-concept.webp'
import pizzaPoster from '../../assets/food/pizza-concept.webp'
import burgerPoster from '../../assets/food/vegetarian-burger-concept.webp'

const slides = [
  { id: 'gather', title: 'Good food. Good company.', image: cafePoster, href: '/search', imagePosition: 'object-[65%_center]' },
  { id: 'pizza', title: 'Make it a pizza kind of day.', image: pizzaPoster, href: '/search?category=PIZZA', imagePosition: 'object-center' },
  { id: 'burger', title: 'Meet your next favorite bite.', image: burgerPoster, href: '/search?category=BURGERS', imagePosition: 'object-center' },
]

const popularIds = ['district-073', 'district-049', 'district-060', 'district-001', 'district-091']
const popularItems = popularIds.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean)
function PosterCarousel() {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (reducedMotion) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000)
    return () => window.clearInterval(timer)
  }, [reducedMotion])
  const slide = slides[active]
  return <section aria-label="Featured food" className="mx-auto w-full max-w-6xl px-4">
    <div className="relative h-[230px] overflow-hidden rounded-[31px] border border-white/50 bg-coffee-800 shadow-[0_24px_50px_rgba(48,39,31,.18)] sm:h-[305px] sm:rounded-[38px]">
      <AnimatePresence mode="wait"><motion.img key={slide.id} src={slide.image} alt="" initial={{ opacity: .45, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: .45 }} transition={{ duration: .55 }} className={`absolute inset-0 h-full w-full object-cover ${slide.imagePosition}`} /></AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/90 via-coffee-950/60 to-coffee-950/10 sm:from-coffee-950/85 sm:via-coffee-950/35" />
      <div className="absolute left-5 top-5 max-w-[65%] text-white sm:left-9 sm:top-8"><h2 className="font-serif text-[2.15rem] font-semibold leading-[.95] tracking-tight sm:max-w-md sm:text-6xl">{slide.title}</h2></div>
      <Link to={slide.href} className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2.5 text-[11px] font-bold text-coffee-900 shadow-lg transition hover:-translate-y-0.5 sm:bottom-8 sm:right-8 sm:px-6 sm:py-3.5 sm:text-sm">Explore menu <ArrowUpRight size={15} /></Link>
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-5">{slides.map((entry, index) => <button key={entry.id} type="button" onClick={() => setActive(index)} aria-label={`Show poster ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`${active === index ? 'w-5 bg-white' : 'w-1.5 bg-white/55'} h-1.5 rounded-full transition-all`} />)}</div>
    </div>
  </section>
}

function Categories({ vertical = false }) {
  if (vertical) return <nav aria-label="Food categories" className="max-h-[calc(100vh-170px)] overflow-y-auto rounded-[28px] border border-white/70 bg-cream-50/70 p-2.5 shadow-[0_16px_40px_rgba(48,39,31,.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-night-900/80">{storeCategories.map((category) => <Link key={category.id} to={`/search?category=${encodeURIComponent(category.id)}`} className="group flex items-center gap-2.5 rounded-2xl p-2 text-xs font-bold text-coffee-800 transition hover:bg-sage-100 dark:text-cream-100 dark:hover:bg-white/10"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-night-900 dark:bg-night-800"><StoreCategoryIcon type={category.id} className="size-9" /></span><span className="truncate">{category.label}</span></Link>)}</nav>
  return <CategoryFadeSection label="Food categories" className="md:hidden"><div className="mx-auto w-full max-w-6xl px-4"><div className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{storeCategories.map((category, index) => <Link key={category.id} to={`/search?category=${encodeURIComponent(category.id)}`} className="group flex w-[82px] shrink-0 snap-start flex-col items-center gap-2"><span className={`${index === 0 ? 'bg-sage-700 dark:bg-sage-500' : 'bg-night-900 dark:bg-night-800'} grid size-19 place-items-center rounded-[23px] shadow-[0_12px_24px_rgba(48,39,31,.16)] transition group-hover:-translate-y-1 group-hover:shadow-[0_17px_25px_rgba(48,39,31,.2)]`}><StoreCategoryIcon type={category.id} className="size-16" /></span><span className={`${index === 0 ? 'text-sage-700 dark:text-sage-300' : 'text-coffee-800 dark:text-cream-200'} text-xs font-semibold`}>{category.label}</span></Link>)}</div></div>
  </CategoryFadeSection>
}

function PopularCard({ item }) {
  const { liked, toggleLiked, cart, addToCart, setCartQuantity } = useStore()
  const reducedMotion = useReducedMotion()
  const selected = liked.includes(item.id)
  const variant = item.variants[0]
  const variantName = variant ? variantLabel(variant) : null
  const key = `${item.id}:${variantName ?? 'default'}`
  const quantity = cart.find((entry) => entry.key === key)?.quantity ?? 0
  const price = variant?.price_inr ?? item.price
  return <article className="relative mt-9 h-[295px] overflow-visible rounded-[34px] border border-white/75 bg-gradient-to-br from-sage-300/75 via-cream-300/80 to-coffee-200/70 shadow-[0_24px_55px_rgba(48,39,31,.15),inset_0_1px_0_rgba(255,255,255,.8)] sm:h-[345px] dark:border-white/10 dark:from-sage-900/65 dark:via-night-800 dark:to-coffee-900/50">
    <div aria-hidden="true" className="absolute left-1/2 top-8 size-55 -translate-x-1/2 rounded-full bg-white/65 blur-3xl dark:bg-sage-400/10" />
    <div className="pointer-events-none absolute inset-x-0 -top-9 flex justify-center"><motion.img src={cutoutsByItemId[item.id]} alt={`Concept image for ${item.name}`} animate={reducedMotion ? undefined : { y: [0, -11, 0] }} transition={reducedMotion ? undefined : { duration: 4.2, ease: 'easeInOut', repeat: Infinity }} className="h-[250px] w-[88%] object-contain drop-shadow-[0_20px_16px_rgba(48,39,31,.24)] sm:h-[300px]" /></div>
    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-cream-50/75 px-4 py-2 text-xs font-bold text-coffee-800 backdrop-blur-xl dark:border-white/10 dark:bg-night-800/70 dark:text-cream-100">{formatPrice(price)}</span>
    <button type="button" onClick={() => toggleLiked(item.id)} aria-label={selected ? `Remove ${item.name} from liked` : `Like ${item.name}`} className={`${selected ? 'bg-coffee-700 text-white' : 'bg-cream-50/75 text-coffee-700 dark:bg-night-800/70 dark:text-cream-100'} absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/70 backdrop-blur-xl`}><Heart size={19} fill={selected ? 'currentColor' : 'none'} /></button>
    <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-[25px] border border-white/70 bg-cream-50/70 p-3 pl-5 shadow-[0_8px_25px_rgba(48,39,31,.08)] backdrop-blur-2xl sm:inset-x-5 sm:bottom-5 dark:border-white/10 dark:bg-night-800/75"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-sage-700 dark:text-sage-300">{item.categoryLabel}</p><Link to={`/store/${item.id}`} className="block truncate font-serif text-[1.55rem] font-bold leading-7 hover:underline sm:text-3xl">{item.name}</Link></div><AnimatePresence mode="wait" initial={false}>{quantity ? <motion.div key="counter" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} className="flex h-10 shrink-0 items-center rounded-full bg-sage-700 text-white dark:bg-sage-300 dark:text-night-950"><button type="button" onClick={() => setCartQuantity(key, quantity - 1)} aria-label={`Remove one ${item.name}`} className="grid size-9 place-items-center"><Minus size={15} /></button><span className="min-w-5 text-center text-xs font-bold">{quantity}</span><button type="button" onClick={() => setCartQuantity(key, quantity + 1)} aria-label={`Add one ${item.name}`} className="grid size-9 place-items-center"><Plus size={15} /></button></motion.div> : <motion.button key="add" type="button" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} onClick={() => addToCart(item, variantName, 1, price)} className="shrink-0 rounded-full bg-sage-700 px-4 py-3 text-[11px] font-bold text-white shadow-lg shadow-sage-900/20 transition hover:-translate-y-0.5 sm:px-6 sm:text-sm dark:bg-sage-300 dark:text-night-950">Add</motion.button>}</AnimatePresence></div>
  </article>
}

function PopularFood() {
  const trackRef = useRef(null)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (reducedMotion || popularItems.length < 2) return undefined
    const timer = window.setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const current = Math.round(track.scrollLeft / track.clientWidth)
      track.scrollTo({ left: ((current + 1) % popularItems.length) * track.clientWidth, behavior: 'smooth' })
    }, 4700)
    return () => window.clearInterval(timer)
  }, [reducedMotion])
  return <section aria-labelledby="popular-heading" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:pt-16"><h2 id="popular-heading" className="font-serif text-4xl font-bold sm:text-5xl">Popular food</h2>
    <div className="mx-auto -mt-1 w-full max-w-[560px]"><div ref={trackRef} className="flex w-full snap-x snap-mandatory overflow-x-auto pb-9 sm:pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{popularItems.map((item) => <div key={item.id} className="min-w-full snap-center px-1"><PopularCard item={item} /></div>)}</div></div>
  </section>
}

function FoodRow({ row }) {
  const items = row.ids.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean)
  const href = row.searchCategory ? `/search?category=${encodeURIComponent(row.searchCategory)}` : '/search'
  return <section aria-labelledby={`${row.id}-heading`} className="mx-auto w-full max-w-6xl px-4 pt-6 sm:pt-9"><div className="flex items-end justify-between gap-4"><h2 id={`${row.id}-heading`} className="font-serif text-4xl font-bold sm:text-5xl">{row.label}</h2><Link to={href} className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-sage-700 dark:text-sage-300">See all <ArrowUpRight size={15} /></Link></div><div className="mt-2 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-11 sm:pb-14 sm:pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{items.map((item) => <StoreProductCard key={item.id} item={item} />)}</div></section>
}

export default function StorePage() {
  return <main className="relative w-full bg-[radial-gradient(circle_at_10%_10%,rgba(203,206,188,.48),transparent_28%),radial-gradient(circle_at_90%_42%,rgba(225,210,190,.44),transparent_28%)] pb-30 dark:bg-[radial-gradient(circle_at_10%_10%,rgba(80,85,69,.26),transparent_28%),radial-gradient(circle_at_90%_42%,rgba(79,64,51,.2),transparent_28%)]">
    <StoreSearchBar />
    <div className="mx-auto w-full max-w-7xl md:grid md:grid-cols-[176px_minmax(0,1fr)] md:items-start md:gap-4 md:px-4">
    <aside className="hidden md:sticky md:top-[73px] md:block lg:top-[153px]"><Categories vertical /></aside>
    <div className="min-w-0">
    <PosterCarousel />
    <Categories />
    <PopularFood />
    {storeRows.map((row) => <FoodRow key={row.id} row={row} />)}
    <p className="mx-auto max-w-6xl px-4 pt-8 text-xs leading-5 text-coffee-500 dark:text-cream-300">Menu names and printed prices come from District menu photos and need café confirmation. Food imagery is concept art for this preview.</p>
    </div>
    </div>
  </main>
}
