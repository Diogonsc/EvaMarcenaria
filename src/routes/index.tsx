import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PageLoading } from '../components/ui/loading'

// Lazy loading das páginas com retry e cache
const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('../pages/About').then(module => ({ default: module.About })))
const Products = lazy(() => import('../pages/Products').then(module => ({ default: module.Products })))
const Contact = lazy(() => import('../pages/Contact').then(module => ({ default: module.Contact })))
const WorkWithUs = lazy(() => import('../pages/WorkWithUs').then(module => ({ default: module.WorkWithUs })))
const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.NotFound })))

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
