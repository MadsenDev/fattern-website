import { HashRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import type { MouseEvent } from 'react'
import './index.css'
import Logo from './components/Logo'
import HomePage from './HomePage'
import MarketplacePage from './MarketplacePage'

const homeNavLinks = [
  { label: 'Funksjoner', path: '/', hash: '#funksjoner' },
  { label: 'Malredigering', path: '/', hash: '#malredigering' },
  { label: 'Import & migrering', path: '/', hash: '#import' },
  { label: 'Supporter-pakken', path: '/', hash: '#supporter' },
  { label: 'Malmarked', path: '/marketplace', hash: '' },
  { label: 'FAQ', path: '/', hash: '#faq' },
]

const marketplaceNavLinks = [
  { label: 'Filtre', path: '/marketplace', hash: '#kategorier' },
  { label: 'Utvalg', path: '/marketplace', hash: '#utvalg' },
  { label: 'Prosess', path: '/marketplace', hash: '#prosess' },
  { label: 'FAQ', path: '/marketplace', hash: '#faq-marketplace' },
]

function Header() {
  const location = useLocation()
  const isMarketplace = location.pathname.includes('marketplace')
  const navLinks = isMarketplace ? marketplaceNavLinks : homeNavLinks

  const handleHashClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash && location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow-sm border-b border-sand/60">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-soft">
          {navLinks.map((link) => {
            const isActive = 
              (isMarketplace && link.path === '/marketplace') ||
              (!isMarketplace && link.path === '/' && (!link.hash || location.hash === link.hash))
            
            // Use regular anchor for same-page hash links, Link component for route changes
            if (link.hash && link.path === location.pathname) {
              return (
                <a
                  key={`${link.path}${link.hash}`}
                  href={link.hash}
                  onClick={(e) => handleHashClick(e, link.hash)}
                  className={`hover:text-accent transition-colors ${
                    isActive ? 'text-accent font-semibold' : ''
                  }`}
                >
                  {link.label}
                </a>
              )
            }
            
            return (
              <Link
                key={`${link.path}${link.hash}`}
                to={{ pathname: link.path, hash: link.hash }}
                className={`hover:text-accent transition-colors ${
                  isActive ? 'text-accent font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-700 transition">
            Last ned
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="space-y-2">
          <Logo />
          <p className="text-white/70 text-sm">
            Fattern – enklere fakturering. Mer privatliv. Full kontroll.
          </p>
        </div>
        <div className="text-sm text-white/80 space-y-2">
          <p className="font-semibold text-white">Lenker</p>
          <div className="flex flex-col gap-1">
            <Link className="hover:text-moss" to={{ pathname: '/', hash: '#funksjoner' }}>Funksjoner</Link>
            <Link className="hover:text-moss" to={{ pathname: '/', hash: '#supporter' }}>Supporter-pakken</Link>
            <Link className="hover:text-moss" to={{ pathname: '/', hash: '#faq' }}>FAQ</Link>
            <Link className="hover:text-moss" to={{ pathname: '/marketplace', hash: '#utvalg' }}>Malmarked</Link>
          </div>
        </div>
        <div className="text-sm text-white/80 space-y-2">
          <p className="font-semibold text-white">Kontakt</p>
          <p>kontakt@fattern.no</p>
          <p>Bygget av deg som er lei av sky-abonnement.</p>
          <p className="text-white/60 text-xs">© {year} Fattern</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // Scroll to top when no hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-ink">
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

