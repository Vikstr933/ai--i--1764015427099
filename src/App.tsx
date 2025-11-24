import React from 'react';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Colorama Lund</h2>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Färg & Inspiration i Lund</h1>
            <p className="hero-subtitle">
              Din lokala färgbutik med expertis och kvalitet sedan 1989
            </p>
            <div className="hero-buttons">
              <a href="tel:046-211234" className="button button-primary">
                Ring oss: 046-211 234
              </a>
              <a href="#kontakt" className="button button-secondary">
                Besök oss
              </a>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Stort sortiment</h3>
                <p>Färg, tapeter, verktyg och tillbehör för alla projekt</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Expertrådgivning</h3>
                <p>Våra kunniga medarbetare hjälper dig hitta rätt</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Snabb service</h3>
                <p>Kulörblandning på plats - färdigt på minuter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="container">
            <div className="info-content">
              <div className="info-text">
                <h2>Välkommen till Colorama Lund</h2>
                <p>
                  Vi är din lokala färgbutik i hjärtat av Lund. Hos oss hittar du allt för ditt målningsprojekt - från högkvalitativ färg och tapeter till penslar, rullar och skyddsutrustning.
                </p>
                <p>
                  Vårt erfarna team finns här för att ge dig personlig rådgivning och hjälpa dig välja rätt produkter för just ditt projekt. Vi blandar även kulörer på plats så du får exakt den färg du önskar.
                </p>
              </div>
              <div className="info-details">
                <div className="detail-box">
                  <h3>Öppettider</h3>
                  <p>Mån-Fre: 07:00 - 18:00</p>
                  <p>Lördag: 09:00 - 15:00</p>
                  <p>Söndag: Stängt</p>
                </div>
                <div className="detail-box">
                  <h3>Hitta hit</h3>
                  <p>Gasverksgatan 15</p>
                  <p>222 29 Lund</p>
                  <p>Tel: 046-211 234</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="kontakt">
          <div className="container">
            <h2>Redo att börja måla?</h2>
            <p>Kom förbi vår butik så hjälper vi dig komma igång!</p>
            <a href="tel:046-211234" className="button button-large">
              Ring oss idag
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Colorama Lund. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  )
}