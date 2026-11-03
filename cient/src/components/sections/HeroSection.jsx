import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Clock3, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/business.js'
import heroImage from '../../assets/food/cafe-table-concept.webp'

export default function HeroSection() {
  const reducedMotion = useReducedMotion()
  return <section className="relative isolate overflow-hidden bg-cream-100 dark:bg-night-950">
    <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-12 size-96 rounded-full bg-sage-200/65 blur-3xl dark:bg-sage-900/20" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 size-96 rounded-full bg-coffee-200/60 blur-3xl dark:bg-coffee-900/20" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-12 sm:px-8 lg:min-h-[710px] lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:pb-28 lg:pt-16">
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-sage-300/60 bg-white/65 px-4 py-2 text-[11px] font-bold uppercase tracking-[.17em] text-sage-800 shadow-sm backdrop-blur-xl dark:border-sage-700/30 dark:bg-white/5 dark:text-sage-300"><Sparkles size={13} /> A little pause in Ghatkopar East</div>
        <h1 className="mt-7 max-w-xl font-serif text-[clamp(3.4rem,8vw,7.4rem)] font-semibold leading-[.9] tracking-[-.075em] text-coffee-900 dark:text-cream-100">Come hungry.<br /><span className="italic font-normal text-sage-700 dark:text-sage-300">Stay awhile.</span></h1>
        <p className="mt-7 max-w-md text-base leading-7 text-coffee-600 dark:text-cream-300">Your next coffee, momo moment or pizza catch-up starts here. Discover Tisha Café, explore the menu and find your way in.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link to="/store" className="inline-flex items-center gap-3 rounded-full bg-sage-700 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_28px_rgba(57,61,50,.22)] transition hover:-translate-y-1 hover:bg-sage-800 dark:bg-sage-300 dark:text-night-950">Explore the menu <ArrowRight size={17} /></Link><a href={business.links.directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-coffee-200 bg-white/70 px-6 py-4 text-sm font-bold text-coffee-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/15 dark:bg-white/5 dark:text-cream-100"><MapPin size={17} /> Find the café</a></div>
        <p className="mt-7 flex items-center gap-2 text-xs text-coffee-500 dark:text-cream-300"><Clock3 size={15} /> Hours vary online — call before a late visit.</p>
      </motion.div>
      <div className="relative [perspective:1200px]">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 45, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: -4 }} transition={{ duration: .9, ease: 'easeOut' }} className="relative aspect-[1.05] overflow-hidden rounded-[44px] border-[8px] border-white/70 bg-sage-200 shadow-[0_32px_80px_rgba(48,39,31,.24)] [transform-style:preserve-3d] dark:border-white/10"><img src={heroImage} alt="Concept photograph of vegetarian dishes and drinks on a café table" className="h-full w-full object-cover object-[58%_center]" /><div className="absolute inset-0 bg-gradient-to-t from-night-950/50 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-xs font-semibold text-white backdrop-blur-xl">A taste of what awaits <span className="ml-1">✦</span></div></motion.div>
        <motion.div animate={reducedMotion ? undefined : { y: [0, -10, 0], rotate: [-4, -2, -4] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-8 -left-3 hidden w-44 rounded-[25px] border border-white/70 bg-cream-50/80 p-4 shadow-[0_18px_40px_rgba(48,39,31,.18)] backdrop-blur-2xl sm:block dark:border-white/10 dark:bg-night-800/90"><span className="grid size-10 place-items-center rounded-2xl bg-sage-100 text-xl dark:bg-sage-800">✦</span><p className="mt-3 font-serif text-xl font-bold leading-5">The good<br />kind of pause.</p></motion.div>
        <motion.div animate={reducedMotion ? undefined : { y: [0, 8, 0], rotate: [5, 3, 5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-2 -top-5 hidden rounded-2xl border border-white/70 bg-white/80 px-5 py-3 text-xs font-bold text-sage-800 shadow-xl backdrop-blur-2xl sm:block dark:border-white/10 dark:bg-night-800/90 dark:text-sage-200">COFFEE · FOOD · COMPANY</motion.div>
      </div>
    </div>
  </section>
}
