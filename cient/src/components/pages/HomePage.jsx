import { ArrowRight, ArrowUpRight, Phone, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../sections/HeroSection.jsx'
import HomeCategoryMarquee from '../sections/HomeCategoryMarquee.jsx'
import GallerySection from '../sections/GallerySection.jsx'
import VoicesSection from '../sections/VoicesSection.jsx'
import FaqSection from '../sections/FaqSection.jsx'
import StoreProductCard from '../ui/StoreProductCard.jsx'
import { menuItems } from '../../data/menuPreview.js'
import { storeRows } from '../../data/storeVisuals.js'
import { business } from '../../data/business.js'

const trending = storeRows.find((row) => row.id === 'trending').ids.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean)

export default function HomePage() {
  return <main id="home-page">
    <HeroSection />
    <HomeCategoryMarquee />
    <section className="mx-auto max-w-7xl px-4 pt-[22px] sm:px-8 sm:pb-24 sm:pt-8"><h2 className="font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Pick your <span className="italic text-sage-700 dark:text-sage-300">craving.</span></h2>
      <div className="mt-[22px] flex snap-x snap-mandatory gap-4 overflow-x-auto pb-11 pt-[22px] sm:mt-4 sm:pb-14 sm:pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{trending.map((item) => <StoreProductCard key={item.id} item={item} />)}</div>
    </section>
    <GallerySection />
    <section className="mx-auto grid max-w-7xl gap-11 px-5 py-[22px] sm:gap-8 sm:px-8 sm:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">Make a plan, make a memory</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Good days start with <span className="italic text-sage-700 dark:text-sage-300">a place.</span></h2>
      </div>
      <motion.div whileHover={{ rotateY: -2, y: -4 }} className="rounded-[34px] border border-white/75 bg-white/60 p-7 shadow-[0_22px_60px_rgba(48,39,31,.1)] backdrop-blur-2xl [transform-style:preserve-3d] dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-sage-700 dark:text-sage-300">Tisha Café</p>
        <p className="mt-2 font-serif text-2xl font-bold leading-7">{business.location.address}</p>
      </motion.div>
      <div className="grid w-full grid-cols-2 gap-3 lg:col-span-2 lg:max-w-xl lg:justify-self-center">
        <a href={business.links.directions} target="_blank" rel="noreferrer" className="flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-sage-700 px-2.5 py-3.5 text-xs font-bold text-white dark:bg-sage-300 dark:text-night-950 sm:gap-2 sm:px-6 sm:text-sm">Get directions <ArrowUpRight className="size-4 shrink-0 sm:size-[17px]" /></a>
        <a href={`tel:${business.contact.phoneE164}`} className="flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-coffee-200 bg-white/70 px-2.5 py-3.5 text-xs font-bold dark:border-white/15 dark:bg-white/5 sm:gap-2 sm:px-6 sm:text-sm"><Phone className="size-4 shrink-0 sm:size-[17px]" /> Call us</a>
      </div>
    </section>
    <VoicesSection />
    <FaqSection />
    <section className="bg-sage-700 py-[22px] text-white dark:bg-sage-900 sm:py-24"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-11 px-5 sm:gap-7 sm:px-8 lg:flex-row lg:items-center"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-200">One more good idea</p><h2 className="mt-3 max-w-2xl font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">See what sounds good <span className="italic text-sage-200">today.</span></h2></div><Link to="/search" className="inline-flex w-fit items-center gap-3 rounded-full bg-cream-50 px-7 py-4 text-sm font-bold text-sage-900 shadow-xl transition hover:-translate-y-1"><Search size={17} /> Search the menu <ArrowRight size={17} /></Link></div></section>
  </main>
}
