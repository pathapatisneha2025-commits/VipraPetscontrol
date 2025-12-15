export default function Features() {
  return (
    <>
      <style>{`
        .features-section {
          background: linear-gradient(180deg, #0a1220, #050b14);
          padding: 50px 5%;
        }

        .features-container {
          max-width: 1200px;
          margin: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          text-align: center;
        }

        .feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #1e90ff;
          color: #1e90ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 20px;
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
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              Licensed & Certified Professionals
            </div>

            <div className="feature-item">
              <div className="feature-icon">✓</div>
              Eco-Friendly Solutions
            </div>

            <div className="feature-item">
              <div className="feature-icon">✓</div>
              24/7 Emergency Services
            </div>

            <div className="feature-item">
              <div className="feature-icon">✓</div>
              Satisfaction Guaranteed
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
