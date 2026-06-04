const RATING = 4.1
const TOTAL  = 87

const REVIEWS = [
  { author: 'Sarah M.',  stars: 5, date: 'March 2025',    text: 'Ordered a custom birthday cake and it was absolutely stunning. The buttercream rosettes were perfect and it tasted even better than it looked. Everyone at the party was asking where it came from!' },
  { author: 'James T.',  stars: 5, date: 'January 2025',  text: 'Best bakery in Charlottetown, hands down. The cheesecake slices are incredible, rich and creamy with the perfect crust. Staff are so friendly every single time.' },
  { author: 'Emily R.',  stars: 5, date: 'February 2025', text: 'As someone who eats vegan, I was blown away by their plant-based menu. The vegan chocolate cake is genuinely one of the best cakes I have ever had, vegan or not.' },
  { author: 'Mike D.',   stars: 4, date: 'December 2024', text: 'Really lovely little bakery. The brown butter chocolate chip cookies are dangerously good. Sells out fast so get there early. Only reason for 4 stars is parking can be tricky.' },
  { author: 'Laura B.',  stars: 5, date: 'November 2024', text: 'I have ordered custom cakes for three family events now and Fat Cat has nailed it every time. They really listen to what you want and the quality is consistently amazing.' },
  { author: 'Chris P.',  stars: 4, date: 'October 2024',  text: 'The lemon bars and Nanaimo bars are exceptional. Everything here tastes genuinely homemade. Prices are fair for the quality. Highly recommend.' },
]

function Stars({ n, size = 'sm' }) {
  const cls = size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`${cls} ${i <= n ? 'text-orange' : 'text-linen-400'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-linen-200">
      <div className="wrap">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="eyebrow">Customer Reviews</span>
            <span className="rule" />
            <h2 className="font-display font-bold text-title text-ink-400">What People Are Saying</h2>
          </div>
          <a href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm self-start sm:self-end flex-shrink-0">
            See all on Google
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        {/* Rating summary — clean horizontal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pb-10 mb-10 border-b border-linen-300">
          <div className="flex items-baseline gap-3">
            <span className="font-display font-bold text-7xl text-ink-400 leading-none">{RATING}</span>
            <div>
              <Stars n={Math.round(RATING)} size="lg" />
              <p className="font-body text-xs text-ink-100 mt-1">{TOTAL} Google reviews</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 max-w-xs">
            {[[5,58],[4,22],[3,11],[2,5],[1,4]].map(([label,pct]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-mono text-xs text-ink-100 w-3 text-right">{label}</span>
                <div className="flex-1 h-1.5 bg-linen-300 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-orange transition-all duration-700" style={{ width:`${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <a href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-medium text-ink-200 hover:text-orange transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
            View on Google Maps
          </a>
        </div>

        {/* Review list — editorial style, no cards */}
        <div className="space-y-0">
          {REVIEWS.map((r, i) => (
            <div key={i} className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-8 ${i < REVIEWS.length - 1 ? 'border-b border-linen-300' : ''}`}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0" style={{background:'#e07b39'}}>
                    {r.author.split(' ').map(p=>p[0]).join('')}
                  </div>
                  <p className="font-body font-medium text-ink-400 text-sm">{r.author}</p>
                </div>
                <Stars n={r.stars} />
                <p className="font-mono text-xs text-ink-100 mt-1">{r.date}</p>
              </div>
              <p className="font-body text-ink-200 text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex mx-auto">
            Read all {TOTAL} reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
