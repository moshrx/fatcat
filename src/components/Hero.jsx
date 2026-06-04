import CatLogo from './CatLogo'

const STATS = [
  { value: 'From',  sub: 'Scratch' },
  { value: 'Small', sub: 'Batch' },
  { value: 'Local', sub: 'Ingredients' },
]


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-espresso-900"
    >
      {/* Background glow layers — brand orange + mint */}
      <div className="absolute inset-0 bg-radial-warm pointer-events-none" />
      <div className="absolute inset-0 bg-radial-amber pointer-events-none" />

      {/* Soft orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-orange/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-mint/5 blur-[100px] pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain opacity-100 pointer-events-none mix-blend-overlay" />

      {/* Floating category pills */}
      <div className="absolute top-28 right-4 sm:right-12 hidden sm:flex flex-col gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
        {['Cakes', 'Cheesecakes', 'Cookies'].map((t, i) => (
          <div key={t} className="label-tag text-xs" style={{ opacity: 0.6 - i * 0.15 }}>{t}</div>
        ))}
      </div>

      <div className="container-lg relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">

          {/* Logo + location */}
          <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
            <CatLogo className="w-28 sm:w-36" />
            <div className="label-tag">
              <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Charlottetown, PEI
            </div>
          </div>

          {/* Headline */}
          <h1 className="heading-xl mb-5 sm:mb-6">
            Baked from{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-orange">scratch.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 C40 2, 80 12, 120 5 C160 -1, 190 8, 198 6" stroke="#e07b39" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
            <br />
            <em className="italic text-cream-200/80 font-normal">with love & butter.</em>
          </h1>

          <p className="font-body text-base sm:text-lg text-cream-200/60 max-w-xl leading-relaxed mb-10 sm:mb-12">
            Think craft brewery, but for cake. Small batches, real ingredients, every loaf
            and cookie made the way grandma would have insisted on.
          </p>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-14 sm:mb-16">
            <a href="#custom-orders" className="btn-primary text-base px-7 py-4">
              Order a Custom Cake
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#menu" className="btn-ghost text-base px-7 py-4">
              Browse the Menu
            </a>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {STATS.map(({ value, sub }) => (
              <div key={value} className="glass-card px-4 py-2.5 flex items-center gap-2.5 rounded-2xl">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-glow flex-shrink-0" />
                <span className="font-display font-bold text-cream-50 text-sm">{value}</span>
                <span className="font-body text-cream-200/50 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream-200">Scroll</span>
        <div className="w-px h-8 bg-cream-200/40 animate-bounce" />
      </div>
    </section>
  )
}
