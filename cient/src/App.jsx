import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import IslandNav from './components/layout/IslandNav.jsx'
import AccountSheet from './components/layout/AccountSheet.jsx'
import CartSheet from './components/layout/CartSheet.jsx'
import Loader from './components/ui/Loader.jsx'
import RouteLoadingGate from './components/layout/RouteLoadingGate.jsx'

const HomePage = lazy(() => import('./components/pages/HomePage.jsx'))
const SearchPage = lazy(() => import('./components/pages/SearchPage.jsx'))
const StorePage = lazy(() => import('./components/pages/StorePage.jsx'))
const ProductPage = lazy(() => import('./components/pages/ProductPage.jsx'))
const LikedPage = lazy(() => import('./components/pages/LikedPage.jsx'))

export default function App() {
  const location = useLocation()
  return <StoreProvider>
    <div className="min-h-screen bg-cream-100 font-sans text-coffee-900 transition-colors duration-500 dark:bg-night-950 dark:text-cream-100">
      <RouteLoadingGate key={location.key}>
      <Header />
      <Suspense fallback={<Loader mode="arrived" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:id" element={<ProductPage />} />
          <Route path="/liked" element={<LikedPage />} />
        </Routes>
      </Suspense>
      <Footer compact={location.pathname === '/'} />
      <IslandNav />
      <AccountSheet />
      <CartSheet />
      </RouteLoadingGate>
    </div>
  </StoreProvider>
}
