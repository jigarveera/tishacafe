import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function CategoryFadeSection({ label, children, className = '' }) {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, (y) => {
    const stickyTop = window.innerWidth >= 1024 ? 153 : 73
    const stickyStart = Math.max(0, (sectionRef.current?.offsetTop ?? 0) - stickyTop)
    return Math.min(1, Math.max(0, (y - stickyStart) / 320))
  })
  const opacity = useTransform(progress, [0, 1], [1, 0.62])
  const edgeOpacity = useTransform(progress, [0, 1], [0, 1])

  return <motion.section ref={sectionRef} aria-label={label} style={reducedMotion ? undefined : { opacity }} className={`sticky top-[73px] z-30 w-full border-b border-white/60 bg-cream-100/85 py-3 backdrop-blur-2xl lg:top-[153px] dark:border-white/10 dark:bg-night-950/85 ${className}`}>
    {children}
    {!reducedMotion && <motion.div aria-hidden="true" style={{ opacity: edgeOpacity }} className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-b from-transparent via-cream-100/20 to-cream-100/85 backdrop-blur-[3px] dark:via-night-950/20 dark:to-night-950/85" />}
  </motion.section>
}
