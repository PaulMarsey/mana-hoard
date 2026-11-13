"use client";

import Link from "next/link";

const categories = [
  { name: "Magic singles", description: "Cards, staples and collector favourites", accent: "azure" },
  { name: "Commander decks", description: "Ready-to-play and budget-friendly choices", accent: "amber" },
  { name: "Sealed products", description: "Boosters, bundles and collector boxes", accent: "violet" },
  { name: "Collector's treasures", description: "Curated finds for long-term collections", accent: "forest" },
];

const featuredProducts = [
  { name: "Sol Ring", category: "Commander staple", price: "£12.95", condition: "Near Mint", tag: "Best seller", accent: "amber" },
  { name: "Lightning Bolt", category: "Magic singles", price: "£2.35", condition: "Excellent · Foil", tag: "Fresh find", accent: "rose" },
  { name: "Commander Masters Deck", category: "Sealed", price: "£49.99", condition: "New", tag: "New arrival", accent: "violet" },
  { name: "Dragon Shield Sleeves", category: "Accessories", price: "£9.95", condition: "Matte", tag: "Staff pick", accent: "forest" },
];

const recentArrivals = [
  { name: "Forest", detail: "Modern Horizons 3", price: "£0.65" },
  { name: "The One Ring", detail: "Tales of Middle-earth", price: "£18.50" },
  { name: "Arcane Signet", detail: "Commander Legends", price: "£3.45" },
  { name: "Collector Booster Box", detail: "Wilds of Eldraine", price: "£132.00" },
];

export default function HomePage() {
  return (
    <main className="page-body">
      <div className="demo-banner">Demonstration mode — Shopify and Scryfall integrations are not connected yet.</div>
      <section className="hero-panel">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent UK trading card shop</p>
            <h1>Every Card Has a Legend.</h1>
            <p className="lead">Discover your next treasure. Shop Magic: The Gathering singles, Commander decks and sealed products from an independent UK store built by a player, for players.</p>
            <div className="cta-row">
              <Link href="/shop" className="primary-button">Explore the Hoard</Link>
              <Link href="/about" className="secondary-button">Discover Our Story</Link>
            </div>
            <div className="trust-row">
              <div className="avatar-stack" aria-hidden="true"><span>✦</span><span>◉</span><span>✧</span></div>
              <span>Built for Commander players, collectors and tabletop fans across the UK.</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Fantasy card artwork illustration">
            <div className="orb" aria-hidden="true" />
            <div className="card-card back-card"><div className="card-inner"><span className="card-title">Moonlit Grove</span><strong>Wanderer&apos;s Welcome</strong><p>When the evening star appears, the old paths open.</p></div></div>
            <div className="card-card main-card"><div className="card-inner"><span className="card-title">Wildwood Keeper</span><strong>Ancient of the Vale</strong><p>Whenever a forest enters the battlefield, draw a card.</p></div></div>
            <div className="floating-note"><span className="note-mark">✦</span><span><strong>Every card checked</strong>Packed with care, ready for your next game.</span></div>
          </div>
        </div>
      </section>

      <section className="container storefront-strip" aria-label="Shop benefits">
        <div className="benefit-item">Condition-checked stock</div>
        <div className="benefit-item">UK friendly pricing</div>
        <div className="benefit-item">Commander focused</div>
        <div className="benefit-item">Player-run support</div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div><p className="eyebrow">Find your next move</p><h2>Shop your way</h2></div>
          <Link href="/shop" className="text-link">Browse everything →</Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link key={category.name} href="/shop" className={`category-tile ${category.accent}`}>
              <span className="tile-mark" aria-hidden="true">✦</span>
              <div><strong>{category.name}</strong><small>{category.description}</small></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-surface">
        <div className="container section-block">
          <div className="section-heading">
            <div><p className="eyebrow">Picked with players in mind</p><h2>Hoard favourites</h2></div>
            <Link href="/shop" className="text-link">See the full catalogue →</Link>
          </div>
          <div className="feature-grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className={`product-card ${product.accent}`}>
                <div className="product-art" aria-hidden="true"><span>{product.name.slice(0, 2).toUpperCase()}</span></div>
                <div className="product-copy">
                  <div className="meta-row"><span>{product.category}</span><span className="tag">{product.tag}</span></div>
                  <h3>{product.name}</h3>
                  <p>{product.condition}</p>
                  <div className="product-bottom"><strong>{product.price}</strong><Link href="/shop" className="secondary-button small-button">View</Link></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="split-panel"><div><p className="eyebrow">Fresh stock</p><h2>Recently added</h2></div><Link href="/shop" className="text-link">Browse more →</Link></div>
        <div className="recent-grid">
          {recentArrivals.map((item) => (
            <div key={item.name} className="recent-item"><div className="recent-swatch" aria-hidden="true" /><div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong></div>
          ))}
        </div>
      </section>

      <section className="section-surface about-panel">
        <div className="container split-panel with-copy">
          <div><p className="eyebrow">A shop with a little heart</p><h2>Made by players. Here for the community.</h2><p>Mana Hoard is an independent UK trading card store where fantasy, strategy and collecting come together. We specialise in Magic: The Gathering, with a particular passion for Commander, and we want exploring the Hoard to feel like part of the adventure.</p></div>
          <div className="stat-grid"><div className="stat-box"><strong>Commander</strong><span>Focused curation</span></div><div className="stat-box"><strong>Community</strong><span>Real-player support</span></div><div className="stat-box"><strong>Care</strong><span>Every order packed thoughtfully</span></div></div>
        </div>
      </section>

      <section className="container section-block">
        <div className="split-panel"><div><p className="eyebrow">Tales from the Hoard</p><h2>Stories, features and future content</h2></div><Link href="/content" className="text-link">View updates →</Link></div>
        <div className="content-grid">
          <article className="content-card"><span>Commander</span><h3>Deck features</h3><p>Editorial spotlights for budget decks, Commander staples and archetype guides.</p></article>
          <article className="content-card"><span>Videos</span><h3>Let&apos;s play and reviews</h3><p>Short-form gameplay, product openings and community moments. Ready for future publishing.</p></article>
          <article className="content-card"><span>Collecting</span><h3>Good finds and set deep dives</h3><p>Curated stories for collectors exploring the next treasure in their collection.</p></article>
        </div>
      </section>
    </main>
  );
}
