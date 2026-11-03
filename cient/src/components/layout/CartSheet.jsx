import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { menuItems, formatPrice } from '../../data/menuPreview.js'
import { cutoutsByItemId } from '../../data/storeVisuals.js'
import { useStore } from '../../context/store.js'

export default function CartSheet() {
  const { cart, listOpen, setListOpen, setCartQuantity, removeFromCart } = useStore()
  useEffect(() => {
    if (!listOpen) return undefined
    const close = (event) => { if (event.key === 'Escape') setListOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [listOpen, setListOpen])
  const entries = cart.map((entry) => ({ ...entry, item: menuItems.find((item) => item.id === entry.itemId) })).filter((entry) => entry.item)
  const subtotal = entries.reduce((total, entry) => total + (entry.unitPrice ?? entry.item.price ?? 0) * entry.quantity, 0)
  const hasUnpriced = entries.some((entry) => (entry.unitPrice ?? entry.item.price) == null)

  return <AnimatePresence>{listOpen && <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
    <motion.button type="button" aria-label="Close cart" onClick={() => setListOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-night-950/50 backdrop-blur-sm" />
    <motion.section role="dialog" aria-modal="true" aria-labelledby="cart-heading" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ type: 'spring', stiffness: 320, damping: 32 }} className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-[34px] border border-white/75 bg-cream-50/95 px-4 pb-10 pt-5 shadow-2xl backdrop-blur-3xl sm:rounded-[34px] sm:px-6 dark:border-white/15 dark:bg-night-800/95">
      <div className="mx-auto mb-7 h-1.5 w-12 rounded-full bg-coffee-300/70 sm:hidden" />
      <div className="flex items-start justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-sage-700 dark:text-sage-300">Your order</p><h2 id="cart-heading" className="mt-2 font-serif text-4xl font-bold">Cart</h2></div><button type="button" onClick={() => setListOpen(false)} aria-label="Close cart" className="grid size-10 place-items-center rounded-full bg-cream-300/70 dark:bg-white/10"><X size={18} /></button></div>
      {entries.length ? <div className="mt-6 grid gap-3">{entries.map(({ key, item, variant, quantity, unitPrice }) => <div key={key} className="flex items-center gap-3 rounded-[23px] border border-white/70 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-white/5"><div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-[18px] bg-sage-100 dark:bg-sage-900/30">{cutoutsByItemId[item.id] || item.image ? <img src={cutoutsByItemId[item.id] ?? item.image} alt="" className="h-full w-full object-contain" /> : <ShoppingBag size={23} className="text-sage-700 dark:text-sage-300" />}</div><div className="min-w-0 flex-1"><Link to={`/store/${item.id}`} onClick={() => setListOpen(false)} className="block truncate text-sm font-bold hover:underline">{item.name}</Link><p className="truncate text-xs text-coffee-500 dark:text-cream-300">{variant || item.categoryLabel}</p><p className="mt-1 text-sm font-bold text-sage-800 dark:text-sage-300">{formatPrice(unitPrice ?? item.price)}</p></div><div className="flex flex-col items-end gap-2"><button type="button" onClick={() => removeFromCart(key)} aria-label={`Remove ${item.name}`} className="grid size-7 place-items-center rounded-full text-coffee-500 hover:bg-cream-300 dark:text-cream-300 dark:hover:bg-white/10"><Trash2 size={15} /></button><div className="flex items-center rounded-full bg-sage-700 text-white dark:bg-sage-300 dark:text-night-950"><button type="button" onClick={() => setCartQuantity(key, quantity - 1)} aria-label={`Remove one ${item.name}`} className="grid size-7 place-items-center"><Minus size={13} /></button><span className="min-w-4 text-center text-[11px] font-bold">{quantity}</span><button type="button" onClick={() => setCartQuantity(key, quantity + 1)} aria-label={`Add one ${item.name}`} className="grid size-7 place-items-center"><Plus size={13} /></button></div></div></div>)}</div> : <div className="mt-7 rounded-3xl bg-sage-100/70 p-8 text-center dark:bg-sage-900/30"><ShoppingBag className="mx-auto text-sage-700 dark:text-sage-300" size={30} /><p className="mt-3 text-sm font-semibold">Your cart is empty.</p><Link to="/store" onClick={() => setListOpen(false)} className="mt-3 inline-block text-sm font-bold text-sage-700 underline dark:text-sage-300">Explore the menu</Link></div>}
      {entries.length > 0 && <div className="mt-6 rounded-[25px] border border-white/70 bg-white/65 p-5 dark:border-white/10 dark:bg-white/5"><div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold">Estimated subtotal</span><span className="text-xl font-bold text-sage-800 dark:text-sage-300">{formatPrice(subtotal)}</span></div><p className="mt-2 text-xs leading-5 text-coffee-500 dark:text-cream-300">{hasUnpriced ? 'Some prices still need confirmation. ' : ''}Menu prices and availability must be confirmed before placing an order.</p><button type="button" disabled className="mt-5 h-13 w-full cursor-not-allowed rounded-full bg-sage-700/55 text-sm font-bold text-white dark:bg-sage-300/45 dark:text-night-950">Checkout setup in progress</button></div>}
    </motion.section>
  </div>}</AnimatePresence>
}
