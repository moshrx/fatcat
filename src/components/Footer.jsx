import CatLogo from './CatLogo'

const LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'Our Menu',      href: '#menu' },
  { label: 'Custom Orders', href: '#custom-orders' },
  { label: 'About Us',      href: '#about' },
  { label: 'Reviews',       href: '#reviews' },
  { label: 'Contact',       href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-400 text-linen-200">

      {/* CTA strip */}
      <div className="border-b border-linen-400/10">
        <div className="wrap py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-bold text-2xl text-linen-100 mb-1">Ready to order something special?</h3>
            <p className="font-body text-sm text-linen-400/70">Custom cakes, cupcakes, and more. Made just for you.</p>
          </div>
          <a href="#custom-orders" className="btn-ghost-light flex-shrink-0">
            Start Your Order
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="wrap py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <CatLogo className="w-20 mb-4" dark />
          <p className="font-body text-sm text-linen-400/60 leading-relaxed max-w-xs">
            Small-batch, from-scratch baking in Charlottetown, PEI. Made the way grandma would have insisted on.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-linen-400/40 tracking-[0.2em] uppercase mb-4">Navigation</p>
          <ul className="space-y-2">
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="font-body text-sm text-linen-400/60 hover:text-orange transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-linen-400/40 tracking-[0.2em] uppercase mb-4">Visit Us</p>
          <address className="not-italic font-body text-sm text-linen-400/60 space-y-2">
            <p className="leading-relaxed">3-447 University Ave<br />Charlottetown, PE C1A 8K3</p>
            <p><a href="tel:+19023671321" className="hover:text-orange transition-colors">902-367-1321</a></p>
            <p>Tue – Sun · 8:00 AM – 6:00 PM</p>
          </address>
          <div className="flex gap-2 mt-5">
            {[
              { href:'https://www.instagram.com/fatcatbakery_pei/', label:'Instagram', path:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { href:'https://www.facebook.com/fatcatbakerypei/', label:'Facebook', path:'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ].map(({ href, label, path }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-full border border-linen-400/15 hover:border-orange hover:text-orange flex items-center justify-center text-linen-400/50 transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={path}/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-linen-400/10">
        <div className="wrap py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-linen-400/30">© {year} Fat Cat Bakery. All rights reserved.</p>
          <p className="font-mono text-xs text-linen-400/30">Made with love in Charlottetown, PEI</p>
        </div>
      </div>

    </footer>
  )
}
