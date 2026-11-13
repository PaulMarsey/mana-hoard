import type { Metadata, Viewport } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mana Hoard | Every Card Has a Legend",
  description:
    "Mana Hoard is an independent UK retailer for Magic: The Gathering singles, Commander decks, sealed product and accessories.",
};

export const viewport: Viewport = {
  themeColor: "#173c2b",
};

const navItems = [
  { href: "/shop", label: "The Hoard" },
  { href: "/commander", label: "Commander" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Tales from the Hoard" },
  { href: "/contact", label: "Contact" },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand" aria-label="Mana Hoard home">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <span>
            <span className="brand-name">mana hoard</span>
            <span className="brand-tag">Every card has a legend</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/shop" className="primary-button header-cta">
          Explore the Hoard
        </Link>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="site-footer">
            <div className="container footer-grid">
              <div>
                <p className="footer-title">Mana Hoard</p>
                <p>Independent Magic: The Gathering stock for Commander players, collectors and tabletop fans across the UK.</p>
              </div>
              <div>
                <p className="footer-title">Explore</p>
                <ul>
                  <li>
                    <Link href="/shop">The Hoard</Link>
                  </li>
                  <li>
                    <Link href="/commander">Commander</Link>
                  </li>
                  <li>
                    <Link href="/content">Tales from the Hoard</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer-title">Support</p>
                <ul>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/policies">Policies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
