import { useState, useEffect } from 'react'
import CatLogo from './CatLogo'

const NAV_LINKS = [
  { label: 'Menu',          href: '#menu' },
  { label: 'Custom Orders', href: '#custom-orders' },
  { label: 'About',         href: '#about' },
  { label: 'Reviews',       href: '#reviews' },
  { label: 'Contact',       href: '#contact' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-espresso-900/95 backdrop-blur-xl border-b border-white/[0.06] shadow-glass'
            : 'bg-espresso-900/70 backdrop-blur-md'
        }`}
      >
        <nav className="container-lg flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo */}
          <a href="#home" onClick={close} className="w-24 flex-shrink-0">
            <CatLogo className="w-24" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative font-body text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 ${
                    active === href
                      ? 'text-brand-orange-light bg-brand-orange-dark/10'
                      : 'text-cream-200/70 hover:text-cream-100 hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#custom-orders" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
            Order a Cake
            <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-cream-200 rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream-200 rounded transition-all duration-300 ${open ? 'opacity-0 w-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream-200 rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-espresso-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-espresso-800 border-l border-white/[0.08] shadow-lift
                      transition-transform duration-300 ease-spring flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
            <CatLogo className="w-16" />
            <button
              onClick={close}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-cream-200/60 hover:text-cream-100 hover:border-white/20 transition"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {[{ label: 'Home', href: '#home' }, ...NAV_LINKS].map(({ label, href }, i) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl font-body font-medium text-cream-200/80 hover:text-cream-50 hover:bg-white/[0.06] transition-all duration-150"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 px-1">
              <a
                href="#custom-orders"
                onClick={close}
                className="btn-primary w-full text-center py-4 text-base"
              >
                Order a Custom Cake
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Drawer footer */}
          <div className="px-5 py-5 border-t border-white/[0.06]">
            <p className="font-mono text-xs text-cream-200/30 tracking-wide">Tue–Sun · 8 AM – 6 PM</p>
            <a href="tel:+19023671321" className="font-body font-medium text-sm text-brand-orange-light hover:text-brand-orange-light transition mt-1 block">
              902-367-1321
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
