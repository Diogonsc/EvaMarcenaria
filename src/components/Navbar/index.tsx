import LogoEva from '@/assets/logo-marrom-eva.webp'
import LogoEvaBege from '@/assets/logo-bege-eva.webp'
import { Link } from 'react-router-dom'
import { SocialMedia } from '../SocialMedia'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { useScrollEffect } from '../../hooks/useScrollEffect'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Navbar() {
  const isScrolled = useScrollEffect(50)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Sobre' },
    { to: '/products', label: 'Produtos' },
    { to: '/contact', label: 'Contato' },
    { to: '/work-with-us', label: 'Trabalhe Conosco' },
  ]

  const NavLinks = ({ className = '', onClick }: { className?: string; onClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-link transition-colors navbar-font ${className}`}
          onClick={onClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  )

  return (
    <header
      className={`w-full flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12 py-2 ${
        isScrolled ? 'bg-accent shadow-md' : 'bg-black/50'
      }`}
    >
      {/* Logo */}
      <picture>
        <source
          srcSet={isScrolled ? LogoEva : LogoEvaBege}
          type="image/png"
        />
        <img
          src={isScrolled ? LogoEva : LogoEvaBege}
          alt="Eva Marcenaria"
          className="w-16 h-16 md:w-24 md:h-24 object-contain transition-all duration-300"
        />
      </picture>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-12">
        <NavLinks
          className={
            isScrolled ? 'text-primary hover:text-primary' : 'text-accent hover:text-primary'
          }
        />
      </nav>

      {/* Social Media Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <SocialMedia
          items={[
            {
              icon: <FaFacebookF />,
              link: 'https://www.facebook.com/eva.marcenaria',
            },
            {
              icon: <FaInstagram />,
              link: 'https://www.instagram.com/eva.marcenaria',
            },
          ]}
          direction="row"
          gap={4}
          size="md"
          className={isScrolled ? 'text-primary' : 'text-white'}
          isScrolled={isScrolled}
        />
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-accent hover:bg-accent/10'
              }`}
            >
              <Menu className="w-6 h-6" />
              <span className="sr-only">Abrir menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <picture>
                  <source srcSet={LogoEva} type="image/png" />
                  <img
                    src={LogoEva}
                    alt="Eva Marcenaria"
                    className="w-20 h-20 object-contain"
                  />
                </picture>
              </SheetTitle>
            </SheetHeader>
            
            {/* Navegação Mobile */}
            <nav className="flex flex-col gap-6 mt-8">
              <NavLinks
                className="text-primary text-lg hover:text-primary/80 transition-colors"
                onClick={() => {
                  // Fechar o menu após clicar em um link
                  const closeButton = document.querySelector('[data-slot="sheet-close"]') as HTMLButtonElement
                  if (closeButton) closeButton.click()
                }}
              />
            </nav>

            {/* Social Media Mobile */}
            <div className="mt-auto pt-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Redes Sociais</h3>
              <SocialMedia
                items={[
                  {
                    icon: <FaFacebookF />,
                    link: 'https://www.facebook.com/eva.marcenaria',
                  },
                  {
                    icon: <FaInstagram />,
                    link: 'https://www.instagram.com/eva.marcenaria',
                  },
                ]}
                direction="row"
                gap={4}
                size="lg"
                className="text-primary"
                isScrolled={true}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
