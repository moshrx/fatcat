// Infinite auto-scrolling photo strip — no images that appear elsewhere on the page
// Used: fb_2,3,4,5,7,8 (Menu/About) — strip uses only the remaining unique photos

const STRIP_IMAGES = [
  { src: '/images/fb_9.jpg',  alt: 'Custom cake with cupcakes' },
  { src: '/images/fb_10.jpg', alt: 'Valentine cake with rose cupcakes' },
  { src: '/images/fb_11.jpg', alt: 'Brownies, cake and cookies on a tray' },
  { src: '/images/fb_12.jpg', alt: 'Chocolate cake pops' },
  { src: '/images/fb_13.jpg', alt: 'Mother\'s Day cupcake boxes' },
  { src: '/images/fb_14.jpg', alt: 'Gold-dusted chocolate cupcakes' },
  { src: '/images/fb_15.jpg', alt: 'Decorated sugar cookies' },
]

// Duplicate for seamless infinite scroll
const IMAGES = [...STRIP_IMAGES, ...STRIP_IMAGES]

export default function PhotoCarousel() {
  return (
    <div className="relative bg-espresso-950 overflow-hidden" style={{ height: '200px' }}>
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0d0805, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0d0805, transparent)' }} />

      {/* scrolling track */}
      <div className="flex h-full" style={{ animation: 'stripScroll 28s linear infinite', width: 'max-content' }}>
        {IMAGES.map(({ src, alt }, i) => (
          <div key={i} className="h-full flex-shrink-0 overflow-hidden" style={{ width: '280px', marginRight: '6px' }}>
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
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
