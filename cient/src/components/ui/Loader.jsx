import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const path = 'M 42 172 C 100 172, 90 100, 162 112 S 245 170, 302 72'

export default function Loader({ mode = 'journey' }) {
  const [traveler] = useState(() => Math.random() < .5 ? 'car' : 'walker')
  const reducedMotion = useReducedMotion()
  const traveling = mode === 'journey' && !reducedMotion

  return <div id="loader" role="status" aria-label="Finding Tisha Cafe" className="fixed inset-0 z-[100] grid place-items-center bg-cream-100 px-6 text-coffee-900 dark:bg-night-950 dark:text-cream-100">
    <div className="w-full max-w-[390px] rounded-[36px] border border-white/80 bg-white/60 p-6 shadow-[0_28px_90px_rgba(48,39,31,.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
      <p className="text-center text-[11px] font-bold uppercase tracking-[.25em] text-sage-700 dark:text-sage-300">On the way to</p>
      <h1 className="mt-2 text-center font-serif text-4xl font-bold">Tisha Café</h1>
      <svg viewBox="0 0 350 220" className="mt-3 w-full" aria-hidden="true">
        <path d="M 20 42 Q 100 12 150 52 T 340 35 M 0 198 Q 95 154 145 205 T 350 185 M 85 0 Q 65 90 130 220 M 248 0 Q 214 100 250 220" fill="none" stroke="currentColor" strokeWidth="13" className="text-cream-200 dark:text-night-800" />
        <path d={path} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" className="text-sage-500 dark:text-sage-300" />
        <motion.path d={path} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 10" className="text-coffee-700 dark:text-cream-100" initial={traveling ? { pathLength: 0 } : { pathLength: 1 }} animate={{ pathLength: 1 }} transition={{ duration: .7, ease: 'easeInOut' }} />
        <motion.g initial={traveling ? { offsetDistance: '0%' } : { offsetDistance: '100%' }} animate={{ offsetDistance: '100%' }} transition={{ duration: .7, ease: 'easeInOut' }} style={{ offsetPath: `path('${path}')` }}>
          <circle r="17" className="fill-white drop-shadow-md" />
          {traveler === 'car' ? <g className="fill-sage-700"><rect x="-10" y="-5" width="20" height="10" rx="3" /><rect x="-5" y="-8" width="10" height="5" rx="2" /><circle cx="-6" cy="7" r="2" className="fill-coffee-900" /><circle cx="6" cy="7" r="2" className="fill-coffee-900" /></g> : <g fill="none" strokeWidth="2.7" strokeLinecap="round" className="stroke-sage-700"><circle cy="-7" r="3" className="fill-sage-700" /><path d="M 0 -3 L 0 4 M 0 0 L -5 3 M 0 0 L 5 2 M 0 4 L -4 9 M 0 4 L 5 9" /></g>}
        </motion.g>
        <motion.g initial={traveling ? { scale: .7, opacity: .6 } : { scale: 1, opacity: 1 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: traveling ? .6 : 0, duration: .2 }} style={{ transformOrigin: '302px 72px' }}>
          <path d="M 302 39 C 284 39 274 51 274 66 C 274 87 302 112 302 112 C 302 112 330 87 330 66 C 330 51 320 39 302 39 Z" className="fill-red-500" />
          <circle cx="302" cy="66" r="10" className="fill-cream-50" />
        </motion.g>
        <text x="302" y="132" textAnchor="middle" className="fill-coffee-800 text-[11px] font-bold dark:fill-cream-100">Tisha Café</text>
      </svg>
      <p className="text-center text-sm font-bold text-coffee-600 dark:text-cream-300">Ghatkopar East, Mumbai</p>
    </div>
  </div>
}
