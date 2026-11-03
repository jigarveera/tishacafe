import { configureStore, createSlice } from '@reduxjs/toolkit'

function readSaved(key, fallback) {
  if (typeof window === 'undefined') return fallback
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const initialState = {
  liked: readSaved('tisha-liked', []),
  cart: readSaved('tisha-cart', readSaved('tisha-visit-list', [])),
}

const commerceSlice = createSlice({
  name: 'commerce',
  initialState,
  reducers: {
    toggleLiked(state, { payload: id }) {
      state.liked = state.liked.includes(id) ? state.liked.filter((entry) => entry !== id) : [...state.liked, id]
    },
    addToCart(state, { payload }) {
      const { itemId, variant = null, quantity = 1, unitPrice = null } = payload
      const key = `${itemId}:${variant ?? 'default'}`
      const existing = state.cart.find((entry) => entry.key === key)
      if (existing) {
        existing.quantity = Math.min(99, existing.quantity + quantity)
        existing.unitPrice = unitPrice
      } else {
        state.cart.push({ key, itemId, variant, quantity, unitPrice })
      }
    },
    setCartQuantity(state, { payload: { key, quantity } }) {
      const entry = state.cart.find((item) => item.key === key)
      if (!entry) return
      if (quantity <= 0) state.cart = state.cart.filter((item) => item.key !== key)
      else entry.quantity = Math.min(99, quantity)
    },
    removeFromCart(state, { payload: key }) {
      state.cart = state.cart.filter((entry) => entry.key !== key)
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export const commerceActions = commerceSlice.actions
export const commerceStore = configureStore({ reducer: { commerce: commerceSlice.reducer } })

if (typeof window !== 'undefined') {
  commerceStore.subscribe(() => {
    const { liked, cart } = commerceStore.getState().commerce
    try {
      window.localStorage.setItem('tisha-liked', JSON.stringify(liked))
      window.localStorage.setItem('tisha-cart', JSON.stringify(cart))
    } catch {
      // The cart still works for this session when storage is unavailable.
    }
  })
}
