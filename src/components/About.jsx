// SVG icons for each pillar — no emojis
const ScratchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12h1m16 0h1M4.927 19.073l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
  </svg>
)
const LocalIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const BatchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)
const VeganIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.3 0-8-3.1-8-7 0-3 1.7-5.6 4.3-6.8C9.5 4.5 10.7 4 12 4c1.3 0 2.5.5 3.7 1.2C18.3 6.4 20 9 20 12c0 3.9-3.7 7-8 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9m0 0c-1.5-2-4-3-4-3m4 3c1.5-2 4-3 4-3" />
  </svg>
)

const PILLARS = [
  { Icon: ScratchIcon, title: 'From Scratch, Always',    body: 'No mixes, no shortcuts. Every batter starts with raw ingredients: flour, butter, eggs, and a whole lot of care.' },
  { Icon: LocalIcon,   title: 'Local and Seasonal',      body: 'We source from PEI farms where we can. Real blueberries in summer, local apples in fall, cream that actually tastes like cream.' },
  { Icon: BatchIcon,   title: 'Small-Batch on Purpose',  body: "We're not a factory. Small batches mean we can taste everything, adjust everything, and stand behind everything." },
  { Icon: VeganIcon,   title: 'Vegan Without Compromise', body: "Our plant-based menu is not an afterthought. We test every recipe until it is genuinely delicious, not just good for vegan." },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-espresso-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange-dark/5 blur-[120px] pointer-events-none" />

      <div className="container-lg relative z-10">

        {/* Story block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="label-tag mb-5">Our Story</div>
            <h2 className="heading-lg text-cream-50 mb-6">
              The craft brewery<br />
              <em className="italic text-brand-orange">of the baking world.</em>
            </h2>
            <div className="space-y-4 font-body text-cream-200/55 text-base leading-relaxed">
              <p>
                Fat Cat Bakery started with a simple belief: a great bakery should work like a great craft brewery.
                Small batches. Quality ingredients. Real recipes. Bakers who actually care about what goes in the box.
              </p>
              <p>
                We bake the way your grandma would have, if your grandma had a wild recipe collection, a love of
                unusual flavour combos, and a commitment to never cutting corners. Everything here is made from
                scratch, in our kitchen on University Ave, every single morning.
              </p>
              <p>
                Whether it's your Tuesday pick-me-up cookie or the centrepiece of your wedding day, you deserve
                something real. That's what we make.
              </p>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { n: '10+',  label: 'Years baking' },
                { n: '100%', label: 'From scratch' },
                { n: 'PEI',  label: 'Local first' },
              ].map(({ n, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-display font-black text-2xl text-brand-orange leading-none">{n}</span>
                  <span className="font-body text-xs text-cream-200/40 mt-1 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lift">
              <img
                src="/images/fb_7.jpg"
                alt="Fat Cat Bakery display counter with sliced cakes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/20 to-espresso-800/40" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 glass-card px-4 py-3 rounded-2xl shadow-glow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <p className="font-display font-bold text-cream-50 text-sm">Open since 2015</p>
              </div>
              <p className="font-mono text-xs text-cream-200/40 mt-0.5">Charlottetown, PEI</p>
            </div>

            <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full border border-brand-orange/15 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-brand-orange/8 pointer-events-none" />
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="group dark-card p-5 sm:p-6 hover:border-brand-orange/20 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-4">
                <Icon />
              </div>
              <h3 className="font-display font-bold text-cream-100 text-base mb-2 leading-snug">{title}</h3>
              <p className="font-body text-xs text-cream-200/45 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
