# Mana Hoard

A responsive Next.js storefront for an independent UK Magic: The Gathering shop built around a premium fantasy retailer aesthetic.

## Local development

1. Install Node.js 20 or newer.
2. Run `npm install` in the project root.
3. Start the app with `npm run dev`.
4. Open http://localhost:3000.

## GitHub Codespaces

The repository includes a development container that installs the dependencies and starts the Next.js development server when the Codespace starts. From GitHub, open the repository and choose **Code → Codespaces → Create codespace on main**. Port 3000 will be forwarded and opened in the browser.

GitHub Actions also runs lint, type checks and a production build on pushes and pull requests to `main`.

## Demo mode

This build is clearly marked as demonstration mode. Shopify and Scryfall integrations are not connected yet, and no private credentials are included.

## Environment variables

Copy `.env.example` to `.env.local` and fill in any live integration values before connecting Shopify or Scryfall.

## Route overview

- `/` — homepage with hero, category browsing, featured products and editorial sections.
- `/shop` — searchable, filterable product catalogue.
- `/commander` — Commander-focused landing page.
- `/about` — story and brand overview.
- `/content` — future editorial section for deck features and videos.
- `/contact` — form stub with clear demo-mode messaging.
- `/policies` — placeholder policy pages requiring business review.

## Integration notes

- Shopify remains the source of truth for products, prices and stock.
- Scryfall enriches card metadata and artwork where a genuine printing match is identified.
- Actual checkout, live inventory and email sending are disabled until credentials and endpoints are configured.
