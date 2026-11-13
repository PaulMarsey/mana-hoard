"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  set: string;
  category: "Singles" | "Commander" | "Sealed" | "Accessories";
  finish: string;
  condition: string;
  price: number;
  stock: string;
  rarity: string;
  art: string;
};

const products: Product[] = [
  { id: 1, name: "Sol Ring", set: "Commander Legends", category: "Commander", finish: "Foil", condition: "Near Mint", price: 12.95, stock: "In stock", rarity: "Mythic", art: "rose" },
  { id: 2, name: "Forest", set: "Modern Horizons 3", category: "Singles", finish: "Non-foil", condition: "Near Mint", price: 0.65, stock: "In stock", rarity: "Common", art: "green" },
  { id: 3, name: "Lightning Bolt", set: "The List", category: "Singles", finish: "Foil", condition: "Excellent", price: 2.35, stock: "Low stock", rarity: "Rare", art: "red" },
  { id: 4, name: "Commander Masters Deck", set: "Commander Masters", category: "Sealed", finish: "Deck", condition: "New", price: 49.99, stock: "In stock", rarity: "Collector", art: "purple" },
  { id: 5, name: "Arcane Signet", set: "Commander Legends", category: "Commander", finish: "Etched", condition: "Near Mint", price: 3.45, stock: "In stock", rarity: "Uncommon", art: "gold" },
  { id: 6, name: "Dragon Shield Sleeves", set: "Accessories", category: "Accessories", finish: "Matte", condition: "New", price: 9.95, stock: "In stock", rarity: "Accessory", art: "slate" },
  { id: 7, name: "The One Ring", set: "Tales of Middle-earth", category: "Singles", finish: "Foil", condition: "Near Mint", price: 18.5, stock: "Low stock", rarity: "Mythic", art: "amber" },
  { id: 8, name: "Collector Booster Box", set: "Wilds of Eldraine", category: "Sealed", finish: "Collector box", condition: "New", price: 132.0, stock: "Preorder", rarity: "Collector", art: "blue" },
];

const categoryOptions = ["All", "Singles", "Commander", "Sealed", "Accessories"] as const;
type SortOption = "newest" | "price-low" | "price-high" | "alpha";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categoryOptions)[number]>("All");
  const [stockOnly, setStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const visibleProducts = useMemo(() => {
    const next = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesStock = !stockOnly || product.stock === "In stock";
      const haystack = `${product.name} ${product.set} ${product.rarity} ${product.finish}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesStock && matchesSearch;
    });

    return next.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "alpha":
          return a.name.localeCompare(b.name);
        default:
          return b.id - a.id;
      }
    });
  }, [category, search, sortBy, stockOnly]);

  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">The Hoard</p>
          <h1>Find your next treasure.</h1>
        </div>
        <p className="lede">Browse Magic singles, Commander staples, sealed product and accessories from a real UK shop built by players.</p>
      </div>

      <section className="catalogue-shell">
        <aside className="filters-panel" aria-label="Product filters">
          <div className="filter-section">
            <label className="field-label" htmlFor="search-products">Search</label>
            <input id="search-products" className="text-field" placeholder="Name, set or card type" value={search} onChange={(event) => setSearch(event.target.value)} />
          </div>

          <div className="filter-section">
            <p className="field-label">Category</p>
            <div className="chip-group">
              {categoryOptions.map((option) => (
                <button key={option} type="button" className={option === category ? "chip active" : "chip"} onClick={() => setCategory(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section checkbox-row">
            <input id="in-stock" type="checkbox" checked={stockOnly} onChange={(event) => setStockOnly(event.target.checked)} />
            <label htmlFor="in-stock">In stock only</label>
          </div>

          <div className="filter-section">
            <label className="field-label" htmlFor="sort-by">Sort by</label>
            <select id="sort-by" className="text-field" value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)}>
              <option value="newest">Newest</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="alpha">Alphabetical</option>
            </select>
          </div>
        </aside>

        <div className="catalogue-panel">
          <div className="catalogue-header">
            <p>{visibleProducts.length} results</p>
            <button type="button" className="text-button" onClick={() => { setSearch(""); setCategory("All"); setStockOnly(false); setSortBy("newest"); }}>
              Reset filters
            </button>
          </div>

          {visibleProducts.length === 0 ? (
            <div className="empty-state">
              <h2>No matching treasures found.</h2>
              <p>Try a different search or clear the filters to view the whole hoard.</p>
            </div>
          ) : (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className={`product-art ${product.art}`} aria-hidden="true"><span>{product.name.slice(0, 2).toUpperCase()}</span></div>
                  <div className="product-copy">
                    <div className="meta-row"><span>{product.category}</span><span className="tag">{product.rarity}</span></div>
                    <h3>{product.name}</h3>
                    <p>{product.set}</p>
                    <p>{product.condition} · {product.finish}</p>
                    <div className="product-bottom"><strong>£{product.price.toFixed(2)}</strong><span className={product.stock === "In stock" ? "stock in-stock" : "stock low-stock"}>{product.stock}</span></div>
                    <div style={{ marginTop: "12px" }}><Link href="/shop" className="secondary-button small-button">View</Link></div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
