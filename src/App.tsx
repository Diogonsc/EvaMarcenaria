import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes'
import { ErrorBoundary } from './components/ui/error-boundary'
import { Preloader } from './components/ui/preloader'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import { Footer } from './components/Footer'

// Configuração das rotas para preload
const routes = [
  { path: '/', importFn: () => import('./pages/Home').then(m => m.Home) },
  { path: '/about', importFn: () => import('./pages/About').then(m => m.About) },
  { path: '/products', importFn: () => import('./pages/Products').then(m => m.Products) },
  { path: '/contact', importFn: () => import('./pages/Contact').then(m => m.Contact) },
  { path: '/work-with-us', importFn: () => import('./pages/WorkWithUs').then(m => m.WorkWithUs) },
]

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full bg-gray-50">
        <Navbar />
        <main className="w-full main-content">
          <AppRoutes />
        </main>
        <WhatsAppButton />
        <BackToTop />
        <Preloader routes={routes} />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
