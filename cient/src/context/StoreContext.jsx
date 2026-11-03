import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { commerceStore } from '../store/commerce.js'
import { StoreContext } from './store.js'

function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }) {
  const [dark, setDark] = useState(() => readStored('tisha-dark', false))
  const [accountOpen, setAccountOpen] = useState(false)
  const [listOpen, setListOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('tisha-dark', JSON.stringify(dark))
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return <Provider store={commerceStore}><StoreContext.Provider value={{
    dark, setDark, accountOpen, setAccountOpen, listOpen, setListOpen,
  }}>{children}</StoreContext.Provider></Provider>
}

