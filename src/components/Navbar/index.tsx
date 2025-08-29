import LogoEva from '@/assets/logo-marrom-eva.webp'
import LogoEvaBege from '@/assets/logo-bege-eva.webp'
import { Link } from 'react-router-dom'
import { SocialMedia } from '../SocialMedia'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaHome, FaInfoCircle, FaBox, FaPhone, FaBriefcase, FaTimes } from 'react-icons/fa'
import { useScrollEffect } from '../../hooks/useScrollEffect'
import { Menu, Phone, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Navbar() {
  const isScrolled = useScrollEffect(50)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: <FaHome className="w-5 h-5" /> },
    { to: '/about', label: 'Sobre Nós', icon: <FaInfoCircle className="w-5 h-5" /> },
    { to: '/products', label: 'Produtos', icon: <FaBox className="w-5 h-5" /> },
    { to: '/contact', label: 'Contato', icon: <FaPhone className="w-5 h-5" /> },
    { to: '/work-with-us', label: 'Trabalhe Conosco', icon: <FaBriefcase className="w-5 h-5" /> },
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      label: 'Telefone',
      value: '(11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      value: 'contato@evamarcenaria.com',
      href: 'mailto:contato@evamarcenaria.com'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Endereço',
      value: 'São Paulo, SP',
      href: '#'
    }
  ]

  const NavLinks = ({ className = '', onClick }: { className?: string; onClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-link transition-colors duration-200 navbar-font ${className}`}
          onClick={onClick}
        >
          <span className="mr-3 text-primary">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </>
  )

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`w-full flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-200 px-4 md:px-12 py-2 ${
        isScrolled ? 'bg-accent shadow-md backdrop-blur-sm' : 'bg-black/50 backdrop-blur-sm'
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
                        className="w-16 h-16 md:w-24 md:h-24 object-contain transition-colors duration-200"
        />
      </picture>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-12">
        <NavLinks
          className={
            isScrolled ? 'text-primary hover:text-primary/80' : 'text-accent hover:text-primary'
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
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button
              className={`relative p-3 rounded-full transition-colors duration-200 ${
                isScrolled 
                  ? 'text-primary hover:bg-primary/10' 
                  : 'text-accent hover:bg-accent/10'
              }`}
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-6 h-6" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </button>
          </SheetTrigger>
          
          <SheetContent 
            side="right" 
            className="w-full max-w-[350px] bg-white border-l-2 border-primary/20 p-0 overflow-hidden"
            hideCloseButton={true}
          >
            {/* Header do Menu */}
            <SheetHeader className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white relative">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-left">
                  <picture>
                    <source srcSet={LogoEvaBege} type="image/png" />
                    <img
                      src={LogoEvaBege}
                      alt="Eva Marcenaria"
                      className="w-12 h-12 object-contain"
                    />
                  </picture>
                </SheetTitle>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                  aria-label="Fechar menu"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2">
                <h2 className="text-lg font-semibold font-montserrat">Menu de Navegação</h2>
                <p className="text-xs opacity-90 mt-1">Explore nossos serviços</p>
              </div>
            </SheetHeader>
            
            {/* Conteúdo do Menu */}
            <div className="flex flex-col h-full bg-white">
              {/* Container com Scroll */}
              <div className="flex-1 overflow-y-auto mobile-menu-scroll">
                {/* Navegação Mobile */}
                <nav className="p-4">
                  <div className="space-y-1">
                    <NavLinks
                      className="flex items-center w-full p-3 text-primary text-base font-medium rounded-lg hover:bg-primary/10 transition-colors duration-200 border border-transparent hover:border-primary/20 bg-white"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                </nav>

                {/* Informações de Contato */}
                <div className="p-4 bg-gray-50 border-t border-primary/10">
                  <h3 className="text-base font-semibold text-primary mb-3 font-montserrat">
                    Informações de Contato
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 group shadow-sm"
                      >
                        <div className="p-2 rounded-full bg-primary/20 text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">{info.label}</p>
                          <p className="text-xs text-gray-600">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Media Mobile */}
                <div className="p-4 bg-primary/5 border-t border-primary/10">
                  <h3 className="text-base font-semibold text-primary mb-3 font-montserrat">
                    Redes Sociais
                  </h3>
                  <div className="flex items-center justify-between">
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
                        {
                          icon: <FaWhatsapp />,
                          link: 'https://wa.me/5511999999999',
                        },
                      ]}
                      direction="row"
                      gap={4}
                      size="lg"
                      className="text-primary"
                      isScrolled={true}
                    />
                  </div>
                  
                  {/* Botão de WhatsApp Flutuante */}
                  <a
                    href="https://wa.me/5511999999999"
                    className="mt-4 w-full flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Fale Conosco no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
