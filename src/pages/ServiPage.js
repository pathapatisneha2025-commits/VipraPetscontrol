import React from "react";
import { FaBug, FaBolt, FaHome, FaPhoneAlt } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #050b14;
          color: #e5e7eb;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 60px 20px;
        }

        .pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(132,204,22,.15);
          color: #84cc16;
          font-size: 13px;
        }

        .title {
          font-size: 48px;
          line-height: 1.1;
          margin: 16px 0;
        }

        .title span { color: #84cc16; }

        .subtitle {
          max-width: 620px;
          color: #9ca3af;
        }

        /* SERVICES */
        .services {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 50px;
        }

        .card {
          background: radial-gradient(120% 120% at 0% 0%, #0b1220 0%, #020617 70%);
          border-radius: 16px;
          padding: 26px;
          border: 1px solid rgba(255,255,255,.06);
          transition: .3s;
        }

        .card:hover {
          border-color: #84cc16;
          transform: translateY(-4px);
        }

        .icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(132,204,22,.15);
          color: #84cc16;
          margin-bottom: 14px;
        }

        .card h3 { margin: 8px 0 10px; }

        .card p {
          color: #9ca3af;
          font-size: 14px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .tag {
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(132,204,22,.12);
          color: #84cc16;
          font-size: 12px;
        }

        /* PROCESS */
        .process {
          margin-top: 80px;
          text-align: center;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .step {
          background: #020617;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 16px;
          padding: 28px;
        }

        .step b {
          color: #84cc16;
          font-size: 32px;
          display: block;
          margin-bottom: 10px;
        }

        /* CTA */
        .cta {
          margin-top: 90px;
          background: linear-gradient(135deg, #020617, #020617);
          border-top: 1px solid rgba(255,255,255,.06);
          text-align: center;
          padding: 70px 20px;
        }

        .btn {
          padding: 14px 26px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          margin: 8px;
        }

        .btn-green {
          background: #84cc16;
          color: #020617;
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,.25);
        }
      `}</style>

      {/* HERO */}
      <div className="container">
        <span className="pill">Our Services</span>
        <h1 className="title">Complete <span>Pest Control</span> Solutions</h1>
        <p className="subtitle">
          From residential homes to commercial spaces, we provide comprehensive
          pest management services tailored to your specific needs.
        </p>

        {/* SERVICES */}
        <div className="services">
          <div className="card">
            <div className="icon"><FaBug /></div>
            <h3>Cockroach Control</h3>
            <p>Cockroaches spread infections and contaminate food. Our advanced gel baiting and odorless sprays target kitchens, bathrooms, and hidden cracks.</p>
            <div className="tags"><span className="tag">Safe for kids & pets</span><span className="tag">Long-lasting</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaBolt /></div>
            <h3>Mosquito Control</h3>
            <p>Fogging, larvicide spraying, and outdoor mosquito control to prevent Dengue, Malaria, and Chikungunya.</p>
            <div className="tags"><span className="tag">Homes</span><span className="tag">Gated Communities</span><span className="tag">Commercial</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaHome /></div>
            <h3>Termite Control</h3>
            <p>Pre & post construction anti-termite treatment using chemical barriers, drilling-injection, and soil treatment.</p>
            <div className="tags"><span className="tag">Pre & Post Construction</span><span className="tag">1–5 Years Warranty</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaBug /></div>
            <h3>Bed Bug Control</h3>
            <p>Herbal + chemical combination treatment to eliminate bed bugs from mattresses, furniture, and curtains.</p>
            <div className="tags"><span className="tag">Two-Step Treatment</span><span className="tag">Complete Eradication</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaBolt /></div>
            <h3>Rat & Rodent Control</h3>
            <p>Traps, baiting systems, and entry-point blocking to eliminate rats and rodents.</p>
            <div className="tags"><span className="tag">Homes</span><span className="tag">Warehouses</span><span className="tag">Restaurants</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaHome /></div>
            <h3>Lizard Control</h3>
            <p>Odorless surface sprays and repellent formulas that prevent lizards from entering or sticking to walls.</p>
            <div className="tags"><span className="tag">Safe</span><span className="tag">Highly Effective</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaBug /></div>
            <h3>Honeybee Removal</h3>
            <p>Eco-friendly honeybee removal and safe relocation without damaging your property.</p>
            <div className="tags"><span className="tag">Eco-Friendly</span><span className="tag">Expert Handled</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaBug /></div>
            <h3>Red & Black Ant Control</h3>
            <p>Gel baiting and odorless residual sprays targeting ant colonies and preventing re-infestation.</p>
            <div className="tags"><span className="tag">Indoor</span><span className="tag">Outdoor</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaHome /></div>
            <h3>Snake Repellent Treatment</h3>
            <p>Herbal repellents and eco-friendly methods to keep snakes away from farms, gardens, and basements.</p>
            <div className="tags"><span className="tag">No Harm to Snake</span><span className="tag">Repellent Only</span></div>
          </div>

          <div className="card">
            <div className="icon"><FaHome /></div>
            <h3>Oil Spray for Woodwork</h3>
            <p>Special oil-based treatment for wooden furniture, doors, cupboards, and kitchen cabinets.</p>
            <div className="tags"><span className="tag">Anti-Termite</span><span className="tag">Moisture Protection</span></div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="process">
          <span className="pill">How It Works</span>
          <h2 className="title" style={{ fontSize: '38px' }}>
            Our Simple <span>4-Step</span> Process
          </h2>
          <div className="steps">
            <div className="step">
              <b>01</b>
              <h4>Free Inspection</h4>
              <p>We assess your property and identify pest issues.</p>
            </div>
            <div className="step">
              <b>02</b>
              <h4>Custom Plan</h4>
              <p>Tailored treatment plan for your needs.</p>
            </div>
            <div className="step">
              <b>03</b>
              <h4>Treatment</h4>
              <p>Safe and effective pest control treatments.</p>
            </div>
            <div className="step">
              <b>04</b>
              <h4>Follow-Up</h4>
              <p>Ensuring complete pest elimination.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2 style={{ fontSize: '34px' }}>Need Professional Pest Control?</h2>
        <p style={{ color: '#9ca3af' }}>
          Get in touch with us for a free consultation and quote.
        </p>
        <button className="btn btn-green"><FaPhoneAlt /> Call Now</button>
        <button className="btn btn-outline">Contact Us →</button>
      </div>
    </>
  );
}
