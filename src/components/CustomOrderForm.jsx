import { useState } from 'react'

const OCCASIONS  = ['Birthday','Wedding','Anniversary','Baby Shower','Graduation','Corporate Event','Holiday','Just Because','Other']
const CAKE_TYPES = ['Layered Cake','Cheesecake','Cupcakes (dozen)','Sheet Cake','Tiered Wedding Cake','Cookie Assortment','Not sure, advise me!']
const SERVINGS   = ['6–8','10–15','20–30','40–60','60+']
const INITIAL    = { name:'', email:'', phone:'', occasion:'', cakeType:'', servings:'', pickupDate:'', details:'', isVegan:false }

function validate(f) {
  const e = {}
  if (!f.name.trim())  e.name       = 'Name is required.'
  if (!f.email.trim()) e.email      = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.'
  if (!f.occasion)     e.occasion   = 'Please pick an occasion.'
  if (!f.cakeType)     e.cakeType   = 'Please pick a cake type.'
  if (!f.servings)     e.servings   = 'Serving size is required.'
  if (!f.pickupDate)   e.pickupDate = 'Pickup date is required.'
  else if ((new Date(f.pickupDate) - new Date().setHours(0,0,0,0)) / 86400000 < 5)
    e.pickupDate = 'We need at least 5 days notice.'
  return e
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="field-lbl">{label}</label>
      {children}
      {error && <p className="field-err"><svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>{error}</p>}
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
    if (touched[name]) setErrors(p => ({ ...p, [name]: validate({ ...fields, [name]: val })[name] }))
  }

  function handleBlur(e) {
    setTouched(t => ({ ...t, [e.target.name]: true }))
    setErrors(p => ({ ...p, [e.target.name]: validate(fields)[e.target.name] }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setTouched(Object.keys(INITIAL).reduce((a, k) => ({ ...a, [k]: true }), {}))
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('submitting')
    // TODO: Replace with real send:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
    // or: await fetch('/api/order', { method:'POST', body:JSON.stringify(fields) })
    await new Promise(r => setTimeout(r, 1300))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section id="custom-orders" className="section bg-orange-pale">
        <div className="wrap-sm text-center">
          <div className="w-14 h-14 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center mx-auto mb-6 text-orange">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h2 className="font-display font-bold text-sub text-ink-400 mb-3">Order received!</h2>
          <p className="font-body text-ink-200 text-base mb-1">Thanks <strong className="text-ink-400">{fields.name}</strong>. We'll be in touch within 1–2 business days to confirm and arrange a 50% deposit.</p>
          <p className="font-mono text-xs text-ink-100 mb-8">Check <strong>{fields.email}</strong> and your spam folder.</p>
          <button onClick={() => { setFields(INITIAL); setErrors({}); setTouched({}); setStatus('idle') }} className="btn-outline">
            Submit another inquiry
          </button>
        </div>
      </section>
    )
  }

  const fc = name => `field ${errors[name] ? 'border-red-400 focus:ring-red-400/20' : ''}`

  return (
    <section id="custom-orders" className="section bg-linen-200">
      <div className="wrap">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — intro */}
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow">Made Just for You</span>
            <span className="rule" />
            <h2 className="font-display font-bold text-title text-ink-400 mb-5">Custom Cake Orders</h2>
            <p className="font-body text-ink-200 text-base leading-relaxed mb-8">
              Tell us about your dream cake and we'll make it happen.
              We book up fast, so the earlier the better.
            </p>

            {/* Process steps */}
            <div className="space-y-5">
              {[
                { n: '01', t: 'Fill the form', d: 'Tell us about your occasion, flavours, and vision.' },
                { n: '02', t: 'We confirm',    d: 'Expect a reply within 1–2 business days.' },
                { n: '03', t: '50% deposit',   d: 'A deposit secures your date and order.' },
                { n: '04', t: 'Pickup day',     d: 'Your cake is ready fresh on the day.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <span className="font-mono text-xs text-orange mt-0.5 flex-shrink-0 w-6">{n}</span>
                  <div>
                    <p className="font-body font-medium text-ink-400 text-sm">{t}</p>
                    <p className="font-body text-ink-100 text-xs mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Real photo */}
            <div className="mt-10 overflow-hidden rounded-2xl shadow-image aspect-video">
              <img src="/images/fb_9.jpg" alt="Custom cake example" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name *" error={errors.name}>
                  <input id="name" name="name" type="text" placeholder="Jane Smith" value={fields.name} onChange={handleChange} onBlur={handleBlur} className={fc('name')} />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input id="email" name="email" type="email" placeholder="jane@example.com" value={fields.email} onChange={handleChange} onBlur={handleBlur} className={fc('email')} />
                </Field>
              </div>

              <Field label="Phone (optional)" error={null}>
                <input id="phone" name="phone" type="tel" placeholder="902-555-0100" value={fields.phone} onChange={handleChange} className="field" />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Occasion *" error={errors.occasion}>
                  <select id="occasion" name="occasion" value={fields.occasion} onChange={handleChange} onBlur={handleBlur} className={fc('occasion')}>
                    <option value="">Select...</option>
                    {OCCASIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Cake Type *" error={errors.cakeType}>
                  <select id="cakeType" name="cakeType" value={fields.cakeType} onChange={handleChange} onBlur={handleBlur} className={fc('cakeType')}>
                    <option value="">Select...</option>
                    {CAKE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Approx. Servings *" error={errors.servings}>
                  <select id="servings" name="servings" value={fields.servings} onChange={handleChange} onBlur={handleBlur} className={fc('servings')}>
                    <option value="">Select...</option>
                    {SERVINGS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Pickup Date *" error={errors.pickupDate}>
                  <input id="pickupDate" name="pickupDate" type="date" value={fields.pickupDate} onChange={handleChange} onBlur={handleBlur} className={fc('pickupDate')} />
                </Field>
              </div>

              <Field label="Tell us about your cake" error={null}>
                <textarea id="details" name="details" rows={4} placeholder="Flavours, colours, theme, allergies, special requests..." value={fields.details} onChange={handleChange} className="field resize-none" />
              </Field>

              {/* Vegan toggle */}
              <label className="flex items-center gap-3 cursor-pointer group py-1">
                <div className="relative flex-shrink-0">
                  <input type="checkbox" name="isVegan" checked={fields.isVegan} onChange={handleChange} className="sr-only peer" />
                  <div className="w-10 h-5 rounded-full bg-linen-300 peer-checked:bg-mint-dark transition-colors" />
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                </div>
                <span className="font-body text-sm text-ink-300 group-hover:text-ink-400 transition-colors">
                  I'd like a vegan option
                </span>
              </label>

              <div className="pt-2 border-t border-linen-300">
                <button type="submit" disabled={status === 'submitting'} className="btn-fill w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'submitting' ? (
                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  ) : (
                    <>Send My Order Inquiry<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg></>
                  )}
                </button>
                <p className="font-body text-xs text-center text-ink-100 mt-3">We'll reply within 1–2 business days.</p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
