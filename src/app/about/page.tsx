import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">About Mana Hoard</p>
          <h1>Every card has a legend.</h1>
        </div>
      </div>

      <section className="section-surface" style={{ marginTop: "28px", padding: "18px 0 40px" }}>
        <div className="container">
          <div className="content-grid" style={{ gridTemplateColumns: "1fr" }}>
            <article className="content-card" style={{ padding: "2rem" }}>
              <p>Welcome to Mana Hoard, an independent UK trading card store where fantasy, strategy and collecting come together.</p>
              <p>Born from a love of high fantasy, knights, legendary battles and tabletop gaming, Mana Hoard helps players and collectors discover their next treasure.</p>
              <p>We specialise in Magic: The Gathering, with a particular passion for Commander. Whether you are searching for the final card for your deck, discovering a new commander or expanding your collection, we want exploring the Hoard to feel like part of the adventure.</p>
              <p>As we grow, we hope to share more of that adventure through deck features, gameplay videos and conversations with the community.</p>
              <Link href="/shop" className="primary-button" style={{ marginTop: "12px" }}>
                Browse the hoard
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
