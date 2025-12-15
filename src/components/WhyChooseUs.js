export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Technicians",
      desc: "Our team is trained and certified in the latest pest control methods",
    },
    {
      title: "Safe & Effective",
      desc: "We use eco-friendly products that are safe for your family and pets",
    },
    {
      title: "Guaranteed Results",
      desc: "100% satisfaction guarantee on all our services",
    },
    {
      title: "Affordable Pricing",
      desc: "Competitive rates with no hidden fees",
    },
  ];

  return (
    <>
      <style>{`
        .why-section {
          background: #0b1625;
          padding: 100px 5%;
          color: #ffffff;
        }

        .why-container {
          max-width: 1200px;
          margin: auto;
        }

        .why-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
        }

        .why-left {
          flex: 1;
        }

        .why-left h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 36px;
          line-height: 1.2;
        }

        .why-left h2 span {
          color: #1e90ff;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        /* 🔥 FIXED ALIGNMENT */
        .why-item {
          display: flex;
          align-items: center; /* KEY FIX */
          gap: 18px;
        }

        .why-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(30, 144, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #1e90ff;
          flex-shrink: 0;
        }

        .why-text h4 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }

        .why-text p {
          margin-top: 6px;
          font-size: 14px;
          color: #a9b6c4;
          line-height: 1.6;
          max-width: 460px;
        }

        .why-right {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .cta-card {
          background: linear-gradient(180deg, #0b1625, #050b14);
          border: 1px solid #152238;
          border-radius: 22px;
          padding: 42px;
          max-width: 380px;
          width: 100%;
        }

        .cta-icon {
          font-size: 38px;
          color: #1e90ff;
          margin-bottom: 20px;
        }

        .cta-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cta-card p {
          font-size: 14px;
          color: #a9b6c4;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .cta-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #1e90ff;
          color: #ffffff;
          padding: 14px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #187bcd;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .why-flex {
            flex-direction: column;
            text-align: center;
          }

          .why-item {
            align-items: flex-start;
            text-align: left;
          }

          .cta-card {
            margin-top: 40px;
          }
        }
      `}</style>

      <section className="why-section">
        <div className="why-container">
          <div className="why-flex">

            {/* LEFT */}
            <div className="why-left">
              <h2>
                Why Choose <span>VIPRA?</span>
              </h2>

              <div className="why-list">
                {reasons.map((item, index) => (
                  <div className="why-item" key={index}>
                    <div className="why-icon">🛡️</div>
                    <div className="why-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="why-right">
              <div className="cta-card">
                <div className="cta-icon">🐞</div>
                <h3>Got a Pest Problem?</h3>
                <p>
                  Contact us today for a free inspection and quote. We'll help you
                  get rid of pests fast!
                </p>
                <a href="#contact" className="cta-btn">
                  Get Free Inspection
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
