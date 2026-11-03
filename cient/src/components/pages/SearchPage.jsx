import { useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { menuCategories, menuItems } from '../../data/menuPreview.js'
import StoreSearchBar from '../layout/StoreSearchBar.jsx'
import CategoryFadeSection from '../layout/CategoryFadeSection.jsx'
import StoreCategoryIcon from '../ui/StoreCategoryIcon.jsx'
import StoreProductCard from '../ui/StoreProductCard.jsx'

const allCategory = { id: 'all', label: 'All' }

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const categoriesRef = useRef(null)
  const query = params.get('q') ?? ''
  const requestedCategory = params.get('category') ?? 'all'
  const category = menuCategories.some((group) => group.id === requestedCategory) ? requestedCategory : 'all'

  const setQuery = (value) => setParams((current) => {
    const next = new URLSearchParams(current)
    if (value) next.set('q', value)
    else next.delete('q')
    return next
  }, { replace: true })

  const setCategory = (value) => {
    setParams((current) => {
      const next = new URLSearchParams(current)
      if (value === 'all') next.delete('category')
      else next.set('category', value)
      return next
    }, { replace: true })
    categoriesRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const categories = useMemo(() => {
    const all = [allCategory, ...menuCategories]
    return category === 'all' ? all : [all.find((group) => group.id === category), ...all.filter((group) => group.id !== category)]
  }, [category])

  const results = useMemo(() => menuItems.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category
    const text = `${item.name} ${item.categoryLabel} ${item.ingredients.join(' ')}`.toLowerCase()
    return matchesCategory && text.includes(query.trim().toLowerCase())
  }), [category, query])

  return <main className="min-h-screen pb-26">
    <StoreSearchBar query={query} onQueryChange={setQuery} />
    <div className="mx-auto w-full max-w-7xl md:grid md:grid-cols-[176px_minmax(0,1fr)] md:items-start md:gap-4 md:px-4">
    <aside aria-label="Filter by category" className="hidden md:sticky md:top-[73px] md:block lg:top-[153px]"><div className="max-h-[calc(100vh-170px)] overflow-y-auto rounded-[28px] border border-white/70 bg-cream-50/70 p-2.5 shadow-[0_16px_40px_rgba(48,39,31,.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-night-900/80">{categories.map((group) => <button key={group.id} type="button" onClick={() => setCategory(group.id)} aria-pressed={category === group.id} className={`${category === group.id ? 'border-sage-500 bg-sage-100/80 dark:border-sage-300 dark:bg-white/10' : 'border-transparent'} flex w-full items-center gap-2.5 rounded-2xl border p-2 text-left text-xs font-bold text-coffee-800 transition hover:bg-sage-100 dark:text-cream-100 dark:hover:bg-white/10`}><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-night-900 dark:bg-night-800"><StoreCategoryIcon type={group.id === 'all' ? 'ALL' : group.id} className="size-9" /></span><span className="truncate">{group.label}</span></button>)}</div></aside>
    <div className="min-w-0">
    <CategoryFadeSection label="Filter by category" className="md:hidden"><div ref={categoriesRef} className="mx-auto flex w-full max-w-6xl snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{categories.map((group) => <button key={group.id} type="button" onClick={() => setCategory(group.id)} aria-pressed={category === group.id} className="group flex w-[82px] shrink-0 snap-start flex-col items-center gap-2"><span className={`${category === group.id ? 'border-2 border-sage-500 dark:border-sage-300' : 'border-2 border-transparent'} grid size-19 place-items-center rounded-[23px] bg-night-900 transition group-hover:-translate-y-1 dark:bg-night-800`}><StoreCategoryIcon type={group.id === 'all' ? 'ALL' : group.id} className="size-16" /></span><span className="max-w-full truncate text-xs font-semibold text-coffee-800 dark:text-cream-200">{group.label}</span></button>)}</div></CategoryFadeSection>
    <section aria-label="Menu items" className="mx-auto w-full max-w-6xl px-4 pt-3 sm:pt-5">{results.length ? <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-3 pb-16 pt-3 sm:grid-cols-[repeat(auto-fit,minmax(218px,1fr))] sm:gap-y-5">{results.map((item) => <StoreProductCard key={item.id} item={item} />)}</div> : <p className="rounded-[26px] border border-white/70 bg-white/60 px-6 py-9 text-center text-sm text-coffee-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-cream-300">No dishes match this search.</p>}</section>
    </div>
    </div>
  </main>
}
