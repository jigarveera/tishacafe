import { useEffect, useState } from 'react'
import Loader from '../ui/Loader.jsx'

const seenKey = 'tisha-loader-seen'

export default function RouteLoadingGate({ children }) {
  const [firstVisit] = useState(() => {
    try {
      return !window.sessionStorage.getItem(seenKey)
    } catch { /* Storage may be unavailable; the loader still works. */ }
    return true
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (firstVisit) {
      try { window.sessionStorage.setItem(seenKey, '1') } catch { /* Storage may be unavailable. */ }
    }
    const timer = window.setTimeout(() => setLoading(false), firstVisit ? 700 : 200)
    return () => window.clearTimeout(timer)
  }, [firstVisit])

  return <>{children}{loading && <Loader mode={firstVisit ? 'journey' : 'arrived'} />}</>
}
