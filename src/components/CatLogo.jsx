// Transparent-background PNG extracted from the official Fat Cat Bakery logo.
// No blend mode tricks needed — renders cleanly on any dark surface.
export default function CatLogo({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="Fat Cat Bakery"
      draggable={false}
      className={`object-contain select-none flex-shrink-0 ${className}`}
    />
  )
}
