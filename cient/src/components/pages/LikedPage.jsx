import { Heart, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import MenuCard from '../ui/MenuCard.jsx'
import { menuItems } from '../../data/menuPreview.js'
import { useStore } from '../../context/store.js'

export default function LikedPage() {
  const { liked } = useStore()
  const items = menuItems.filter((item) => liked.includes(item.id))
  return <main className="mx-auto min-h-[70vh] max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16"><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">Your own little list</p><h1 className="mt-3 font-serif text-6xl font-semibold leading-none tracking-tight sm:text-7xl">Things you <span className="italic text-sage-700 dark:text-sage-300">love.</span></h1><p className="mt-5 max-w-xl text-sm leading-6 text-coffee-600 dark:text-cream-300">Saved on this device for easy menu planning. Tap the heart on any item to keep it here.</p>
    {items.length ? <><p className="mb-5 mt-11 text-xs font-semibold text-coffee-500 dark:text-cream-300">{items.length} saved {items.length === 1 ? 'item' : 'items'}</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((item) => <MenuCard key={item.id} item={item} compact />)}</div></> : <div className="mt-11 rounded-[34px] border border-white/75 bg-white/60 px-6 py-16 text-center shadow-[0_20px_50px_rgba(48,39,31,.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"><div className="mx-auto grid size-16 place-items-center rounded-3xl bg-sage-100 text-sage-700 dark:bg-sage-800 dark:text-sage-200"><Heart size={29} /></div><h2 className="mt-5 font-serif text-4xl font-bold">No favorites yet.</h2><p className="mt-2 text-sm text-coffee-600 dark:text-cream-300">A good menu is worth exploring.</p><Link to="/search" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-700 px-6 py-3 text-sm font-bold text-white dark:bg-sage-300 dark:text-night-950"><Search size={17} /> Search the menu</Link></div>}
  </main>
}
