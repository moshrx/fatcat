// Auto-scrolling strip — unique images not used elsewhere on the page
const IMAGES = [
  { src: '/images/fb_9.jpg',  alt: 'Custom cake with cupcakes' },
  { src: '/images/fb_10.jpg', alt: 'Valentine cake with rose cupcakes' },
  { src: '/images/fb_11.jpg', alt: 'Brownies, cake and cookies on a tray' },
  { src: '/images/fb_12.jpg', alt: 'Chocolate cake pops' },
  { src: '/images/fb_13.jpg', alt: "Mother's Day cupcake boxes" },
  { src: '/images/fb_14.jpg', alt: 'Gold-dusted chocolate cupcakes' },
  { src: '/images/fb_15.jpg', alt: 'Decorated sugar cookies' },
]
const ALL = [...IMAGES, ...IMAGES]

export default function PhotoCarousel() {
  return (
    <div className="relative overflow-hidden bg-linen-200" style={{ height: '180px' }}>
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #f3ebe0, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #f3ebe0, transparent)' }} />

      <div className="flex h-full gap-1.5 px-1" style={{ animation: 'stripScroll 30s linear infinite', width: 'max-content' }}>
        {ALL.map(({ src, alt }, i) => (
          <div key={i} className="h-full flex-shrink-0 overflow-hidden rounded-lg" style={{ width: '260px' }}>
            <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes stripScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
