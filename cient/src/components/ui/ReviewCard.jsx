import { ArrowUpRight, Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return <a href={review.destinationUrl ?? review.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open Tisha Cafe on Google Maps; ${review.author}'s review was published on ${review.outlet}`} className="block h-full rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"><article className="flex h-full flex-col rounded-[28px] border border-white/70 bg-cream-200/75 p-6 text-coffee-900 shadow-[0_18px_45px_rgba(48,39,31,.1)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-night-800 dark:text-cream-100">
    <div className="flex items-center justify-between gap-3"><div className="grid size-11 place-items-center rounded-full bg-sage-700 font-serif text-2xl font-bold text-white dark:bg-sage-300 dark:text-night-950">{review.author.charAt(0)}</div><span className="text-[10px] font-bold uppercase tracking-[.14em] text-sage-800 dark:text-sage-300">{review.outlet} review</span></div>
    <div className="mt-8 flex gap-1 text-coffee-500 dark:text-sage-300" aria-label={`${review.rating} stars`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
    <blockquote className="mt-5 font-serif text-[clamp(1.7rem,2.2vw,2.2rem)] leading-[1.08] tracking-[-.025em]">“{review.quote}”</blockquote>
    <div className="mt-auto pt-8"><p className="font-serif text-3xl italic leading-none text-sage-800 dark:text-sage-300">{review.author}</p><span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.12em] text-coffee-500 dark:text-cream-300">View Tisha on Google Maps <ArrowUpRight size={13} /></span></div>
  </article></a>
}
