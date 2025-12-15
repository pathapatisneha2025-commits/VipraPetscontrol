import React from "react";
import { FiCheckCircle, FiShield, FiUsers, FiTarget, FiAward } from "react-icons/fi";

export default function AboutUsPage() {
  return (
    <>
      <style>{`
        :root {
          --bg-dark: #050b14;
          --bg-card: #0b1220;
          --green: #8fdc2f;
          --text-muted: #b9c0cc;
        }

        .about-page {
          background: radial-gradient(80% 120% at 10% 10%, #0f1a2e, var(--bg-dark));
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        /* Hero */
        .hero-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(143, 220, 47, 0.15);
          color: var(--green);
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 18px;
        }

        .hero-title span {
          color: var(--green);
        }

        .hero-text {
          max-width: 650px;
          color: var(--text-muted);
          font-size: 18px;
        }

        /* Mission */
        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-title span {
          color: var(--green);
        }

        .section-text {
          color: var(--text-muted);
          margin-bottom: 18px;
          line-height: 1.7;
        }

        .checklist {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        .checklist li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #e8ecf2;
        }

        .logo-card {
          background: linear-gradient(145deg, #0e1626, #060b16);
          border-radius: 22px;
          padding: 40px;
          display: flex;
          justify-content: center;
          box-shadow: 0 20px 50px rgba(0,0,0,.45);
        }

        .logo-card img {
          max-width: 260px;
        }

        /* Values */
        .values-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
        }

        .value-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.05);
        }

        .value-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: rgba(143,220,47,.15);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          font-size: 22px;
        }

        .value-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .value-text {
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="about-page">
        {/* Hero */}
        <section className="container">
          <span className="hero-badge">About Us</span>
          <h1 className="hero-title">
            Your Trusted <span>Partner</span> in <br /> Pest Control
          </h1>
          <p className="hero-text">
            For over a decade, Vipra Pest Control has been protecting homes and
            businesses with professional, safe, and effective pest management
            solutions.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="container">
          <div className="two-col">
            <div>
              <h2 className="section-title">
                Our Mission & <span>Vision</span>
              </h2>
              <p className="section-text">
                At Vipra Pest Control, our mission is to create pest-free
                environments that promote health, safety, and peace of mind. We
                use environmentally responsible methods that protect people and
                the planet.
              </p>
              <p className="section-text">
                Our vision is to be the most trusted and innovative pest control
                company, setting industry standards for quality and customer
                service excellence.
              </p>

              <ul className="checklist">
                <li><FiCheckCircle color="#8fdc2f" /> Licensed and certified technicians</li>
                <li><FiCheckCircle color="#8fdc2f" /> State-of-the-art equipment and methods</li>
                <li><FiCheckCircle color="#8fdc2f" /> Comprehensive pest management solutions</li>
                <li><FiCheckCircle color="#8fdc2f" /> Commitment to environmental responsibility</li>
              </ul>
            </div>

            <div className="logo-card">
              <img src="/Logoimage.jpeg" alt="Vipra Pest Control" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container">
          <div className="values-header">
            <span className="hero-badge">Our Values</span>
            <h2 className="hero-title" style={{ fontSize: "42px" }}>
              What Drives <span>Us</span>
            </h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FiShield /></div>
              <div className="value-title">Safety First</div>
              <p className="value-text">Eco-friendly products that are safe for your family, pets, and the environment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiUsers /></div>
              <div className="value-title">Customer Focus</div>
              <p className="value-text">Your satisfaction is our priority. We work closely with you to address all pest concerns.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiTarget /></div>
              <div className="value-title">Expert Solutions</div>
              <p className="value-text">Trained technicians using advanced methods for long-lasting results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiAward /></div>
              <div className="value-title">Guaranteed Results</div>
              <p className="value-text">We stand behind our work with service warranties from 1 to 5 years.</p>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="container">
          <div className="values-header">
            <span className="hero-badge">Our Journey</span>
            <h2 className="hero-title" style={{ fontSize: "42px" }}>
              Growing <span>Together</span>
            </h2>
          </div>

          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {[{
              year: "2014",
              title: "Company Founded",
              text: "Started with a vision to provide safe pest control"
            }, {
              year: "2017",
              title: "1000+ Clients",
              text: "Reached our first thousand happy customers"
            }, {
              year: "2020",
              title: "Expanded Services",
              text: "Added specialized treatments and eco-friendly options"
            }].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div style={{ minWidth: "70px", textAlign: "center" }}>
                  <span style={{ background: "rgba(143,220,47,.15)", color: "#8fdc2f", padding: "6px 14px", borderRadius: "20px" }}>{item.year}</span>
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <p style={{ color: "#b9c0cc" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Ready to <span>Get Started?</span></h2>
          <p className="section-text">Contact Vipra Pest Control today for reliable and professional pest solutions.</p>
          <a href="/contact" style={{ display: "inline-block", marginTop: "20px", background: "#8fdc2f", color: "#000", padding: "14px 28px", borderRadius: "14px", fontWeight: 600 }}>Contact Us</a>
        </section>
      </div>
    </>
  );
}
