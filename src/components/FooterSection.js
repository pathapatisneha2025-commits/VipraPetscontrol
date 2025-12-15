export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0b1625;
          padding: 70px 5% 30px;
          color: #a9b6c4;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-logo img {
          width: 48px;
          height: 48px;
          border-radius: 10px;
        }

        .footer-about p {
          font-size: 14px;
          line-height: 1.7;
        }

        .footer h4 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #a9b6c4;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #1e90ff;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          margin-bottom: 14px;
        }

        .contact-item span {
          color: #1e90ff;
          font-size: 16px;
          margin-top: 2px;
        }

        .footer-bottom {
          border-top: 1px solid #152238;
          padding-top: 20px;
          text-align: center;
          font-size: 14px;
          color: #8fa4b8;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .contact-item {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* ABOUT */}
            <div className="footer-about">
              <div className="footer-logo">
                <img src="/Logoimage.jpeg" alt="VIPRA Logo" />
                <strong style={{ color: "#fff" }}>VIPRA</strong>
              </div>
              <p>
                Your Shield Against Pests. Professional pest control services for
                homes and businesses.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4>Services</h4>
              <div className="footer-links">
                <a href="#">Termite Control</a>
                <a href="#">Mosquito Control</a>
                <a href="#">Cockroach Control</a>
                <a href="#">Rodent Control</a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4>Contact Us</h4>

              <div className="contact-item">
                <span>📞</span>
                <div>+1 (234) 567-890</div>
              </div>

              <div className="contact-item">
                <span>✉️</span>
                <div>info@vipra.com</div>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <div>
                  123 Pest Control Street,<br />
                  City, State 12345
                </div>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="footer-bottom">
            © 2025 VIPRA Pest Control. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
}
