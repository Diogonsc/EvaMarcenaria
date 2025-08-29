import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PageLoading } from '../components/ui/loading'
import { createLazyImport, setCachedComponent } from '../config/lazy-loading'

// Lazy loading das páginas com retry e cache
const createPageImport = (path: string, componentName: string) => {
  return createLazyImport(async () => {
    const module = await import(/* @vite-ignore */ path)
    const component = module[componentName]
    setCachedComponent(componentName, component)
    return { default: component }
  })
}

const Home = lazy(createPageImport('../pages/Home', 'Home'))
const About = lazy(createPageImport('../pages/About', 'About'))
const Products = lazy(createPageImport('../pages/Products', 'Products'))
const Contact = lazy(createPageImport('../pages/Contact', 'Contact'))
const WorkWithUs = lazy(createPageImport('../pages/WorkWithUs', 'WorkWithUs'))

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
    </Suspense>
  )
}
