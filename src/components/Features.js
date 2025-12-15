export default function Features() {
  return (
    <>
      <style>{`
        .features-section {
          background: linear-gradient(180deg, #0a1220, #050b14);
          padding: 70px 5%;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .features-container {
          max-width: 1200px;
          margin: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          text-align: center;
        }

        .feature-box h2 {
          font-size: 42px;
          color: #9cff00;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .feature-box p {
          color: #b7c2d4;
          font-size: 16px;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 500px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="features-section">
        <div className="features-container">
          <div className="features-grid">

            <div className="feature-box">
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

            <div className="feature-box">
              <h2>5000+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="feature-box">
              <h2>10</h2>
              <p>Expert Services</p>
            </div>

            <div className="feature-box">
              <h2>100%</h2>
              <p>Satisfaction</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
