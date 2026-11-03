import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Heart, MapPin, Moon, Phone, Sun, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/business.js'
import { useStore } from '../../context/store.js'

export default function AccountSheet() {
  const { accountOpen, setAccountOpen, dark, setDark, liked } = useStore()
  useEffect(() => {
    if (!accountOpen) return undefined
    const close = (event) => { if (event.key === 'Escape') setAccountOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [accountOpen, setAccountOpen])

  return <AnimatePresence>{accountOpen && <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
    <motion.button type="button" aria-label="Close account sheet" onClick={() => setAccountOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-night-950/45 backdrop-blur-sm" />
    <motion.section role="dialog" aria-modal="true" aria-labelledby="account-heading" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ type: 'spring', stiffness: 320, damping: 32 }} className="relative w-full max-w-lg rounded-t-[34px] border border-white/75 bg-cream-50/95 px-6 pb-10 pt-5 shadow-2xl backdrop-blur-3xl sm:rounded-[34px] dark:border-white/15 dark:bg-night-800/95">
      <div className="mx-auto mb-7 h-1.5 w-12 rounded-full bg-coffee-300/70 sm:hidden" />
      <div className="flex items-start justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-sage-700 dark:text-sage-300">Your corner</p><h2 id="account-heading" className="mt-2 font-serif text-4xl font-bold tracking-tight">Make yourself at home.</h2></div><button type="button" onClick={() => setAccountOpen(false)} aria-label="Close" className="grid size-10 place-items-center rounded-full bg-cream-300/70 dark:bg-white/10"><X size={18} /></button></div>
      <p className="mt-4 text-sm leading-6 text-coffee-600 dark:text-cream-300">This preview keeps your saved menu picks on this device. Sign-in will be added when the café chooses an account service.</p>
      <Link to="/liked" onClick={() => setAccountOpen(false)} className="mt-7 flex items-center justify-between rounded-[22px] border border-white/70 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"><span className="flex items-center gap-3 text-sm font-semibold"><Heart size={19} /> Saved favourites</span><span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-bold text-sage-800 dark:bg-sage-800 dark:text-sage-100">{liked.length}</span></Link>
      <button type="button" onClick={() => setDark(!dark)} className="mt-3 flex w-full items-center justify-between rounded-[22px] border border-white/70 bg-white/70 p-5 text-sm font-semibold shadow-sm dark:border-white/10 dark:bg-white/5"><span className="flex items-center gap-3">{dark ? <Moon size={19} /> : <Sun size={19} />} Appearance</span><span className="text-xs text-coffee-500 dark:text-cream-300">{dark ? 'Dark' : 'Light'}</span></button>
      <div className="mt-7 grid gap-3 text-sm"><a href={business.links.directions} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-coffee-700 dark:text-cream-200"><MapPin size={17} /> Get directions <ArrowUpRight size={13} /></a><a href={`tel:${business.contact.phoneE164}`} className="flex items-center gap-3 text-coffee-700 dark:text-cream-200"><Phone size={17} /> Call the café <ArrowUpRight size={13} /></a></div>
    </motion.section>
  </div>}</AnimatePresence>
}
