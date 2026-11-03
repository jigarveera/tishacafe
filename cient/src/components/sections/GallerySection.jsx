import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { business } from '../../data/business.js'
import ambience from '../../assets/ambience/interior-concept.webp'
import momos from '../../assets/food/momos-concept.webp'
import pizza from '../../assets/food/pizza-concept.webp'
import burger from '../../assets/food/vegetarian-burger-concept.webp'
import table from '../../assets/food/cafe-table-concept.webp'

const images = [
  { src: ambience, alt: 'Concept image of a warm café interior', label: 'A place to linger', className: 'md:col-span-2 md:row-span-2' },
  { src: momos, alt: 'Concept image of vegetable momos', label: 'Momo moments', className: '' },
  { src: pizza, alt: 'Concept image of margherita pizza', label: 'A slice to share', className: '' },
  { src: burger, alt: 'Concept image of a vegetarian burger', label: 'Something satisfying', className: '' },
  { src: table, alt: 'Concept image of vegetarian café food and drinks', label: 'Take your time', className: '' },
]

export default function GallerySection() {
  return <section id="gallery" className="bg-cream-200/45 py-18 dark:bg-night-900/60 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">A little look around</p><h2 className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">The Tisha <span className="italic text-sage-700 dark:text-sage-300">feeling.</span></h2></div><a href={business.contact.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-coffee-700 underline decoration-sage-500 underline-offset-4 dark:text-cream-200">See Tisha on Instagram <ArrowUpRight size={17} /></a></div>
      <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">{images.map(({ src, alt, label, className }, index) => <motion.div key={label} whileHover={{ y: -6, scale: 1.01 }} className={`${className} group relative aspect-square overflow-hidden rounded-[28px] border-4 border-white/65 bg-sage-100 shadow-[0_16px_40px_rgba(48,39,31,.12)] md:aspect-auto dark:border-white/10`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><span className="font-serif text-xl font-semibold sm:text-2xl">{label}</span><span className="text-[10px] font-bold">0{index + 1}</span></div></motion.div>)}</div>
      <p className="mt-5 text-right text-xs text-coffee-500 dark:text-cream-300">Concept imagery for this design preview; actual café photos are welcome.</p>
    </div>
  </section>
}
