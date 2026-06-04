const PILLARS = [
  { Icon: ScratchIcon, title: 'From Scratch, Always',     body: 'No mixes, no shortcuts. Every batter starts with raw ingredients: flour, butter, eggs, and a whole lot of care.' },
  { Icon: LocalIcon,   title: 'Local and Seasonal',       body: 'We source from PEI farms where we can. Real blueberries in summer, local apples in fall.' },
  { Icon: BatchIcon,   title: 'Small-Batch on Purpose',   body: "We're not a factory. Small batches mean we can taste everything, adjust everything, and stand behind everything." },
  { Icon: VeganIcon,   title: 'Vegan Without Compromise', body: "Our plant-based menu is not an afterthought. We test every recipe until it is genuinely delicious." },
]

function ScratchIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12h1m16 0h1M4.927 19.073l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"/></svg>
}
function LocalIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
}
function BatchIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
}
function VeganIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.3 0-8-3.1-8-7 0-3 1.7-5.6 4.3-6.8C9.5 4.5 10.7 4 12 4c1.3 0 2.5.5 3.7 1.2C18.3 6.4 20 9 20 12c0 3.9-3.7 7-8 7z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9"/></svg>
}

export default function About() {
  return (
    <section id="about" className="section bg-linen-50">
      <div className="wrap">

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-20 sm:mb-24">

          {/* Photo */}
          <div className="relative order-first lg:order-last">
            <div className="overflow-hidden rounded-2xl shadow-image aspect-[4/3]">
              <img src="/images/fb_7.jpg" alt="Fat Cat Bakery display counter" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -left-3 sm:bottom-5 sm:left-5 bg-white rounded-xl px-5 py-3 shadow-lifted">
              <p className="font-display font-bold text-ink-400 text-sm">Open since 2015</p>
              <p className="font-body text-ink-100 text-xs mt-0.5">Charlottetown, PEI</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-last lg:order-first">
            <span className="eyebrow">Our Story</span>
            <span className="rule" />
            <h2 className="font-display font-bold text-title text-ink-400 leading-tight mb-6">
              The craft brewery<br />
              <em className="text-orange">of the baking world.</em>
            </h2>
            <div className="space-y-4 font-body text-ink-200 text-base leading-relaxed">
              <p>Fat Cat Bakery started with a simple belief: a great bakery should work like a great craft brewery. Small batches. Quality ingredients. Real recipes. Bakers who actually care about what goes in the box.</p>
              <p>We bake the way your grandma would have, if your grandma had a wild recipe collection, a love of unusual flavour combos, and a commitment to never cutting corners. Everything here is made from scratch, in our kitchen on University Ave, every single morning.</p>
              <p>Whether it's your Tuesday cookie or the centrepiece of your wedding day, you deserve something real. That's what we make.</p>
            </div>

            <div className="flex gap-8 mt-8 pt-6 border-t border-linen-300">
              {[['10+', 'Years baking'], ['100%', 'From scratch'], ['PEI', 'Local first']].map(([n, l]) => (
                <div key={n}>
                  <p className="font-display font-bold text-3xl text-orange leading-none">{n}</p>
                  <p className="font-body text-xs text-ink-100 mt-1 uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars — horizontal list, no cards */}
        <div className="border-t border-linen-300 pt-14">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map(({ Icon, title, body }) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-full bg-orange-pale border border-orange/20 flex items-center justify-center text-orange mb-4">
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-ink-400 text-lg mb-2">{title}</h3>
                <p className="font-body text-sm text-ink-200 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
