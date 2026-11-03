import { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commerceActions } from '../store/commerce.js'

export const StoreContext = createContext(null)

export function useStore() {
  const value = useContext(StoreContext)
  const dispatch = useDispatch()
  const liked = useSelector((state) => state.commerce.liked)
  const cart = useSelector((state) => state.commerce.cart)
  if (!value) throw new Error('useStore must be used within StoreProvider')
  const addToCart = (item, variant = null, quantity = 1, unitPrice = item.price) => {
    dispatch(commerceActions.addToCart({ itemId: item.id, variant, quantity, unitPrice }))
  }
  return {
    ...value,
    liked,
    cart,
    toggleLiked: (id) => dispatch(commerceActions.toggleLiked(id)),
    addToCart,
    setCartQuantity: (key, quantity) => dispatch(commerceActions.setCartQuantity({ key, quantity })),
    removeFromCart: (key) => dispatch(commerceActions.removeFromCart(key)),
  }
}
