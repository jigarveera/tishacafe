import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { menuCategories } from '../../data/menuPreview.js'
import StoreCategoryIcon from '../ui/StoreCategoryIcon.jsx'

const categories = [{ id: 'all', label: 'All' }, ...menuCategories]
const priceOptions = [
  { id: 'all', label: 'Any price' },
  { id: 'under-200', label: 'Under ₹200' },
  { id: '200-399', label: '₹200–₹399' },
  { id: '400-plus', label: '₹400 and above' },
]
const dietOptions = [
  { id: 'all', label: 'All food' },
  { id: 'veg', label: 'Veg' },
  { id: 'non-veg', label: 'Non-veg' },
]

function FilterGroup({ title, open, onToggle, children }) {
  return <section className="rounded-2xl border border-white/70 bg-cream-50/80 shadow-sm dark:border-white/10 dark:bg-night-800/80">
    <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-xs font-bold text-coffee-900 dark:text-cream-100">
      {title}<ChevronDown size={16} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
    {open && <div className="border-t border-dashed border-coffee-200/70 px-2 pb-2 pt-2 dark:border-white/10">{children}</div>}
  </section>
}

export default function MenuFilterSidebar({ category = 'all', onCategoryChange, priceRange = 'all', onPriceRangeChange, diet = 'all', onDietChange }) {
  const [open, setOpen] = useState({ category: true, price: false, diet: false })
  const [categoryQuery, setCategoryQuery] = useState('')
  const toggle = (key) => setOpen((current) => ({ ...current, [key]: !current[key] }))
  const visibleCategories = categories.filter((item) => item.label.toLowerCase().includes(categoryQuery.trim().toLowerCase()))

  return <aside aria-label="Menu filters" className="hidden pt-4 md:sticky md:top-[73px] md:block lg:top-[153px]">
    <div className="no-scrollbar max-h-[50vh] space-y-2 overflow-y-auto rounded-[24px] border border-white/70 bg-cream-50/50 p-2 shadow-[0_16px_40px_rgba(48,39,31,.1)] dark:border-white/10 dark:bg-night-900/60">
      <FilterGroup title="Food categories" open={open.category} onToggle={() => toggle('category')}>
        <label className="mb-2 flex items-center gap-2 rounded-xl border border-coffee-200/70 bg-white/75 px-2 text-coffee-500 focus-within:ring-2 focus-within:ring-sage-400 dark:border-white/10 dark:bg-night-900 dark:text-cream-300">
          <Search size={14} className="shrink-0" />
          <input type="search" value={categoryQuery} onChange={(event) => setCategoryQuery(event.target.value)} placeholder="Find category" aria-label="Search food categories" className="h-8 min-w-0 w-full bg-transparent text-xs outline-none placeholder:text-coffee-400 dark:placeholder:text-cream-400" />
        </label>
        <div className="no-scrollbar max-h-52 space-y-1 overflow-y-auto">
          {visibleCategories.map((item) => <button key={item.id} type="button" onClick={() => onCategoryChange(item.id)} aria-pressed={category === item.id} className={`${category === item.id ? 'border-sage-500 bg-sage-100/80 dark:border-sage-300 dark:bg-white/10' : 'border-transparent'} flex w-full items-center gap-2 rounded-xl border px-1.5 py-1 text-left text-[11px] font-semibold text-coffee-800 transition hover:bg-sage-100 dark:text-cream-100 dark:hover:bg-white/10`}>
            <span className="grid size-[27px] shrink-0 place-items-center rounded-lg bg-night-900 dark:bg-night-800"><StoreCategoryIcon type={item.id === 'all' ? 'ALL' : item.id} className="size-[22px]" /></span><span className="truncate">{item.label}</span>
          </button>)}
          {visibleCategories.length === 0 && <p className="px-2 py-2 text-xs text-coffee-500 dark:text-cream-300">No categories found.</p>}
        </div>
      </FilterGroup>
      <FilterGroup title="Price range" open={open.price} onToggle={() => toggle('price')}>
        <div className="space-y-1">{priceOptions.map((option) => <button key={option.id} type="button" onClick={() => onPriceRangeChange(option.id)} aria-pressed={priceRange === option.id} className={`${priceRange === option.id ? 'bg-sage-100 font-bold text-sage-800 dark:bg-sage-900/60 dark:text-sage-200' : 'text-coffee-700 dark:text-cream-200'} w-full rounded-xl px-2 py-2 text-left text-xs hover:bg-sage-100/70 dark:hover:bg-white/10`}>{option.label}</button>)}</div>
      </FilterGroup>
      <FilterGroup title="Veg, non-veg" open={open.diet} onToggle={() => toggle('diet')}>
        <div className="space-y-1">{dietOptions.map((option) => <button key={option.id} type="button" onClick={() => onDietChange(option.id)} aria-pressed={diet === option.id} className={`${diet === option.id ? 'bg-sage-100 font-bold text-sage-800 dark:bg-sage-900/60 dark:text-sage-200' : 'text-coffee-700 dark:text-cream-200'} w-full rounded-xl px-2 py-2 text-left text-xs hover:bg-sage-100/70 dark:hover:bg-white/10`}>{option.label}</button>)}</div>
        <p className="px-2 pt-2 text-[10px] leading-4 text-coffee-500 dark:text-cream-300">The current café menu is listed as vegetarian.</p>
      </FilterGroup>
    </div>
  </aside>
}
