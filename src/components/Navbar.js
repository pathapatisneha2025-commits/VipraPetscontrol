import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          position: sticky;
          top: 0;
          z-index: 1000;
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

        /* HAMBURGER */
        .hamburger {
          display: none;
          font-size: 28px;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: #050b14;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 30px 0;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-btn {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* LOGO */}
        <div className="nav-logo">
          <img src="/Logoimage.jpeg" alt="VIPRA" />
          <span>VIPRA</span>
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li className="active" onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>About</li>
          <li onClick={() => setOpen(false)}>Services</li>
          <li onClick={() => setOpen(false)}>Contact</li>
        </ul>

      
        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>
      </nav>
    </>
  );
}
