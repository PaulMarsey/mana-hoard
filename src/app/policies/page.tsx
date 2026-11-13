export default function PoliciesPage() {
  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Policies</p>
          <h1>Business review pending.</h1>
        </div>
      </div>

      <section className="section-surface" style={{ marginTop: "28px", padding: "18px 0 40px" }}>
        <div className="container">
          <div className="content-grid">
            <article className="content-card">
              <span>Delivery</span>
              <h3>Shipping</h3>
              <p>Delivery information and charges require business review before publication.</p>
            </article>
            <article className="content-card">
              <span>Returns</span>
              <h3>Refunds</h3>
              <p>Return policy text and handling details must be confirmed before launch.</p>
            </article>
            <article className="content-card">
              <span>Privacy</span>
              <h3>Data handling</h3>
              <p>Privacy, cookie and terms content are placeholders pending legal review.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
