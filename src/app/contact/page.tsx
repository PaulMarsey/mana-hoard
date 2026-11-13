"use client";

import { type FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Development mode: no live sending service is configured yet. Add a secure email endpoint or form handler before going live.");
  };

  return (
    <main className="container page-block">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Ask the Hoard.</h1>
        </div>
      </div>

      <section className="section-surface" style={{ marginTop: "28px", padding: "18px 0 40px" }}>
        <div className="container">
          <form className="filters-panel" onSubmit={handleSubmit} style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="filter-section">
              <label className="field-label" htmlFor="category">Enquiry type</label>
              <select id="category" className="text-field" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>Orders</option>
                <option>Products</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div className="filter-section">
              <label className="field-label" htmlFor="name">Name</label>
              <input id="name" className="text-field" type="text" placeholder="Your name" />
            </div>
            <div className="filter-section">
              <label className="field-label" htmlFor="email">Email</label>
              <input id="email" className="text-field" type="email" placeholder="you@example.com" />
            </div>
            <div className="filter-section">
              <label className="field-label" htmlFor="message">Message</label>
              <textarea id="message" className="text-field" rows={6} placeholder="Tell us what you need help with" />
            </div>
            <button type="submit" className="primary-button">Send enquiry</button>
            {status ? <p style={{ marginTop: "16px", color: "#59665c" }}>{status}</p> : null}
          </form>
        </div>
      </section>
    </main>
  );
}
