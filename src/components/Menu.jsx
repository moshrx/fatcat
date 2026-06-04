import { useState } from 'react'

const CATEGORIES = [
  {
    id: 'cakes', label: 'Cakes', img: '/images/fb_2.jpg',
    note: 'Layered, frosted, made to impress.',
    items: [
      { name: 'Classic Vanilla Bean',   desc: 'Three layers, Swiss meringue buttercream, Madagascar vanilla',    price: '$48' },
      { name: 'Dark Chocolate Ganache', desc: 'Fudgy sponge, dark chocolate ganache, cocoa buttercream',         price: '$52' },
      { name: 'Lemon Elderflower',      desc: 'Light lemon sponge, elderflower cream, candied zest',              price: '$50' },
      { name: 'Salted Caramel Apple',   desc: 'Spiced apple layers, housemade caramel, brown butter frosting',    price: '$54' },
    ],
  },
  {
    id: 'cheesecakes', label: 'Cheesecakes', img: '/images/fb_8.jpg',
    note: 'New York style. Dense, creamy, classic.',
    items: [
      { name: 'New York Classic',       desc: 'Buttery graham crust, pure cream cheese, sour cream top',          price: '$42' },
      { name: 'Wild Blueberry',         desc: 'Local PEI blueberry compote, vanilla bean cheesecake',             price: '$44' },
      { name: 'Salted Caramel Swirl',   desc: 'Housemade caramel ribboned through vanilla cheesecake',            price: '$44' },
      { name: 'Matcha White Chocolate', desc: 'Ceremonial matcha, white chocolate chips, shortbread crust',       price: '$46' },
    ],
  },
  {
    id: 'cookies', label: 'Cookies & Cupcakes', img: '/images/fb_5.jpg',
    note: 'One-hand treats worth every crumb.',
    items: [
      { name: 'Brown Butter Choc Chip', desc: 'Thick, chewy, sea salt finish. Half-dozen.',                       price: '$14 / 6' },
      { name: 'Snickerdoodle',          desc: 'Classic cinnamon sugar, crisp edge, soft centre',                  price: '$12 / 6' },
      { name: 'Vanilla Cupcakes',       desc: 'Fluffy vanilla, clouds of buttercream, rainbow sprinkles',         price: '$4 each' },
      { name: 'Chocolate Fudge',        desc: 'Rich chocolate base, whipped ganache frosting',                    price: '$4.50 each' },
    ],
  },
  {
    id: 'squares', label: 'Squares & Brownies', img: '/images/fb_3.jpg',
    note: 'Cut from the pan, rich and shareable.',
    items: [
      { name: 'Fudge Brownies',         desc: 'Dense, glossy-topped, fudgy through and through',                  price: '$3.50' },
      { name: 'Nanaimo Bars',           desc: 'Coconut base, custard cream, chocolate top',                       price: '$3.50' },
      { name: 'Lemon Bars',             desc: 'Buttery shortbread, tart lemon curd, icing sugar',                 price: '$3.50' },
      { name: 'Date Squares',           desc: 'Old-fashioned oat crumble, soft date filling',                     price: '$3.00' },
    ],
  },
  {
    id: 'breads', label: 'Sweet Breads', img: '/images/fb_4.jpg',
    note: 'Soft loaves for slow mornings.',
    items: [
      { name: 'Banana Walnut Loaf',     desc: 'Extra-ripe bananas, toasted walnuts, dark sugar crust',            price: '$9' },
      { name: 'Cinnamon Swirl Bread',   desc: 'Soft enriched dough, brown sugar cinnamon ribbon',                 price: '$10' },
      { name: 'Cranberry Orange Scones',desc: 'Flaky, buttery, orange glaze, dried cranberries. 4-pack.',         price: '$12' },
      { name: 'Morning Glory Muffins',  desc: 'Carrot, apple, coconut, raisins. Hearty and sweet.',               price: '$3.50' },
    ],
  },
]

const VEGAN = [
  { name: 'Vegan Chocolate Cake',    desc: 'Aquafaba layers, dark choc ganache, coconut buttercream',   price: '$52' },
  { name: 'Vegan Lemon Poppy Loaf',  desc: 'Flaxseed egg, almond milk, bright lemon glaze',             price: '$9'  },
  { name: 'Vegan Tahini Brownies',   desc: 'Tahini swirl, dark chocolate, crunchy sesame top',           price: '$4'  },
  { name: 'Vegan Oat Cookies',       desc: 'Maple-sweetened, mixed dried fruit, coconut oil',            price: '$12 / 6' },
  { name: 'Vegan Blueberry Muffins', desc: 'Local PEI blueberries, oat streusel, coconut sugar',        price: '$3.50' },
  { name: 'Vegan Cheesecake',        desc: 'Cashew-cream base, date-nut crust, seasonal fruit compote', price: '$46' },
]

function LeafIcon() {
  return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.3 0-8-3.1-8-7 0-3 1.7-5.6 4.3-6.8C9.5 4.5 10.7 4 12 4c1.3 0 2.5.5 3.7 1.2C18.3 6.4 20 9 20 12c0 3.9-3.7 7-8 7z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9"/></svg>
}

function CategoryRow({ cat, index }) {
  const [expanded, setExpanded] = useState(false)
  const isEven = index % 2 === 0
  const items = expanded ? cat.items : cat.items.slice(0, 3)

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start py-14 border-b border-linen-300 last:border-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

      {/* Image */}
      <div className={`overflow-hidden rounded-2xl shadow-lifted aspect-[4/3] ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
        <img src={cat.img} alt={`Fat Cat Bakery ${cat.label}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>

      {/* Items */}
      <div className={isEven ? 'lg:order-first' : 'lg:order-last'}>
        <span className="eyebrow text-base">{cat.note}</span>
        <span className="rule" />
        <h3 className="font-display font-bold text-sub text-ink-400 mb-6">{cat.label}</h3>

        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.name} className="flex justify-between items-start gap-4 group">
              <div className="min-w-0">
                <p className="font-body font-medium text-ink-400 text-sm leading-snug">{item.name}</p>
                <p className="font-body text-ink-100 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
              <span className="font-display font-semibold text-orange text-sm whitespace-nowrap flex-shrink-0 tabular-nums">{item.price}</span>
            </li>
          ))}
        </ul>

        {cat.items.length > 3 && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-5 font-body text-xs font-medium text-ink-200 hover:text-orange transition-colors flex items-center gap-1"
          >
            {expanded ? (
              <><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>Show less</>
            ) : (
              <><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>{cat.items.length - 3} more items</>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="section bg-linen-100">
      <div className="wrap">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <span className="eyebrow">From Our Kitchen</span>
            <span className="rule" />
            <h2 className="font-display font-bold text-title text-ink-400">The Everyday Menu</h2>
          </div>
          <p className="font-body text-sm text-ink-100 max-w-xs sm:text-right leading-relaxed mb-1">
            Made fresh, small-batch, from scratch every single day.
            Call ahead for large quantities.
          </p>
        </div>

        {/* Alternating image + items rows */}
        <div>
          {CATEGORIES.map((cat, i) => (
            <CategoryRow key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Vegan section — full width, earthy green tint */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-sage-100 bg-sage-50 p-7 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 font-hand text-mint-dark text-base mb-1">
                <LeafIcon /> Plant-Based Menu
              </div>
              <h3 className="font-display font-bold text-sub text-ink-400">Vegan Selection</h3>
            </div>
            <p className="font-body text-sm text-ink-100 max-w-xs sm:text-right leading-relaxed">
              Same from-scratch love, zero compromise on flavour. Just ask.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {VEGAN.map(item => (
              <div key={item.name} className="flex justify-between items-start gap-3 py-3 border-b border-sage-100">
                <div className="min-w-0">
                  <p className="font-body font-medium text-ink-400 text-sm leading-snug">{item.name}</p>
                  <p className="font-body text-ink-100 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
                <span className="font-display font-semibold text-mint-dark text-sm whitespace-nowrap flex-shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 font-body text-xs text-ink-100 leading-relaxed">
            * Prepared in a kitchen that also handles dairy and eggs. Please inform us of all allergies when ordering.
          </p>
        </div>

      </div>
    </section>
  )
}
