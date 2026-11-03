import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { business } from '../../data/business.js'
import ambience from '../../assets/ambience/interior-concept.webp'
import ReelCard from '../ui/ReelCard.jsx'
import ReviewCard from '../ui/ReviewCard.jsx'

const stories = [
  { id: 'district-riya', type: 'review', review: { author: 'Riya Ganatra', outlet: 'District', quote: 'Amazing coffee. Peri peri cheese fries are a must have.', sourceUrl: business.links.district } },
  { id: 'instagram-preview', type: 'reel', poster: ambience, posterAlt: 'Concept café interior preview', videoSrc: null, instagramUrl: business.contact.instagramUrl },
  { id: 'zomato-yaana', type: 'review', review: { author: 'Yaana Jain', outlet: 'Zomato', quote: 'The food was fresh and yumm', sourceUrl: 'https://www.zomato.com/or/mumbai/tisha-cafe-ghatkopar-east/reviews' } },
]

export default function VoicesSection() {
  const [active, setActive] = useState(1)
  const reducedMotion = useReducedMotion()
  const move = (direction) => setActive((current) => (current + direction + stories.length) % stories.length)
  const ordered = [stories[(active + stories.length - 1) % stories.length], stories[active], stories[(active + 1) % stories.length]]
  return <section aria-labelledby="voices-heading" className="overflow-hidden bg-cream-100 py-18 dark:bg-night-950 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">In their words</p><h2 id="voices-heading" className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Word on the <span className="italic text-sage-700 dark:text-sage-300">table.</span></h2></div><div className="flex gap-2"><button type="button" onClick={() => move(-1)} aria-label="Previous story" className="grid size-11 place-items-center rounded-full border border-coffee-200 bg-white/70 text-coffee-800 shadow-sm backdrop-blur-xl transition hover:bg-sage-100 dark:border-white/15 dark:bg-white/5 dark:text-cream-100"><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label="Next story" className="grid size-11 place-items-center rounded-full bg-sage-700 text-white shadow-md transition hover:bg-sage-800 dark:bg-sage-300 dark:text-night-950"><ArrowRight size={18} /></button></div></div>
      <div role="region" aria-roledescription="carousel" aria-label="Tisha Cafe reviews and Instagram preview" className="mt-10 [perspective:1200px]"><AnimatePresence mode="wait"><motion.div key={active} initial={reducedMotion ? false : { opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -40 }} transition={{ duration: .35 }} className="grid gap-4 md:grid-cols-3 md:items-center">{ordered.map((story, index) => <motion.div key={story.id} whileHover={{ y: -5, rotateY: index === 1 ? 0 : index === 0 ? 3 : -3 }} className={`${index === 1 ? 'h-[440px] md:h-[470px] md:scale-105 md:shadow-2xl' : 'hidden h-[400px] opacity-80 md:block'} [transform-style:preserve-3d]`}>{story.type === 'review' ? <ReviewCard review={story.review} /> : <ReelCard reel={story} active={index === 1} manual={false} playbackToken={active} onEnded={() => move(1)} />}</motion.div>)}</motion.div></AnimatePresence></div>
      <div className="mt-8 flex items-center justify-center gap-2">{stories.map((story, index) => <button key={story.id} type="button" onClick={() => setActive(index)} aria-label={`Go to story ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`${active === index ? 'w-8 bg-sage-700 dark:bg-sage-300' : 'w-2 bg-sage-300 dark:bg-sage-700'} h-2 rounded-full transition-all`} />)}</div>
      <p className="mt-5 text-center text-xs text-coffee-500 dark:text-cream-300">Reviews link to their public source. Reel space is ready for café-provided media.</p>
    </div>
  </section>
}
