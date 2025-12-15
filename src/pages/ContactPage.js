import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Poppins', sans-serif; }

        .contact-hero {
          min-height: 45vh;
          padding: 80px 60px;
          background: radial-gradient(circle at left, #1e2b1e, #050b14 60%);
          color: #fff;
        }

        .badge {
          display: inline-block;
          padding: 6px 14px;
          background: #1f2e1f;
          color: #9cff3d;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .contact-hero h1 {
          font-size: 56px;
          margin: 0 0 10px;
        }

        .contact-hero h1 span { color: #9cff3d; }

        .contact-hero p {
          max-width: 520px;
          color: #cfd6dd;
          font-size: 18px;
        }

        .contact-wrapper {
          padding: 60px;
          background: #050b14;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .card {
          background: linear-gradient(180deg, #0b1422, #070d18);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,.5);
          color: #fff;
        }

        .card h2 { margin-bottom: 25px; }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group { display: flex; flex-direction: column; gap: 8px; }

        .form-group.full { grid-column: span 2; }

        input, select, textarea {
          background: #121a2a;
          border: none;
          padding: 14px 16px;
          border-radius: 12px;
          color: #fff;
          font-size: 15px;
        }

        textarea { min-height: 120px; resize: none; }

        input::placeholder, textarea::placeholder { color: #8a93a3; }

        .send-btn {
          margin-top: 20px;
          background: #9cff3d;
          color: #000;
          border: none;
          padding: 16px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .info-card {
          background: linear-gradient(180deg, #0b1422, #070d18);
          border-radius: 18px;
          padding: 24px;
          color: #cfd6dd;
        }

        .info-card.active { border: 1px solid #9cff3d; }

        .icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #12213a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4aa3ff;
          margin-bottom: 14px;
          font-size: 18px;
        }

        .info-card h4 { color: #fff; margin-bottom: 8px; }

        @media (max-width: 900px) {
          .contact-wrapper { grid-template-columns: 1fr; padding: 30px; }
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full { grid-column: span 1; }
          .info-grid { grid-template-columns: 1fr; }
          .contact-hero h1 { font-size: 40px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero">
        <span className="badge">Contact Us</span>
        <h1>Get In <span>Touch</span></h1>
        <p>
          Have questions or need a quote? Reach out to us and our team will get
          back to you within 24 hours.
        </p>
      </section>

      {/* Content */}
      <section className="contact-wrapper">
        {/* Form */}
        <div className="card">
          <h2>Send Us a Message</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Your Name</label>
              <input placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input placeholder="+91 99999 99999" />
            </div>
            <div className="form-group full">
              <label>Email Address</label>
              <input placeholder="john@example.com" />
            </div>
            <div className="form-group full">
              <label>Service Required</label>
              <select>
                <option>Select a service</option>
                <option>Termite Control</option>
                <option>Bed Bug Control</option>
                <option>Rodent Control</option>
                <option>General Pest Control</option>
              </select>
            </div>
            <div className="form-group full">
              <label>Message</label>
              <textarea placeholder="Tell us about your pest problem..." />
            </div>
          </div>
          <button className="send-btn">
            <FaPaperPlane /> Send Message
          </button>
        </div>

        {/* Info */}
        <div className="info-grid">
          <div className="info-card active">
            <div className="icon"><FaPhoneAlt /></div>
            <h4>Phone</h4>
            <p>+91 99999 99999<br/>+91 88888 88888</p>
          </div>
          <div className="info-card">
            <div className="icon"><FaEnvelope /></div>
            <h4>Email</h4>
            <p>info@viprapestcontrol.com<br/>support@viprapestcontrol.com</p>
          </div>
          <div className="info-card">
            <div className="icon"><FaMapMarkerAlt /></div>
            <h4>Address</h4>
            <p>123 Main Street<br/>Chennai, Tamil Nadu 600001</p>
          </div>
          <div className="info-card">
            <div className="icon"><FaClock /></div>
            <h4>Working Hours</h4>
            <p>Mon – Sat: 8:00 AM – 8:00 PM<br/>Sunday: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
