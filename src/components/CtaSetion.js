export default function CtaSection() {
  return (
    <>
      <style>{`
        .cta-section {
          background: radial-gradient(circle at right, #1c2d14, #050b14 70%);
          padding: 120px 6%;
          text-align: center;
          color: #fff;
        }

        .cta-container {
          max-width: 900px;
          margin: auto;
        }

        .cta-container h2 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 22px;
        }

        .cta-container h2 span {
          color: #9be22d;
        }

        .cta-container p {
          font-size: 17px;
          color: #cfd8dc;
          max-width: 720px;
          margin: 0 auto 45px;
        }

        .cta-buttons {
          display: flex;
          gap: 22px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-call {
          background: #9be22d;
          color: #000;
          padding: 18px 38px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 0 30px rgba(155, 226, 45, 0.5);
        }

        .cta-call:hover {
          background: #86c91f;
        }

        .cta-message {
          border: 2px solid rgba(255,255,255,0.3);
          color: #fff;
          padding: 18px 36px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .cta-message:hover {
          background: rgba(255,255,255,0.08);
        }

        @media (max-width: 768px) {
          .cta-container h2 {
            font-size: 40px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-container">
          <h2>
            Ready to Make Your Home <span>Pest-Free?</span>
          </h2>

          <p>
            Contact us today for a free inspection and consultation. Our experts
            are ready to help you with all your pest control needs.
          </p>

          <div className="cta-buttons">
            <a href="tel:+919999999999" className="cta-call">
              📞 +91 99999 99999
            </a>

            <a href="#contact" className="cta-message">
              Send a Message →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
