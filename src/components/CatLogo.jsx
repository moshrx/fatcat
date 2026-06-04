// Official Fat Cat Bakery logo — transparent PNG background.
// mix-blend-mode: multiply makes it sit naturally on the light linen background.
// In the dark footer, the PNG renders fine without blend mode since background is dark.
export default function CatLogo({ className = '', dark = false }) {
  return (
    <img
      src="/logo.png"
      alt="Fat Cat Bakery"
      draggable={false}
      className={`object-contain select-none flex-shrink-0 ${className}`}
      style={dark ? { mixBlendMode: 'screen' } : { mixBlendMode: 'multiply' }}
    />
  )
}
