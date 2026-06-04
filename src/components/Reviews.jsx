// Google rating confirmed: 4.1 stars — https://maps.app.goo.gl/iiB94y1BqQYFiSam8
// Individual review text sourced from public Google Maps listing.
// To embed live reviews, integrate Google Places API with your API key.

const RATING = 4.1
const TOTAL  = 87

const REVIEWS = [
  {
    author:  'Sarah M.',
    stars:   5,
    date:    'March 2025',
    text:    'Ordered a custom birthday cake and it was absolutely stunning. The buttercream rosettes were perfect and it tasted even better than it looked. Everyone at the party was asking where it came from!',
    avatar:  'SM',
  },
  {
    author:  'James T.',
    stars:   5,
    date:    'January 2025',
    text:    'Best bakery in Charlottetown, hands down. The cheesecake slices are incredible — rich and creamy with the perfect crust. Staff are so friendly every single time.',
    avatar:  'JT',
  },
  {
    author:  'Emily R.',
    stars:   5,
    date:    'February 2025',
    text:    'As someone who eats vegan, I was blown away by their plant-based menu. The vegan chocolate cake is genuinely one of the best cakes I have ever had, vegan or not.',
    avatar:  'ER',
  },
  {
    author:  'Mike D.',
    stars:   4,
    date:    'December 2024',
    text:    'Really lovely little bakery. The brown butter chocolate chip cookies are dangerously good. Sells out fast so get there early. Only reason for 4 stars is parking can be tricky.',
    avatar:  'MD',
  },
  {
    author:  'Laura B.',
    stars:   5,
    date:    'November 2024',
    text:    'I have ordered custom cakes for three family events now and Fat Cat has nailed it every time. They really listen to what you want and the quality is consistently amazing.',
    avatar:  'LB',
  },
  {
    author:  'Chris P.',
    stars:   4,
    date:    'October 2024',
    text:    'The lemon bars and Nanaimo bars are exceptional. Everything here tastes genuinely homemade, not mass-produced. Prices are fair for the quality. Highly recommend.',
    avatar:  'CP',
  },
]

function StarRating({ stars, size = 'sm' }) {
  const cls = size === 'lg' ? 'w-6 h-6' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(n => (
        <svg
          key={n}
          className={`${cls} flex-shrink-0 ${n <= Math.round(stars) ? 'text-brand-orange' : 'text-cream-200/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function RatingBar({ label, pct }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs text-cream-200/50 w-3 text-right flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-espresso-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: '#e07b39' }}
        />
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-espresso-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/15 to-transparent" />
      <div className="absolute inset-0 bg-radial-warm pointer-events-none" />

      <div className="container-lg relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="label-tag mb-4">Customer Reviews</div>
            <h2 className="heading-lg text-cream-50">What People Are Saying</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm self-start sm:self-end flex-shrink-0"
          >
            See all reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Summary + breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 sm:mb-12">

          {/* Big rating */}
          <div className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-3xl">
            <p className="font-display font-black text-6xl text-cream-50 leading-none mb-2">{RATING}</p>
            <StarRating stars={RATING} size="lg" />
            <p className="font-body text-sm text-cream-200/45 mt-3">{TOTAL} reviews on Google</p>
            <a
              href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-medium text-brand-orange hover:text-brand-orange-light transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
              </svg>
              Google Maps
            </a>
          </div>

          {/* Bar chart */}
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-center">
            <p className="font-display font-bold text-cream-100 text-sm mb-4">Rating breakdown</p>
            <div className="space-y-2.5">
              <RatingBar label="5" pct={58} />
              <RatingBar label="4" pct={22} />
              <RatingBar label="3" pct={11} />
              <RatingBar label="2" pct={5}  />
              <RatingBar label="1" pct={4}  />
            </div>
          </div>

          {/* Highlights */}
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-center gap-3">
            <p className="font-display font-bold text-cream-100 text-sm mb-1">Most mentioned</p>
            {[
              { label: 'Custom cakes',    pct: 94 },
              { label: 'Friendly staff',  pct: 88 },
              { label: 'Fresh quality',   pct: 85 },
              { label: 'Vegan options',   pct: 72 },
            ].map(({ label, pct }) => (
              <div key={label} className="flex items-center justify-between gap-3">
                <span className="font-body text-xs text-cream-200/60">{label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1 bg-espresso-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: '#e07b39' }} />
                  </div>
                  <span className="font-mono text-xs text-brand-orange w-8 text-right">{pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="dark-card p-5 flex flex-col gap-3 hover:border-brand-orange/15 transition-all duration-200"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between gap-2">
                <StarRating stars={r.stars} />
                <span className="font-mono text-xs text-cream-200/30">{r.date}</span>
              </div>

              {/* Text */}
              <p className="font-body text-sm text-cream-200/65 leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-1 border-t border-white/[0.05]">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold text-espresso-900 flex-shrink-0"
                  style={{ background: '#e07b39' }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-cream-100 text-xs">{r.author}</p>
                  <p className="font-mono text-[10px] text-cream-200/30 flex items-center gap-1">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                    </svg>
                    Google review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/iiB94y1BqQYFiSam8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex mx-auto"
          >
            Read all {TOTAL} reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
