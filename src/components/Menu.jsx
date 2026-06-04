import { useState } from 'react'

const CATEGORIES = [
  {
    id: 'cakes',
    label: 'Cakes',
    tagline: 'Layered, frosted, made to impress.',
    img: '/images/fb_2.jpg',
    items: [
      { name: 'Classic Vanilla Bean',      desc: 'Three layers, Swiss meringue buttercream, Madagascar vanilla',    price: '$48' },
      { name: 'Dark Chocolate Ganache',    desc: 'Fudgy sponge, dark chocolate ganache, cocoa buttercream',         price: '$52' },
      { name: 'Lemon Elderflower',         desc: 'Light lemon sponge, elderflower cream, candied zest',              price: '$50' },
      { name: 'Salted Caramel Apple',      desc: 'Spiced apple layers, housemade caramel, brown butter frosting',    price: '$54' },
    ],
  },
  {
    id: 'cheesecakes',
    label: 'Cheesecakes',
    tagline: 'New York style. Dense, creamy, classic.',
    img: '/images/fb_8.jpg',
    items: [
      { name: 'New York Classic',          desc: 'Buttery graham crust, pure cream cheese, sour cream top',          price: '$42' },
      { name: 'Wild Blueberry',            desc: 'Local PEI blueberry compote, vanilla bean cheesecake',             price: '$44' },
      { name: 'Salted Caramel Swirl',      desc: 'Housemade caramel ribboned through vanilla cheesecake',            price: '$44' },
      { name: 'Matcha White Chocolate',    desc: 'Ceremonial matcha, white chocolate chips, shortbread crust',       price: '$46' },
    ],
  },
  {
    id: 'cookies-cupcakes',
    label: 'Cookies & Cupcakes',
    tagline: 'One-hand treats worth every crumb.',
    img: '/images/fb_5.jpg',
    items: [
      { name: 'Brown Butter Choc Chip',    desc: 'Thick, chewy, sea salt finish. Sold by the half-dozen.',           price: '$14 / 6' },
      { name: 'Snickerdoodle',             desc: 'Classic cinnamon sugar, crisp edge, soft centre',                  price: '$12 / 6' },
      { name: 'Vanilla Sprinkle Cupcakes', desc: 'Fluffy vanilla, clouds of buttercream, rainbow sprinkles',         price: '$4 each' },
      { name: 'Chocolate Fudge Cupcakes',  desc: 'Rich chocolate base, whipped ganache frosting',                    price: '$4.50 each' },
    ],
  },
  {
    id: 'squares-brownies',
    label: 'Squares & Brownies',
    tagline: 'Cut from the pan, rich and shareable.',
    img: '/images/fb_3.jpg',
    items: [
      { name: 'Fudge Brownies',            desc: 'Dense, glossy-topped, fudgy through and through',                  price: '$3.50' },
      { name: 'Nanaimo Bars',              desc: 'A Canadian classic: coconut base, custard cream, choc top',        price: '$3.50' },
      { name: 'Lemon Bars',                desc: 'Buttery shortbread, tart lemon curd, icing sugar',                 price: '$3.50' },
      { name: 'Date Squares',              desc: 'Old-fashioned oat crumble, soft date filling',                     price: '$3.00' },
    ],
  },
  {
    id: 'sweet-breads',
    label: 'Sweet Breads',
    tagline: 'Soft loaves for slow mornings.',
    img: '/images/fb_4.jpg',
    items: [
      { name: 'Banana Walnut Loaf',        desc: 'Extra-ripe bananas, toasted walnuts, dark sugar crust',            price: '$9' },
      { name: 'Cinnamon Swirl Bread',      desc: 'Soft enriched dough, brown sugar cinnamon ribbon',                 price: '$10' },
      { name: 'Cranberry Orange Scones',   desc: 'Flaky, buttery, orange glaze, dried cranberries. 4-pack.',         price: '$12' },
      { name: 'Morning Glory Muffins',     desc: 'Carrot, apple, coconut, raisins. Hearty and sweet.',               price: '$3.50' },
    ],
  },
]

const VEGAN = [
  { name: 'Vegan Chocolate Cake',    desc: 'Aquafaba layers, dark choc ganache, coconut buttercream',       price: '$52' },
  { name: 'Vegan Lemon Poppy Loaf',  desc: 'Flaxseed egg, almond milk, bright lemon glaze',                 price: '$9'  },
  { name: 'Vegan Tahini Brownies',   desc: 'Tahini swirl, dark chocolate, crunchy sesame top',               price: '$4'  },
  { name: 'Vegan Oat Cookies',       desc: 'Maple-sweetened, mixed dried fruit, coconut oil',                price: '$12 / 6' },
  { name: 'Vegan Blueberry Muffins', desc: 'Local PEI blueberries, oat streusel, coconut sugar',            price: '$3.50' },
  { name: 'Vegan Cheesecake',        desc: 'Cashew-cream base, date-nut crust, seasonal fruit compote',     price: '$46' },
]

const LeafIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.3 0-8-3.1-8-7 0-3 1.7-5.6 4.3-6.8C9.5 4.5 10.7 4 12 4c1.3 0 2.5.5 3.7 1.2C18.3 6.4 20 9 20 12c0 3.9-3.7 7-8 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9" />
  </svg>
)

const ChevronDown = () => (
  <svg className="w-3 h-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const ChevronUp = () => (
  <svg className="w-3 h-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
)

function MenuCard({ cat, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="dark-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
        <img
          src={cat.img}
          alt={`Fat Cat Bakery ${cat.label}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-800 via-espresso-800/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6">
          <p className="font-mono text-xs text-brand-orange-light/70 tracking-widest uppercase mb-0.5">{cat.tagline}</p>
          <h3 className="font-display font-bold text-xl text-cream-50 leading-tight">{cat.label}</h3>
        </div>
      </div>

      {/* Items list */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col">
        <ul className="space-y-3 flex-1">
          {(expanded ? cat.items : cat.items.slice(0, 3)).map((item) => (
            <li key={item.name} className="flex justify-between items-start gap-3">
              <div className="min-w-0">
                <p className="font-body font-semibold text-cream-100 text-sm leading-snug truncate">{item.name}</p>
                <p className="font-body text-xs text-cream-200/40 mt-0.5 leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
              <span className="font-mono font-medium text-brand-orange text-sm whitespace-nowrap flex-shrink-0 tabular-nums">{item.price}</span>
            </li>
          ))}
        </ul>

        {cat.items.length > 3 && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-4 w-full text-center font-body text-xs font-medium text-brand-orange/70 hover:text-brand-orange-light transition-colors py-2 border-t border-white/[0.06] flex items-center justify-center gap-1.5"
          >
            {expanded ? <><ChevronUp /> Show less</> : <><ChevronDown /> {cat.items.length - 3} more item{cat.items.length - 3 > 1 ? 's' : ''}</>}
          </button>
        )}
      </div>
    </article>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="section-pad bg-espresso-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      <div className="container-lg">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="label-tag mb-4">From Our Kitchen</div>
            <h2 className="heading-lg text-cream-50">The Everyday Menu</h2>
          </div>
          <p className="font-body text-sm text-cream-200/45 max-w-xs leading-relaxed sm:text-right">
            Made fresh, small-batch, from scratch every single day.
            Availability changes; call ahead for large quantities.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {CATEGORIES.map((cat, i) => (
            <MenuCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Vegan section */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-mint/20 bg-sage-900/30 backdrop-blur-sm">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-mint/40 to-transparent" />

          <div className="p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] uppercase text-brand-mint bg-brand-mint/10 border border-brand-mint/20 px-3 py-1 rounded-full mb-3">
                  <LeafIcon /> Plant-Based Menu
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream-50">Vegan Selection</h3>
              </div>
              <p className="font-body text-sm text-cream-200/40 max-w-xs sm:text-right leading-relaxed">
                Same from-scratch love, zero compromise on flavour. Just ask.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {VEGAN.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white/[0.03] border border-brand-mint/10 hover:border-brand-mint/30 hover:bg-white/[0.05] transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-body font-semibold text-sm text-cream-100 leading-snug">{item.name}</p>
                    <span className="font-mono text-sm font-medium text-brand-mint whitespace-nowrap flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="font-body text-xs text-cream-200/35 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-body text-xs text-cream-200/25 leading-relaxed">
              * Prepared in a kitchen that also handles dairy and eggs. Please inform us of all allergies when ordering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
