export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .why-section {
          background: linear-gradient(120deg, #050b14, #0c1624);
          padding: 120px 6%;
          color: #fff;
        }

        .why-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          background: rgba(155, 226, 45, 0.15);
          color: #9be22d;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .why-left h2 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .why-left h2 span {
          color: #9be22d;
        }

        .why-left p {
          font-size: 17px;
          color: #cfd8dc;
          max-width: 560px;
          margin-bottom: 35px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 40px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #fff;
        }

        .feature span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #9be22d;
          color: #000;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .why-card {
          background: radial-gradient(circle at top, #101c2f, #050b14);
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 0 60px rgba(0,0,0,0.6);
        }

        .guarantee {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .shield {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid #9be22d;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9be22d;
          font-size: 20px;
        }

        .guarantee h3 {
          font-size: 24px;
          margin: 0;
        }

        .guarantee p {
          font-size: 14px;
          color: #cfd8dc;
          margin: 0;
        }

        .stars {
          margin: 20px 0 30px;
        }

        .star-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #cfd8dc;
        }

        .star {
          color: #9be22d;
          font-size: 18px;
        }

        .quote-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: #9be22d;
          color: #000;
          padding: 18px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .quote-btn:hover {
          background: #86c91f;
        }

        @media (max-width: 900px) {
          .why-container {
            grid-template-columns: 1fr;
          }

          .why-left h2 {
            font-size: 42px;
          }

          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="why-section">
        <div className="why-container">
          
          {/* LEFT CONTENT */}
          <div className="why-left">
            <div className="badge">Why Choose Us</div>

            <h2>
              Trusted by <span>Thousands</span> of Families
            </h2>

            <p>
              With over a decade of experience in pest control, we’ve helped
              thousands of homes and businesses stay pest-free. Our commitment
              to quality and customer satisfaction sets us apart.
            </p>

            <div className="features">
              <div className="feature">
                <span>✓</span> Professional & Trained Technicians
              </div>
              <div className="feature">
                <span>✓</span> Eco-Friendly & Safe Products
              </div>
              <div className="feature">
                <span>✓</span> Affordable Pricing
              </div>
              <div className="feature">
                <span>✓</span> Same Day Service Available
              </div>
              <div className="feature">
                <span>✓</span> 1-5 Years Service Warranty
              </div>
              <div className="feature">
                <span>✓</span> 24/7 Customer Support
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="why-card">
            <div className="guarantee">
              <div className="shield">🛡️</div>
              <div>
                <h3>100% Guaranteed</h3>
                <p>Pest-Free Results</p>
              </div>
            </div>

            <div className="stars">
              {[1,2,3].map((i) => (
                <div className="star-row" key={i}>
                  <div>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <span>5.0 Rating</span>
                </div>
              ))}
            </div>

            <a href="tel:+919999999999" className="quote-btn">
              📞 Get Free Quote
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
