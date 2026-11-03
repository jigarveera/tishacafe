import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Search, ShoppingBag, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../context/store.js'

const suggestions = ['Veg Momos', 'Margherita', 'Spinach & Corn Burger', 'Cappuccino', 'Cheese Cake']

export default function StoreSearchBar({ query: controlledQuery, onQueryChange }) {
  const navigate = useNavigate()
  const [localQuery, setLocalQuery] = useState('')
  const [suggestion, setSuggestion] = useState(0)
  const [suggestionsPaused, setSuggestionsPaused] = useState(false)
  const inputRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { cart, setListOpen } = useStore()
  const count = cart.reduce((total, entry) => total + entry.quantity, 0)
  const query = controlledQuery ?? localQuery
  const changeQuery = onQueryChange ?? setLocalQuery

  useEffect(() => {
    if (query || suggestionsPaused || reducedMotion) return undefined
    const timer = window.setInterval(() => setSuggestion((index) => (index + 1) % suggestions.length), 2200)
    return () => window.clearInterval(timer)
  }, [query, suggestionsPaused, reducedMotion])

  const submit = (event) => {
    event.preventDefault()
    if (onQueryChange) {
      inputRef.current?.blur()
      return
    }
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search')
  }

  return <section aria-label="Store search" className="sticky top-0 z-40 border-b border-white/60 bg-cream-100/85 py-2.5 backdrop-blur-2xl dark:border-white/10 dark:bg-night-950/85">
    <form onSubmit={submit} role="search" className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4">
      <div className="flex h-13 min-w-0 flex-1 items-center gap-3 rounded-full border border-white/85 bg-white/75 px-4 shadow-[0_10px_30px_rgba(48,39,31,.07),inset_0_1px_0_rgba(255,255,255,.9)] focus-within:ring-2 focus-within:ring-sage-400 backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
        <button type="submit" aria-label="Search the menu" className="grid size-7 shrink-0 place-items-center text-coffee-700 dark:text-cream-200"><Search size={20} /></button>
        <div className="relative min-w-0 flex-1">
          <input ref={inputRef} type="text" role="searchbox" enterKeyHint="search" value={query} onChange={(event) => changeQuery(event.target.value)} onFocus={() => setSuggestionsPaused(true)} onBlur={() => setSuggestionsPaused(false)} aria-label="Search the menu" className="relative z-0 h-10 w-full bg-transparent text-sm text-coffee-900 outline-none dark:text-cream-100" />
          {!query && <AnimatePresence initial={false} mode="wait"><motion.div key={suggestion} initial={reducedMotion ? false : { y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reducedMotion ? undefined : { y: -12, opacity: 0 }} transition={{ duration: .3 }} className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden whitespace-nowrap text-sm"><span className="shrink-0 text-coffee-400 dark:text-cream-400">Looking for&nbsp;</span><button type="button" onPointerDown={(event) => event.preventDefault()} onClick={() => { changeQuery(suggestions[suggestion]); inputRef.current?.focus({ preventScroll: true }) }} className="pointer-events-auto truncate font-semibold text-sage-700 underline underline-offset-2 dark:text-sage-300">{suggestions[suggestion]}</button></motion.div></AnimatePresence>}
        </div>
        {query && <button type="button" onClick={() => { changeQuery(''); inputRef.current?.focus({ preventScroll: true }) }} aria-label="Clear search" className="grid size-7 shrink-0 place-items-center text-coffee-500 dark:text-cream-300"><X size={17} /></button>}
      </div>
      <button type="button" onClick={() => setListOpen(true)} aria-label={`Open cart with ${count} items`} className="relative grid size-13 shrink-0 place-items-center rounded-full bg-sage-700 text-white shadow-[0_10px_24px_rgba(57,61,50,.28)] transition hover:-translate-y-0.5 dark:bg-sage-300 dark:text-night-950"><ShoppingBag size={22} />{count > 0 && <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-coffee-700 text-[10px] font-bold text-white">{count}</span>}</button>
    </form>
  </section>
}
