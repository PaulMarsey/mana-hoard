export default function ContentPage() {
  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Tales from the Hoard</p>
          <h1>Stories from the table.</h1>
        </div>
      </div>

      <section className="section-surface" style={{ marginTop: "28px", padding: "18px 0 40px" }}>
        <div className="container">
          <div className="content-grid">
            <article className="content-card">
              <span>Commander</span>
              <h3>Deck features</h3>
              <p>In-depth article layouts for new strategies, budget picks and legendary combinations.</p>
            </article>
            <article className="content-card">
              <span>Video</span>
              <h3>Let&apos;s play</h3>
              <p>Embed future gameplay videos, product openings and community moments from the table.</p>
            </article>
            <article className="content-card">
              <span>Collecting</span>
              <h3>Coming soon</h3>
              <p>No published content yet. This section is intentionally ready for editorial expansion without fabricating articles.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
