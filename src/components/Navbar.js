import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <img src="/Logoimage.jpeg" alt="VIPRA" />
        </Link>

        {/* HAMBURGER */}
        <button
          className="menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>

          {/* MOBILE CALL */}
          <li className="mobile-call">
            <a href="tel:+919999999999">📞 Call Now</a>
          </li>
        </ul>

        {/* DESKTOP CALL */}
        <a href="tel:+919999999999" className="call-btn">
          📞 Call Now
        </a>
      </div>

      {/* STYLES */}
      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 72px;
          background: linear-gradient(90deg, #050b14, #000);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: 0.3s ease;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .navbar.shrink {
          height: 62px;
        }

        .nav-container {
          max-width: 1300px;
          width: 100%;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo img {
          width: ${shrink ? "60px" : "75px"};
          transition: 0.3s ease;
        }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }

        .nav-links a {
          color: #cfd8dc;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
        }

        .nav-links a.active,
        .nav-links a:hover {
          color: #9be22d;
        }

        .call-btn {
          background: #9be22d;
          color: #000;
          padding: 12px 22px;
          border-radius: 30px;
          font-weight: 700;
          text-decoration: none;
        }

        /* HAMBURGER */
        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 30px;
          color: #fff;
          cursor: pointer;
          z-index: 1100;
        }

        .mobile-call {
          display: none;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .menu-btn {
            display: block;
          }

          .call-btn {
            display: none;
          }

          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            width: 100%;
            background: #050b14;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
          }

          .navbar.shrink .nav-links {
            top: 62px;
          }

          .nav-links.open {
            max-height: 420px;
            padding: 28px 0;
          }

          .mobile-call {
            display: block;
          }

          .mobile-call a {
            background: #9be22d;
            color: #000;
            padding: 12px 28px;
            border-radius: 30px;
            font-weight: 700;
          }
        }
      `}</style>
    </nav>
  );
}
