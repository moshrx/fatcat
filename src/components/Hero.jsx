import CatLogo from './CatLogo'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] bg-linen-100 flex flex-col justify-center overflow-hidden">

      {/* Subtle warm wash top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fde8d4 0%, transparent 70%)' }} />

      {/* Thin top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linen-300" />

      <div className="wrap relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CatLogo className="w-20 sm:w-24" />
              <div className="h-px flex-1 bg-linen-300 max-w-[80px]" />
              <span className="font-hand text-orange text-base">Charlottetown, PEI</span>
            </div>

            <h1 className="font-display font-bold text-hero text-ink-400 leading-[1.0] mb-6">
              Baked from<br />
              <em className="text-orange not-italic">scratch,</em><br />
              every morning.
            </h1>

            <p className="font-body text-ink-200 text-base sm:text-lg leading-relaxed max-w-md mb-10">
              Small-batch, from-scratch baking in the heart of Charlottetown.
              Think craft brewery, but for cake — every loaf made the way
              grandma would have insisted on.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#custom-orders" className="btn-fill text-base px-8 py-4">
                Order a Custom Cake
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#menu" className="btn-outline text-base px-8 py-4">
                Browse the Menu
              </a>
            </div>

            {/* Small details row */}
            <div className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-linen-300">
              {[
                { n: 'Tue–Sun', l: '8 AM – 6 PM' },
                { n: 'From scratch', l: 'Every single day' },
                { n: 'Vegan', l: 'Full menu available' },
              ].map(({ n, l }) => (
                <div key={n}>
                  <p className="font-display font-semibold text-ink-400 text-sm leading-tight">{n}</p>
                  <p className="font-body text-ink-100 text-xs mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image collage */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-[72%] aspect-[3/4] overflow-hidden rounded-2xl shadow-image">
                <img src="/images/fb_7.jpg" alt="Fat Cat Bakery cakes on display" className="w-full h-full object-cover" />
              </div>
              {/* Inset image bottom-left */}
              <div className="absolute bottom-4 left-0 w-[48%] aspect-square overflow-hidden rounded-2xl shadow-image border-4 border-linen-100">
                <img src="/images/fb_2.jpg" alt="Custom rosette cake" className="w-full h-full object-cover" />
              </div>
              {/* Hand-written accent */}
              <div className="absolute top-4 left-8 bg-white rounded-xl px-4 py-2 shadow-subtle rotate-[-4deg]">
                <span className="font-hand text-orange text-lg">made with love</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
