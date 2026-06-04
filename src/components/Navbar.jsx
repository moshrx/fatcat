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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-linen-100/95 backdrop-blur-md border-b border-linen-300 shadow-subtle' : 'bg-transparent'
      }`}>
        <nav className="wrap flex items-center justify-between h-16 sm:h-[68px]">

          <a href="#home" onClick={close} className="w-20 flex-shrink-0">
            <CatLogo className="w-20" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="font-body text-sm font-medium text-ink-200 hover:text-orange px-4 py-2 rounded-full hover:bg-orange-pale transition-all duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#custom-orders" className="hidden md:inline-flex btn-fill text-sm px-5 py-2.5">
            Order a Cake
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-linen-300 bg-white/70 hover:border-orange transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-4.5 h-px bg-ink-300 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[3px]' : ''}`} style={{width:'18px'}} />
            <span className={`block h-px bg-ink-300 transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-[18px]'}`} />
            <span className={`block w-4.5 h-px bg-ink-300 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} style={{width:'18px'}} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-ink-400/30 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={close} />
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-linen-100 border-l border-linen-300 flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-5 h-16 border-b border-linen-300">
            <CatLogo className="w-16" />
            <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-full border border-linen-300 text-ink-200 hover:text-orange transition" aria-label="Close menu">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {[{ label: 'Home', href: '#home' }, ...NAV_LINKS].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={close} className="block font-body font-medium text-ink-300 hover:text-orange py-3 border-b border-linen-200 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#custom-orders" onClick={close} className="btn-fill w-full justify-center">Order a Custom Cake</a>
            </div>
          </nav>
          <div className="px-5 py-4 border-t border-linen-300">
            <p className="font-mono text-xs text-ink-100">Tue–Sun · 8 AM – 6 PM</p>
            <a href="tel:+19023671321" className="font-body text-sm font-medium text-orange mt-1 block">902-367-1321</a>
          </div>
        </div>
      </div>
    </>
  )
}
