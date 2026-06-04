import { useState, useRef, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_GROQ_API_KEY

const SYSTEM_PROMPT = `You are a friendly, warm assistant for Fat Cat Bakery, a boutique small-batch bakery in Charlottetown, PEI, Canada.

Key facts:
- Address: 3-447 University Ave, Charlottetown, PE C1A 8K3
- Phone: 902-367-1321
- Hours: Tuesday to Sunday, 8:00 AM to 6:00 PM. Closed Mondays.
- Instagram: @fatcatbakery_pei | Facebook: fatcatbakerypei
- Specialties: cakes, cheesecakes, cookies, cupcakes, squares, brownies, sweet breads. Full vegan menu available.
- Custom cake orders accepted — minimum 5 days notice required, 50% deposit to confirm.
- Everything is made from scratch, small-batch, with local PEI ingredients where possible.
- Rating: 4.1 stars on Google

Personality: warm, helpful, like talking to someone who works at the bakery. Keep answers concise. If asked about specific prices or today's availability, suggest calling or visiting. Always encourage people to order a custom cake or visit the shop.

If a question is completely unrelated to the bakery or food, politely redirect back to bakery topics.`

const SUGGESTIONS = [
  'What are your opening hours?',
  'How do I order a custom cake?',
  'Do you have vegan options?',
  'What kinds of cakes do you make?',
]

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

async function askGroq(messages) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 400,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Groq API error: ${res.status} ${err}`)
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content ?? 'Sorry, I could not get a response. Please try again.'
}

export default function ChatBot() {
  const [open,    setOpen]    = useState(false)
  const [input,   setInput]   = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm the Fat Cat Bakery assistant. Ask me anything about our cakes, hours, custom orders, or vegan menu." }
  ])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  async function send(text) {
    const userText = (text || input).trim()
    if (!userText || loading) return
    setInput('')

    const next = [...messages, { role: 'user', content: userText }]
    setMessages(next)
    setLoading(true)

    try {
      const reply = await askGroq(next)
      setMessages(m => [...m, { role: 'assistant', content: reply }])
    } catch (e) {
      setMessages(m => [...m, { role: 'assistant', content: 'Sorry, something went wrong. Please try again or call us at 902-367-1321.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lift transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: '#e07b39' }}
        aria-label={open ? 'Close chat' : 'Chat with us'}
      >
        <div className={`transition-all duration-200 ${open ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
          <ChatIcon />
        </div>
        <div className={`transition-all duration-200 text-white ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
          <CloseIcon />
        </div>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 transition-all duration-300 origin-bottom-right ${
          open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="dark-card flex flex-col overflow-hidden shadow-lift" style={{ height: '520px', maxHeight: 'calc(100svh - 7rem)' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07]" style={{ background: '#e07b39' }}>
            <img src="/logo.png" alt="Fat Cat Bakery" className="w-9 h-9 rounded-lg object-contain bg-espresso-900/30" />
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-espresso-900 text-sm leading-tight">Fat Cat Bakery</p>
              <p className="font-mono text-[10px] text-espresso-900/60 tracking-wide">Bakery assistant</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg bg-espresso-900/15 hover:bg-espresso-900/30 flex items-center justify-center text-espresso-900/80 transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-body ${
                    msg.role === 'user'
                      ? 'text-espresso-900 font-medium rounded-br-sm'
                      : 'bg-espresso-700 text-cream-100 border border-white/[0.07] rounded-bl-sm'
                  }`}
                  style={msg.role === 'user' ? { background: '#e07b39' } : {}}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-espresso-700 border border-white/[0.07] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cream-200/50 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggestion chips — only show after first message with no user messages yet */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-espresso-700 border border-brand-orange/25 text-brand-orange-light hover:bg-brand-orange/10 hover:border-brand-orange/50 transition-all duration-150"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 pb-3 pt-2 border-t border-white/[0.07]">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about cakes, hours, orders..."
                rows={1}
                disabled={loading}
                className="flex-1 bg-espresso-700/80 border border-white/10 rounded-2xl px-3.5 py-2.5 text-sm text-cream-100 placeholder:text-cream-200/25 focus:outline-none resize-none leading-relaxed disabled:opacity-50 transition-colors"
                style={{ maxHeight: '96px', overflowY: 'auto' }}
                onInput={e => {
                  e.target.style.height = 'auto'
                  e.target.style.height = Math.min(e.target.scrollHeight, 96) + 'px'
                }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-espresso-900 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 hover:brightness-110 active:scale-95"
                style={{ background: '#e07b39' }}
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </div>
            <p className="font-mono text-[10px] text-cream-200/20 text-center mt-2">Powered by Groq AI</p>
          </div>
        </div>
      </div>
    </>
  )
}
