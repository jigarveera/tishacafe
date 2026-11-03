import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/business.js'

export default function Footer({ compact = false }) {
  return <footer className={`relative overflow-hidden bg-coffee-800 pb-36 text-cream-100 sm:pb-32 sm:pt-16 dark:bg-night-900 ${compact ? 'pt-[22px]' : 'pt-16'}`}>
    <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-sage-400/10 blur-3xl" />
    <div className={`relative mx-auto grid max-w-7xl px-5 sm:gap-12 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] ${compact ? 'gap-11' : 'gap-12'}`}>
      <div>
        <p className="font-serif text-6xl font-bold tracking-[-.09em] text-cream-100">tisha<span className="ml-2 text-2xl font-normal italic tracking-normal text-sage-300">café</span></p>
        <p className="mt-5 max-w-sm text-sm leading-7 text-cream-200/80">A little place to pause, sip and stay awhile in Ghatkopar East. Explore the menu, save your picks and plan your next visit.</p>
        <div className="mt-7 flex flex-wrap gap-2">
          <a href={business.contact.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition hover:bg-white/10"><Camera size={14} /> Instagram <ArrowUpRight size={12} /></a>
          <a href={business.links.district} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition hover:bg-white/10">District <ArrowUpRight size={12} /></a>
          <a href={business.links.zomato} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition hover:bg-white/10">Zomato <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[.22em] text-sage-300">Explore</p>
        <div className="mt-6 grid gap-3 text-sm text-cream-200/85">
          <Link to="/" className="hover:text-white">Home</Link><Link to="/search" className="hover:text-white">Search menu</Link><Link to="/store" className="hover:text-white">Store</Link><Link to="/liked" className="hover:text-white">Saved items</Link>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[.22em] text-sage-300">Visit us</p>
        <a href={business.links.directions} target="_blank" rel="noreferrer" className="mt-6 flex items-start gap-3 text-sm leading-6 text-cream-200/85 hover:text-white"><MapPin className="mt-0.5 shrink-0" size={17} />{business.location.address}</a>
        <a href={`tel:${business.contact.phoneE164}`} className="mt-5 flex items-center gap-3 text-sm text-cream-200/85 hover:text-white"><Phone size={17} />{business.contact.phoneDisplay}</a>
        <p className="mt-5 text-xs leading-5 text-cream-300/70">Hours differ across listings. Please call before planning a late visit.</p>
      </div>
    </div>
    <div className={`relative mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/15 px-5 text-xs text-cream-300/60 sm:mt-14 sm:flex-row sm:px-8 sm:pt-6 ${compact ? 'mt-[22px] pt-[22px]' : 'mt-14 pt-6'}`}><span>© {new Date().getFullYear()} Tisha Cafe concept experience</span><span>Menu prices and images are preview material pending café approval.</span></div>
  </footer>
}
