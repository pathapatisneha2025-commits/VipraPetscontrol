import { Link } from "react-router-dom";

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

        /* NEW ANIMATED WORD LOGO */
        .animated-logo-text {
          font-size: 80px;
          font-weight: 900;
          letter-spacing: 8px;
          margin-bottom: 30px;
          display: inline-block;
          background: linear-gradient(to bottom, #ffffff, #9be22d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(155, 226, 45, 0.3));
          animation: floatText 4s ease-in-out infinite;
          text-transform: uppercase;
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
          transition: 0.3s;
        }

        .btn-primary:hover {
          background: #86c91f;
          transform: translateY(-3px);
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
          transition: 0.3s;
        }

        .btn-outline:hover {
          background: rgba(74, 163, 255, 0.1);
          transform: translateY(-3px);
        }

        @keyframes floatText {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            filter: drop-shadow(0 0 15px rgba(155, 226, 45, 0.3));
          }
          50% { 
            transform: translateY(-15px) scale(1.05); 
            filter: drop-shadow(0 15px 25px rgba(155, 226, 45, 0.5));
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 42px;
          }
          .animated-logo-text {
            font-size: 50px;
            letter-spacing: 4px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          {/* ANIMATED WORD LOGO REPLACING IMAGE */}
          <div className="animated-logo-text">
            VIPRA
          </div>

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

            <Link to="/services" className="btn-outline">
              View Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}