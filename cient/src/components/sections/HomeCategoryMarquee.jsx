import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { menuCategories } from '../../data/menuPreview.js'
import StoreCategoryIcon from '../ui/StoreCategoryIcon.jsx'

function CategoryRun({ decorative = false }) {
  return <div aria-hidden={decorative || undefined} className="flex shrink-0 gap-3 pr-3">{menuCategories.map((category) => <Link key={category.id} to={`/search?category=${encodeURIComponent(category.id)}`} tabIndex={decorative ? -1 : undefined} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/75 bg-white/65 py-1.5 pl-1.5 pr-4 text-xs font-bold text-coffee-800 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-cream-100"><span className="grid size-10 place-items-center rounded-full bg-night-900 dark:bg-night-800"><StoreCategoryIcon type={category.id} className="size-9" /></span>{category.label}</Link>)}</div>
}

export default function HomeCategoryMarquee() {
  const reducedMotion = useReducedMotion()
  return <nav aria-label="Browse food categories" className="overflow-hidden py-[22px] sm:py-5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"><motion.div className="flex w-max" animate={reducedMotion ? undefined : { x: ['-50%', '0%'] }} transition={reducedMotion ? undefined : { duration: 26, ease: 'linear', repeat: Infinity }}><CategoryRun /><CategoryRun decorative /></motion.div></nav>
}
