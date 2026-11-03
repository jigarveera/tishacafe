import { MapPin, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/business.js'
import { useStore } from '../../context/store.js'

export default function StoreHeader() {
  const { setAccountOpen } = useStore()
  return <div className="mx-auto max-w-6xl px-4 pb-3 pt-5 sm:pt-7">
    <div className="flex items-center justify-between gap-3">
      <Link to="/" aria-label="Tisha Cafe home" className="inline-flex shrink-0 items-end gap-1 rounded-full border border-white/75 bg-white/55 px-4 py-2 shadow-[0_9px_30px_rgba(48,39,31,.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <span className="font-serif text-[2.1rem] font-bold leading-none tracking-[-.09em] text-sage-700 dark:text-sage-300">tisha</span><span className="mb-0.5 font-serif text-base italic text-coffee-600 dark:text-cream-200">café</span><span className="mb-1.5 size-2 rounded-full bg-coffee-500" />
      </Link>
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <a href={business.links.directions} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-2 rounded-2xl px-1.5 py-1 text-right transition hover:bg-white/50 dark:hover:bg-white/5"><div className="min-w-0"><p className="text-[10px] leading-4 text-coffee-500 dark:text-cream-300">Café location</p><p className="truncate text-[11px] font-bold text-coffee-800 sm:text-sm dark:text-cream-100">Shop 25 · Ghatkopar East</p></div><MapPin size={18} className="shrink-0 text-sage-700 dark:text-sage-300" /></a>
        <button type="button" onClick={() => setAccountOpen(true)} aria-label="Open account" className="hidden size-10 shrink-0 place-items-center rounded-full border border-white/80 bg-white/55 shadow-sm backdrop-blur-xl sm:grid dark:border-white/10 dark:bg-white/5"><UserRound size={18} /></button>
      </div>
    </div>
  </div>
}
