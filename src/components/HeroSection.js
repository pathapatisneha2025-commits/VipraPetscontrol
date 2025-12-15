export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          background: #050b14;
          padding: 120px 5% 80px;
          color: #fff;
        }

        .hero-container {
          max-width: 1200px;
          margin: auto;
        }

        .hero-flex {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .hero-text {
          flex: 1;
          text-align: left;
        }

        .hero-text h1 {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .text-gradient {
          background: linear-gradient(90deg, #1e90ff, #4fc3f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text p {
          font-size: 18px;
          color: #cfd8dc;
          max-width: 520px;
          margin-bottom: 35px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-primary {
          background: #1e90ff;
          color: #fff;
          padding: 14px 30px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          animation: pulse 2s infinite;
        }

        .btn-primary:hover {
          background: #187bcd;
        }

        .btn-outline {
          border: 1px solid #2a3b4d;
          color: #fff;
          padding: 14px 30px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-outline:hover {
          background: #0b1625;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
        }

        .image-glow {
          position: absolute;
          inset: 0;
          background: rgba(30, 144, 255, 0.25);
          filter: blur(80px);
          border-radius: 50%;
        }

        .hero-image img {
          position: relative;
          width: 320px;
          height: 320px;
          object-fit: contain;
          border-radius: 24px;
          animation: float 4s ease-in-out infinite;
          box-shadow: 0 0 40px rgba(30, 144, 255, 0.35);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.6);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(30, 144, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0);
          }
        }

        @media (max-width: 900px) {
          .hero-flex {
            flex-direction: column;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 42px;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-flex">
            
            {/* LEFT CONTENT */}
            <div className="hero-text">
              <h1>
                Your <span className="text-gradient">Shield</span> Against Pests
              </h1>

              <p>
                Professional pest control services that protect your home and family.
                Say goodbye to unwanted pests with VIPRA's expert solutions.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">
                  Get Free Quote →
                </a>

                <a href="tel:+1234567890" className="btn-outline">
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="image-glow"></div>
                <img
                  src="/Logoimage.jpeg"
                  alt="VIPRA - Your Shield Against Pests"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
