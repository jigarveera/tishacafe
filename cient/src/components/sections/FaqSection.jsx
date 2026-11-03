import { Plus } from 'lucide-react'
import { business } from '../../data/business.js'

const questions = [
  { question: 'Where can I find Tisha Café?', answer: `${business.location.address}. Use the directions link for the map.` },
  { question: 'What time is the café open?', answer: 'Published schedules differ between Instagram, District and Zomato. Please call the café before planning a visit, especially late at night.' },
  { question: 'Can I order through this site?', answer: 'You can build a cart here. Checkout is being prepared; the café must confirm current prices and availability before orders can be placed.' },
]

export default function FaqSection() {
  return <section className="bg-cream-200/50 py-18 dark:bg-night-900/60 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-sage-700 dark:text-sage-300">Before you head over</p><h2 className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Good to <span className="italic text-sage-700 dark:text-sage-300">know.</span></h2><p className="mt-5 max-w-sm text-sm leading-7 text-coffee-600 dark:text-cream-300">A few useful details for an easier visit.</p></div><div className="grid gap-3">{questions.map(({ question, answer }) => <details key={question} className="group rounded-[24px] border border-white/70 bg-white/65 px-6 py-5 shadow-[0_12px_30px_rgba(48,39,31,.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold marker:hidden">{question}<Plus size={18} className="shrink-0 text-sage-700 transition group-open:rotate-45 dark:text-sage-300" /></summary><p className="mt-4 max-w-xl text-sm leading-6 text-coffee-600 dark:text-cream-300">{answer}</p></details>)}</div></div></section>
}
