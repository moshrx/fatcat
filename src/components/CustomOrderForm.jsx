import { useState } from 'react'

const OCCASIONS = ['Birthday','Wedding','Anniversary','Baby Shower','Graduation','Corporate Event','Holiday','Just Because','Other']
const CAKE_TYPES = ['Layered Cake','Cheesecake','Cupcakes (dozen)','Sheet Cake','Tiered Wedding Cake','Cookie Assortment','Not sure, advise me!']
const SERVINGS   = ['6–8','10–15','20–30','40–60','60+']

const INITIAL = { name:'', email:'', phone:'', occasion:'', cakeType:'', servings:'', pickupDate:'', details:'', isVegan:false }

function validate(f) {
  const e = {}
  if (!f.name.trim())    e.name       = 'Name is required.'
  if (!f.email.trim())   e.email      = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.'
  if (!f.occasion)       e.occasion   = 'Please pick an occasion.'
  if (!f.cakeType)       e.cakeType   = 'Please pick a cake type.'
  if (!f.servings)       e.servings   = 'Serving size is required.'
  if (!f.pickupDate)     e.pickupDate = 'Pickup date is required.'
  else {
    const today = new Date(); today.setHours(0,0,0,0)
    if ((new Date(f.pickupDate) - today) / 86400000 < 5) e.pickupDate = 'We need at least 5 days notice.'
  }
  return e
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      {children}
      {error && (
        <p className="field-error">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default function CustomOrderForm() {
  const [fields,  setFields]  = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [touched, setTouched] = useState({})
  const [status,  setStatus]  = useState('idle')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setFields(f => ({ ...f, [name]: val }))
    if (touched[name]) {
      const errs = validate({ ...fields, [name]: val })
      setErrors(p => ({ ...p, [name]: errs[name] }))
    }
  }

  function handleBlur(e) {
    setTouched(t => ({ ...t, [e.target.name]: true }))
    setErrors(p => ({ ...p, [e.target.name]: validate(fields)[e.target.name] }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const allTouched = Object.keys(INITIAL).reduce((a, k) => ({ ...a, [k]: true }), {})
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('submitting')
    // TODO: Replace with real send — e.g.:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
    // or: await fetch('/api/order', { method:'POST', body:JSON.stringify(fields) })
    await new Promise(r => setTimeout(r, 1300))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section id="custom-orders" className="section-pad bg-espresso-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-warm pointer-events-none" />
        <div className="container-sm relative z-10">
          <div className="glass-card p-8 sm:p-14 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mx-auto mb-6 text-brand-orange">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h2 className="heading-md text-cream-50 mb-3">Order received!</h2>
            <p className="font-body text-cream-200/60 text-base mb-1 leading-relaxed">
              Thanks <span className="font-semibold text-cream-100">{fields.name}</span>. We'll be in touch within
              1–2 business days to confirm and arrange a 50% deposit.
            </p>
            <p className="font-mono text-xs text-cream-200/30 mb-8">
              Check <strong className="text-cream-200/50">{fields.email}</strong> (and your spam folder).
            </p>
            <button
              onClick={() => { setFields(INITIAL); setErrors({}); setTouched({}); setStatus('idle') }}
              className="btn-ghost"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  const inputClass = (name) =>
    `field-input ${errors[name] ? 'border-red-500/50 focus:border-red-400/60 focus:ring-red-400/20' : ''}`

  return (
    <section id="custom-orders" className="section-pad bg-espresso-900 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-caramel-400/20 to-transparent" />
      <div className="absolute inset-0 bg-radial-amber pointer-events-none" />
      {/* Real Fat Cat Bakery custom cake — faint background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="/images/fb_9.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container-md relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="label-tag mb-4 mx-auto w-fit">Made Just for You</div>
          <h2 className="heading-lg text-cream-50 mb-4">Custom Cake Orders</h2>
          <p className="font-body text-cream-200/50 text-base max-w-lg mx-auto leading-relaxed">
            Tell us about your dream cake and we'll make it happen.
            We book up fast. The earlier the better!
          </p>
        </div>

        {/* Process steps — mobile horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-none">
          {[
            { n: '01', t: 'Fill the form' },
            { n: '02', t: 'We confirm' },
            { n: '03', t: '50% deposit' },
            { n: '04', t: 'Pickup day!' },
          ].map(({ n, t }) => (
            <div key={n} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-espresso-800/60 border border-white/[0.06]">
              <span className="font-mono text-xs font-medium text-brand-orange/60">{n}</span>
              <span className="font-body text-xs text-cream-200/50 whitespace-nowrap">{t}</span>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="glass-card p-5 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-5 sm:space-y-6">

              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name *" error={errors.name}>
                  <input id="name" name="name" type="text" placeholder="Jane Smith"
                    value={fields.name} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('name')} />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input id="email" name="email" type="email" placeholder="jane@example.com"
                    value={fields.email} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('email')} />
                </Field>
              </div>

              {/* Phone */}
              <Field label="Phone (optional)" error={null}>
                <input id="phone" name="phone" type="tel" placeholder="902-555-0100"
                  value={fields.phone} onChange={handleChange}
                  className="field-input" />
              </Field>

              {/* Row: Occasion + Cake Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Occasion *" error={errors.occasion}>
                  <select id="occasion" name="occasion"
                    value={fields.occasion} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('occasion')}>
                    <option value="">Select…</option>
                    {OCCASIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Cake Type *" error={errors.cakeType}>
                  <select id="cakeType" name="cakeType"
                    value={fields.cakeType} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('cakeType')}>
                    <option value="">Select…</option>
                    {CAKE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              {/* Row: Servings + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Approx. Servings *" error={errors.servings}>
                  <select id="servings" name="servings"
                    value={fields.servings} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('servings')}>
                    <option value="">Select…</option>
                    {SERVINGS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Pickup Date *" error={errors.pickupDate}>
                  <input id="pickupDate" name="pickupDate" type="date"
                    value={fields.pickupDate} onChange={handleChange} onBlur={handleBlur}
                    className={inputClass('pickupDate')} />
                </Field>
              </div>

              {/* Details */}
              <Field label="Tell us about your cake" error={null}>
                <textarea id="details" name="details" rows={4}
                  placeholder="Flavours, colours, theme, allergies, special requests…"
                  value={fields.details} onChange={handleChange}
                  className="field-input resize-none" />
              </Field>

              {/* Vegan toggle */}
              <label className="flex items-center gap-4 cursor-pointer py-1 group">
                <div className="relative flex-shrink-0">
                  <input type="checkbox" name="isVegan" checked={fields.isVegan} onChange={handleChange} className="sr-only peer" />
                  <div className="w-11 h-6 rounded-full bg-espresso-700 border border-white/10 peer-checked:bg-sage-500 peer-checked:border-sage-400/50 transition-all" />
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white/80 shadow transition-transform duration-200 peer-checked:translate-x-5" />
                </div>
                <div>
                  <span className="font-body font-medium text-sm text-cream-200 group-hover:text-cream-50 transition-colors">
                    I'd like a vegan option
                  </span>
                  <p className="font-body text-xs text-cream-200/35 mt-0.5">We'll use plant-based alternatives throughout</p>
                </div>
              </label>

              {/* Divider */}
              <div className="divider" />

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto sm:flex-1 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send My Order Inquiry
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="font-body text-xs text-cream-200/30 text-center sm:text-left sm:max-w-[180px] leading-relaxed">
                  We'll reply within 1–2 business days.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
