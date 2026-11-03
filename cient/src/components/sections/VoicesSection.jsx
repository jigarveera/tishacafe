import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { business } from '../../data/business.js'
import reelOne from '../../assets/reels/AQMmB0Aj_ZZkBHX1lWbAE8hxWYFapTT6qvqXzNYoVetulCI6Qchg4aN4DTxZ1ywyGLMeVQgpFqtXGgpmV4lpIoCAChK1ud9IWW9AP7I.mp4'
import reelTwo from '../../assets/reels/AQPbTa01CXkX9du6Rt1ElOredmOlJRnWoqWZOoQUpIt8AEPZU-D2Qv-jDZWBfvNnVJ-BUt_vEWGorEOcdusc_uBz4dBXoeKac3hF-ig.mp4'
import reelThree from '../../assets/reels/AQPOGgrFLH5GqIS8dIq53nahRUejupRPK93wqAPs2VHzNeRE-hUMAvbRB2E3Hchr_BD9IisEvgWtXrtKrnP5ASUWhfwrB-87mRiIY6g.mp4'
import ReelCard from '../ui/ReelCard.jsx'
import ReviewCard from '../ui/ReviewCard.jsx'

const stories = [
  { id: 'reel-1', type: 'reel', number: 1, videoSrc: reelOne, instagramUrl: business.contact.instagramUrl },
  { id: 'review-riya', type: 'review', review: { author: 'Riya Ganatra', outlet: 'District', rating: 5, quote: 'Amazing coffee. Peri peri cheese fries are a must have.', sourceUrl: business.links.district, destinationUrl: business.links.directions } },
  { id: 'reel-2', type: 'reel', number: 2, videoSrc: reelTwo, instagramUrl: business.contact.instagramUrl },
  { id: 'review-hasti', type: 'review', review: { author: 'Hasti Thakkar', outlet: 'District', rating: 5, quote: 'The staff is welcoming and the overall vibe is amazing.', sourceUrl: business.links.district, destinationUrl: business.links.directions } },
  { id: 'reel-3', type: 'reel', number: 3, videoSrc: reelThree, instagramUrl: business.contact.instagramUrl },
  { id: 'review-nirav', type: 'review', review: { author: 'Nirav Lodaya', outlet: 'District', rating: 5, quote: 'Food was yummilicious', sourceUrl: business.links.district, destinationUrl: business.links.directions } },
]

export default function VoicesSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!visible) return undefined
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % stories.length), stories[active].type === 'reel' ? 8000 : 3000)
    return () => window.clearTimeout(timer)
  }, [active, visible])
  const ordered = [stories[(active + stories.length - 1) % stories.length], stories[active], stories[(active + 1) % stories.length]]
  return <section ref={sectionRef} aria-labelledby="voices-heading" className="overflow-hidden bg-cream-100 py-[22px] dark:bg-night-950 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">In their words</p><h2 id="voices-heading" className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Word on the <span className="italic text-sage-700 dark:text-sage-300">table.</span></h2></div>
      <div role="region" aria-roledescription="carousel" aria-label="Tisha Cafe reels and customer reviews" className="mt-11 [perspective:1200px] sm:mt-10"><AnimatePresence mode="wait"><motion.div key={active} initial={reducedMotion ? false : { opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -80 }} transition={{ duration: .35 }} className="grid gap-4 md:grid-cols-3 md:items-center">{ordered.map((story, index) => <motion.div key={story.id} whileHover={{ y: -5, rotateY: index === 1 ? 0 : index === 0 ? 3 : -3 }} className={`${index === 1 ? 'h-[528px] md:h-[564px] md:scale-105 md:shadow-2xl' : 'hidden h-[480px] opacity-80 md:block'} [transform-style:preserve-3d]`}>{story.type === 'review' ? <ReviewCard review={story.review} /> : <ReelCard reel={story} active={visible && index === 1} manual={false} playbackToken={active} />}</motion.div>)}</motion.div></AnimatePresence></div>
    </div>
  </section>
}
