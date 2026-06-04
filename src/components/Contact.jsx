const HOURS = [
  { day: 'Monday',    hours: 'Closed',            closed: true },
  { day: 'Tuesday',   hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Wednesday', hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Thursday',  hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Friday',    hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Saturday',  hours: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Sunday',    hours: '8:00 AM – 6:00 PM', closed: false },
]

const TODAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()]

function isOpen() {
  const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes()/60
  return day !== 1 && h >= 8 && h < 18
}

export default function Contact() {
  const open = isOpen()

  return (
    <section id="contact" className="section bg-linen-50">
      <div className="wrap">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="eyebrow">Find Us</span>
            <span className="rule" />
            <h2 className="font-display font-bold text-title text-ink-400">Come Say Hello</h2>
          </div>
          <div className={`inline-flex items-center gap-2 font-body font-medium text-sm px-4 py-2 rounded-full border self-start sm:self-end ${
            open ? 'border-green-300 text-green-700 bg-green-50' : 'border-red-200 text-red-500 bg-red-50'
          }`}>
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            {open ? 'Open now' : 'Currently closed'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info */}
          <div className="lg:col-span-2 space-y-10">

            {/* Address + phone */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-pale border border-orange/20 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-body font-medium text-ink-400 text-sm">3-447 University Ave</p>
                  <p className="font-body text-ink-100 text-sm">Charlottetown, PE C1A 8K3</p>
                  <a href="https://maps.google.com/?q=447+University+Ave+Charlottetown+PE" target="_blank" rel="noopener noreferrer" className="font-body text-xs font-medium text-orange hover:underline mt-1 inline-flex items-center gap-1">
                    Get directions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-pale border border-orange/20 flex items-center justify-center text-orange flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a href="tel:+19023671321" className="font-body font-semibold text-ink-400 text-base hover:text-orange transition-colors">902-367-1321</a>
              </div>
            </div>

            <div className="h-px bg-linen-300" />

            {/* Hours */}
            <div>
              <h3 className="font-display font-semibold text-ink-400 text-base mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>
                Hours
              </h3>
              <div className="space-y-1.5">
                {HOURS.map(({ day, hours, closed }) => {
                  const isToday = day === TODAY
                  return (
                    <div key={day} className={`flex justify-between items-center text-sm py-1.5 px-2 rounded-lg ${isToday ? 'bg-orange-pale' : ''}`}>
                      <span className={`font-body font-medium ${isToday ? 'text-orange' : 'text-ink-300'}`}>
                        {day} {isToday && <span className="font-mono text-xs text-orange/60 ml-1">today</span>}
                      </span>
                      <span className={`font-mono text-xs ${closed ? 'text-red-400' : 'text-ink-100'}`}>{hours}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="h-px bg-linen-300" />

            {/* Socials */}
            <div>
              <h3 className="font-display font-semibold text-ink-400 text-base mb-4">Follow Along</h3>
              <div className="space-y-3">
                <a href="https://www.instagram.com/fatcatbakery_pei/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <p className="font-body font-medium text-ink-400 text-sm group-hover:text-orange transition-colors">@fatcatbakery_pei</p>
                    <p className="font-body text-ink-100 text-xs">Instagram</p>
                  </div>
                </a>
                <a href="https://www.facebook.com/fatcatbakerypei/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <div>
                    <p className="font-body font-medium text-ink-400 text-sm group-hover:text-orange transition-colors">fatcatbakerypei</p>
                    <p className="font-body text-ink-100 text-xs">Facebook</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-lifted min-h-[400px] lg:min-h-0">
            <iframe
              title="Fat Cat Bakery, 447 University Ave, Charlottetown PEI"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.4!2d-63.13829!3d46.24881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52cf2ea13a29%3A0xee554ea6b789f7e1!2sFat%20Cat%20Bakery!5e0!3m2!1sen!2sca!4v1717500000000!5m2!1sen!2sca"
              width="100%" height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
