export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: radial-gradient(circle at top, #0f1c2e, #050b14 70%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 5% 100px;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: auto;
        }

        /* ANIMATED BRAND TEXT */
        .brand-text {
          font-size: 90px;
          font-weight: 900;
          letter-spacing: 6px;
          margin-bottom: 30px;
          background: linear-gradient(90deg, #9be22d, #4aa3ff, #9be22d);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite, float 4s ease-in-out infinite;
          text-shadow: 0 0 30px rgba(155, 226, 45, 0.4);
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .hero h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 25px;
        }

        .hero h1 .green {
          color: #9be22d;
        }

        .hero h1 .blue {
          color: #4aa3ff;
        }

        .hero p {
          font-size: 18px;
          color: #cfd8dc;
          max-width: 720px;
          margin: 0 auto 45px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #9be22d;
          color: #000;
          padding: 16px 34px;
          border-radius: 40px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 0 30px rgba(155, 226, 45, 0.5);
        }

        .btn-primary:hover {
          background: #86c91f;
        }

        .btn-outline {
          border: 2px solid #4aa3ff;
          color: #4aa3ff;
          padding: 16px 34px;
          border-radius: 40px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-outline:hover {
          background: rgba(74, 163, 255, 0.1);
        }

        @media (max-width: 768px) {
          .brand-text {
            font-size: 54px;
          }

          .hero h1 {
            font-size: 42px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">

          {/* ANIMATED WORD INSTEAD OF LOGO */}
          <div className="brand-text">VIPRA</div>

          {/* HEADING */}
          <h1>
            Your <span className="green">Shield</span> Against{" "}
            <span className="blue">Pests</span>
          </h1>

          {/* SUBTEXT */}
          <p>
            Professional pest control services for homes and businesses. Safe,
            effective, and guaranteed results with eco-friendly solutions.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="tel:+919999999999" className="btn-primary">
              📞 Call For Free Inspection
            </a>

            <a href="#services" className="btn-outline">
              View Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
