import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

// lazy loaded page imports
const HomePage = lazy(() => import('./components/pages/HomePage.jsx'));

// loader import
import Loader from './components/ui/Loader.jsx';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Suspense>
  )
}

export default App
