export default function CtaSection() {
  return (
    <>
      <style>{`
        .cta-section {
          background: radial-gradient(
              circle at top,
              rgba(30, 144, 255, 0.15),
              transparent 60%
            ),
            linear-gradient(180deg, #050b14, #0b1625);
          padding: 120px 5%;
          text-align: center;
          color: #ffffff;
        }

        .cta-container {
          max-width: 900px;
          margin: auto;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .cta-desc {
          font-size: 16px;
          color: #a9b6c4;
          max-width: 620px;
          margin: 0 auto 42px;
          line-height: 1.6;
        }

        .cta-main-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1e90ff;
          color: #ffffff;
          padding: 16px 34px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(30, 144, 255, 0.35);
        }

        .cta-main-btn:hover {
          background: #187bcd;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(30, 144, 255, 0.45);
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 32px;
          }

          .cta-desc {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Protect Your Home?</h2>
          <p className="cta-desc">
            Don't let pests take over. Contact VIPRA today and enjoy a
            pest-free environment.
          </p>

          <a href="#contact" className="cta-main-btn">
            Contact Us Today <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
