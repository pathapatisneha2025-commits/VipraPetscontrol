const services = [
  {
    icon: "🪳",
    title: "Cockroach Control",
    desc: "Advanced gel baiting and odorless sprays target cockroaches in kitchens, bathrooms, and hidden cracks. Safe for kids & pets with long-lasting protection.",
  },
  {
    icon: "🦟",
    title: "Mosquito Control",
    desc: "Fogging, larvicide spraying, and outdoor control to stop breeding and protect against Dengue, Malaria, and Chikungunya.",
  },
  {
    icon: "🪲",
    title: "Termite Control (Pre & Post Construction)",
    desc: "Chemical barriers, drilling-injection methods, and soil treatment with 1–5 years service warranty available.",
  },
  {
    icon: "🛏️",
    title: "Bed Bug Control",
    desc: "Herbal + chemical two-step treatment eliminates bed bugs from mattresses, furniture, and curtains completely.",
  },
  {
    icon: "🐀",
    title: "Rat & Rodent Control",
    desc: "Traps, baiting systems, and entry-point blocking for homes, warehouses, restaurants, and offices.",
  },
  {
    icon: "🦎",
    title: "Lizard Control",
    desc: "Odorless surface sprays and repellents prevent lizards from entering or sticking to walls. Safe and highly effective.",
  },
  {
    icon: "🐝",
    title: "Honeybee Removal",
    desc: "Eco-friendly honeybee removal with safe relocation of hives by trained professionals.",
  },
  {
    icon: "🐜",
    title: "Red & Black Ant Control",
    desc: "Colony-targeting gel baits and odorless residual sprays to prevent re-infestation indoors and outdoors.",
  },
  {
    icon: "🐍",
    title: "Snake Repellent Treatment",
    desc: "Herbal repellents and environment-friendly chemicals keep snakes away without harming them.",
  },
  {
    icon: "🪵",
    title: "Oil Spray for Woodwork",
    desc: "Special oil-based treatment for furniture, doors, cupboards, and cabinets to prevent termites and moisture damage.",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          background: #050b14;
          padding: 100px 5%;
          color: #fff;
        }

        .services-container {
          max-width: 1200px;
          margin: auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-header h2 {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .services-header h2 span {
          color: #1e90ff;
        }

        .services-header p {
          color: #9fb0c0;
          font-size: 16px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background: linear-gradient(180deg, #0b1625, #050b14);
          border-radius: 18px;
          padding: 30px;
          border: 1px solid #111c2e;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 30px rgba(30, 144, 255, 0.25);
        }

        .service-icon {
          font-size: 38px;
          margin-bottom: 18px;
        }

        .service-card h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #1e90ff;
        }

        .service-card p {
          color: #cfd8dc;
          font-size: 15px;
          line-height: 1.6;
        }

        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .services-header h2 {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-container">

          <div className="services-header">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
              Complete pest control solutions for homes, apartments, offices, and commercial spaces
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
