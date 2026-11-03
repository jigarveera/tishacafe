import { useEffect, useRef, useState } from 'react'
import { House, Search, Store, UserRound } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../../context/store.js'

const tabs = [
  { label: 'Home', href: '/', Icon: House },
  { label: 'Store', href: '/store', Icon: Store },
  { label: 'Search', href: '/search', Icon: Search },
]

export default function IslandNav() {
  const { setAccountOpen } = useStore()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 90 || y < lastY.current - 7) setVisible(true)
      else if (y > lastY.current + 8 && y > 180) setVisible(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <motion.nav aria-label="Quick navigation" initial={false} animate={{ y: visible ? 0 : 130, opacity: visible ? 1 : 0 }} transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }} className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 mx-auto flex w-[calc(100%-2rem)] max-w-[380px] items-center justify-between gap-3">
    <div className="flex h-14 min-w-0 flex-1 items-center gap-1 rounded-full border border-white/75 bg-cream-50/75 p-1.5 shadow-[0_16px_45px_rgba(48,39,31,.23),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-3xl dark:border-white/15 dark:bg-night-800/80 dark:shadow-black/40">
      {tabs.map(({ label, href, Icon }) => {
        const active = href === '/' ? pathname === '/' : pathname === href || (href === '/store' && pathname.startsWith('/store/'))
        return <Link key={href} to={href} aria-label={label} aria-current={active ? 'page' : undefined} className={`${active ? 'text-white dark:text-night-950' : 'text-coffee-600 hover:text-coffee-900 dark:text-cream-300 dark:hover:text-white'} relative flex h-full min-w-0 flex-1 items-center justify-center rounded-full transition-colors`}>{active && <motion.span layoutId="nav-active-pill" transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 32 }} className="absolute inset-0 rounded-full bg-sage-700 shadow-[0_8px_20px_rgba(57,61,50,.25)] dark:bg-sage-300" />}<Icon size={22} className="relative z-10 shrink-0" strokeWidth={active ? 2.3 : 1.9} /></Link>
      })}
    </div>
    <button type="button" onClick={() => setAccountOpen(true)} aria-label="Account" className="grid size-14 shrink-0 place-items-center rounded-full border border-white/75 bg-cream-50/75 text-coffee-800 shadow-[0_16px_45px_rgba(48,39,31,.23),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-3xl transition hover:-translate-y-1 dark:border-white/15 dark:bg-night-800/80 dark:text-cream-100 dark:shadow-black/40"><UserRound size={22} /></button>
  </motion.nav>
}
