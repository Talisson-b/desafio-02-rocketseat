import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

import Success from './pages/Success'
import { AnimatePresence } from 'framer-motion'

const Router = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
