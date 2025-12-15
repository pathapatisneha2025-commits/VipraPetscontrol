export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          height: 70px;
          background: linear-gradient(90deg, #050b14, #000);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          color: #fff;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: bold;
        }

        .nav-logo img {
          width: 40px;
          height: 40px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links li {
          cursor: pointer;
          color: #cfd8dc;
          font-size: 16px;
          transition: color 0.3s;
        }

        .nav-links li:hover,
        .nav-links .active {
          color: #1e90ff;
        }

        .nav-btn {
          background: #1e90ff;
          padding: 10px 18px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s;
        }

        .nav-btn:hover {
          background: #187bcd;
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-logo">
          <img src="/LogoImage.jpeg" alt="VIPRA" />
          <span>VIPRA</span>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <a href="tel:+919999999999" className="nav-btn">
          📞 Call Now
        </a>
      </nav>
    </>
  );
}
