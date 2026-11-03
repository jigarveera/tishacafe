import { Heart, MapPin, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { business } from '../../data/business.js'
import { useStore } from '../../context/store.js'

const links = [
  ['Explore', '/'], ['Search', '/search'], ['Store', '/store'], ['Liked', '/liked'],
]

export default function Header() {
  const { liked, setAccountOpen } = useStore()

  return <header className="sticky top-0 z-40 border-b border-white/50 bg-cream-100/75 backdrop-blur-2xl dark:border-white/10 dark:bg-night-950/75">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
      <Link to="/" aria-label="Tisha Cafe home" className="flex shrink-0 items-baseline gap-1">
        <span className="font-serif text-[2.2rem] font-bold leading-none tracking-[-.09em] text-sage-700 dark:text-sage-300">tisha</span>
        <span className="font-serif text-lg italic text-coffee-600 dark:text-coffee-300">café</span>
        <span className="ml-0.5 size-2.5 rounded-full bg-coffee-500 shadow-[0_0_0_3px_#e5dbca]" />
      </Link>
      <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/75 bg-white/55 p-1 shadow-[0_10px_30px_rgba(48,39,31,.08)] backdrop-blur-xl md:flex dark:border-white/10 dark:bg-white/5">
        {links.map(([label, href]) => <NavLink key={href} to={href} end={href === '/'} className={({ isActive }) => `rounded-full px-5 py-2.5 text-sm font-semibold transition ${isActive ? 'bg-sage-700 text-white shadow-lg shadow-sage-900/15 dark:bg-sage-300 dark:text-night-950' : 'text-coffee-700 hover:bg-white/75 dark:text-cream-200 dark:hover:bg-white/10'}`}>{label}</NavLink>)}
      </nav>
      <div className="flex items-center gap-2">
        <a href={business.links.directions} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 text-xs font-semibold text-coffee-600 transition hover:text-sage-700 lg:flex dark:text-cream-300"><MapPin size={15} /> Ghatkopar East</a>
        <Link to="/liked" aria-label={`${liked.length} saved items`} className="hidden size-10 place-items-center rounded-full border border-coffee-200/70 bg-white/70 text-coffee-700 transition hover:-translate-y-0.5 sm:grid dark:border-white/10 dark:bg-white/10 dark:text-cream-100"><Heart size={18} /></Link>
        <button type="button" onClick={() => setAccountOpen(true)} aria-label="Open account and preferences" className="grid size-10 place-items-center rounded-full bg-coffee-700 text-cream-100 shadow-lg shadow-coffee-900/20 transition hover:-translate-y-0.5 dark:bg-sage-300 dark:text-night-950"><Menu size={18} /></button>
      </div>
    </div>
  </header>
}
