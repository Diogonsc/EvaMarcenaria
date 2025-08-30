import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes'
import { ErrorBoundary } from './components/ui/error-boundary'
import { Preloader } from './components/ui/preloader'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import { Footer } from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { useLoadingState } from './hooks/useLoadingState'
import { SkipLink } from './components/ui/skip-link'

// Configuração das rotas para preload
const routes = [
  { path: '/', importFn: () => import('./pages/Home').then(m => m.Home) },
  { path: '/about', importFn: () => import('./pages/About').then(m => m.About) },
  { path: '/products', importFn: () => import('./pages/Products').then(m => m.Products) },
  { path: '/contact', importFn: () => import('./pages/Contact').then(m => m.Contact) },
  { path: '/work-with-us', importFn: () => import('./pages/WorkWithUs').then(m => m.WorkWithUs) },
]

function App() {
  const { isLoading, handleLoadingComplete } = useLoadingState({
    initialLoadingTime: 3000,
    minDisplayTime: 2000,
    onLoadingComplete: () => {
      console.log('Loading completed - Application ready!');
    }
  });

  return (
    <ErrorBoundary>
      <SkipLink />
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadingComplete={handleLoadingComplete}
        minDisplayTime={2000}
      />
      <div className="w-full bg-gray-50">
        <Navbar />
        <main id="main-content" className="w-full main-content" role="main">
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
