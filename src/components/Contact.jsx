const HOURS = [
  { day: 'Monday',    hours: 'Closed',            closed: true },
  { day: 'Tuesday',   hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Wednesday', hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Thursday',  hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Friday',    hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Saturday',  hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Sunday',    hours: '8:00 AM – 6:00 PM', closed: false },
]

const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function isOpenNow() {
  const now  = new Date()
  const day  = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  return day !== 1 && hour >= 8 && hour < 18
}

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function Contact() {
  const open    = isOpenNow()
  const todayName = DAY_NAMES[new Date().getDay()]

  return (
    <section id="contact" className="section-pad bg-espresso-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="label-tag mb-4">Find Us</div>
            <h2 className="heading-lg text-cream-50">Come Say Hello</h2>
          </div>
          {/* Live status pill */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border font-body font-medium text-sm self-start sm:self-end ${
            open
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
            {open ? 'Open now' : 'Currently closed'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left column — info ──────────────────── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Address + Phone card */}
            <div className="dark-card p-5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-brand-orange-dark/15 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-cream-100 text-sm">3-447 University Ave</p>
                  <p className="font-body text-cream-200/45 text-sm mt-0.5">Charlottetown, PE  C1A 8K3</p>
                  <a
                    href="https://maps.google.com/?q=447+University+Ave+Charlottetown+PE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 font-body text-xs font-medium text-brand-orange hover:text-brand-orange-light transition-colors"
                  >
                    Get directions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-brand-orange-dark/15 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a
                  href="tel:+19023671321"
                  className="font-body font-semibold text-cream-100 text-base hover:text-brand-orange-light transition-colors"
                >
                  902-367-1321
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="dark-card p-5">
              <h3 className="font-display font-bold text-cream-100 text-base mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>
                Hours
              </h3>
              <div className="space-y-1">
                {HOURS.map(({ day, hours, closed }) => {
                  const isToday = day === todayName
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2 px-3 rounded-xl text-sm transition-colors ${
                        isToday ? 'bg-brand-orange-dark/10 border border-brand-orange/15' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className={`font-body font-medium ${isToday ? 'text-brand-orange-light' : 'text-cream-200/60'}`}>
                        {day}
                        {isToday && <span className="ml-2 font-mono text-[10px] text-brand-orange/60 uppercase tracking-wider">today</span>}
                      </span>
                      <span className={`font-mono text-xs ${closed ? 'text-red-400/70' : 'text-cream-200/40'}`}>
                        {hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social card */}
            <div className="dark-card p-5">
              <h3 className="font-display font-bold text-cream-100 text-base mb-4">Follow Along</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/fatcatbakery_pei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-orange-400/10
                             border border-purple-400/15 hover:border-pink-400/30 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white flex-shrink-0">
                    <InstagramIcon />
                  </div>
                  <div>
                    <p className="font-body font-medium text-cream-100 text-sm">@fatcatbakery_pei</p>
                    <p className="font-body text-xs text-cream-200/35">Instagram</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-cream-200/25 group-hover:text-cream-200/60 transition ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/fatcatbakerypei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-500/10 border border-blue-400/15 hover:border-blue-400/30 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#1877F2] flex items-center justify-center text-white flex-shrink-0">
                    <FacebookIcon />
                  </div>
                  <div>
                    <p className="font-body font-medium text-cream-100 text-sm">fatcatbakerypei</p>
                    <p className="font-body text-xs text-cream-200/35">Facebook</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-cream-200/25 group-hover:text-cream-200/60 transition ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right column — map ────────────────── */}
          <div className="lg:col-span-3">
            <div className="dark-card overflow-hidden h-full min-h-[340px] sm:min-h-[440px] lg:min-h-0">
              <iframe
                title="Fat Cat Bakery, 447 University Ave, Charlottetown PEI"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.4!2d-63.13829!3d46.24881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52cf2ea13a29%3A0xee554ea6b789f7e1!2sFat%20Cat%20Bakery!5e0!3m2!1sen!2sca!4v1717500000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
