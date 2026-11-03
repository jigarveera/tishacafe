import { UserRound } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { business } from '../../data/business.js'
import { useStore } from '../../context/store.js'

const links = [
  ['Home', '/'], ['Store', '/store'], ['Search', '/search'], ['Liked', '/liked'],
]

export default function Header() {
  const { setAccountOpen } = useStore()

  return <header className="relative z-40 border-b border-white/60 bg-cream-100/85 backdrop-blur-2xl lg:sticky lg:top-0 dark:border-white/10 dark:bg-night-950/85">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-3 sm:px-4 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-5 lg:px-8">
      <Link to="/" aria-label="Tisha Cafe home" className="inline-flex w-fit shrink-0 items-end gap-1 rounded-full border border-white/75 bg-white/55 px-2.5 py-2 shadow-[0_9px_30px_rgba(48,39,31,.07)] backdrop-blur-xl sm:px-4 dark:border-white/10 dark:bg-white/5">
        <span className="font-serif text-[1.65rem] font-bold leading-none tracking-[-.09em] text-sage-700 sm:text-[2.1rem] dark:text-sage-300">tisha</span><span className="mb-0.5 font-serif text-xs italic text-coffee-600 sm:text-base dark:text-cream-200">café</span><span className="mb-1.5 size-1.5 rounded-full bg-coffee-500 sm:size-2" />
      </Link>
      <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/75 bg-white/55 p-1 shadow-[0_10px_30px_rgba(48,39,31,.08)] backdrop-blur-xl lg:flex dark:border-white/10 dark:bg-white/5">
        {links.map(([label, href]) => <NavLink key={href} to={href} end={href === '/'} className={({ isActive }) => `rounded-full px-4 py-2.5 text-sm font-semibold transition ${isActive ? 'bg-sage-700 text-white shadow-lg shadow-sage-900/15 dark:bg-sage-300 dark:text-night-950' : 'text-coffee-700 hover:bg-white/75 dark:text-cream-200 dark:hover:bg-white/10'}`}>{label}</NavLink>)}
      </nav>
      <div className="flex min-w-0 items-center justify-end gap-1.5 sm:gap-3">
        <a href={business.links.directions} target="_blank" rel="noreferrer" className="flex min-w-0 flex-col items-end rounded-2xl px-1 py-1 text-right transition hover:bg-white/50 dark:hover:bg-white/5"><span className="text-[9px] leading-4 text-coffee-500 sm:text-[10px] dark:text-cream-300">Café location</span><span className="max-w-full truncate text-[10px] font-bold text-coffee-800 sm:text-sm dark:text-cream-100">Shop 25 · Ghatkopar East</span></a>
        <button type="button" onClick={() => setAccountOpen(true)} aria-label="Open account" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/80 bg-white/65 text-coffee-800 shadow-[0_9px_25px_rgba(48,39,31,.09)] backdrop-blur-xl transition hover:-translate-y-0.5 sm:size-11 dark:border-white/10 dark:bg-white/10 dark:text-cream-100"><UserRound size={20} /></button>
      </div>
    </div>
  </header>
}
