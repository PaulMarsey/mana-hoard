export default function CommanderPage() {
  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Commander</p>
          <h1>Lead with legend.</h1>
        </div>
      </div>

      <section className="section-surface" style={{ marginTop: "28px", padding: "18px 0 40px" }}>
        <div className="container">
          <div className="content-grid">
            <article className="content-card">
              <span>Decks</span>
              <h3>Preconstructed favourites</h3>
              <p>Commander-ready decks, hero picks and deck-building inspiration for players building their next table.</p>
            </article>
            <article className="content-card">
              <span>Singles</span>
              <h3>High-impact staples</h3>
              <p>Commander ramp, card draw, removal and top-end finishers selected to enhance the best decks.</p>
            </article>
            <article className="content-card">
              <span>Collections</span>
              <h3>Future editorials</h3>
              <p>Space for deck guides, gameplay content and community features as the Hoard grows.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
