const services = [
  {
    image: "/cockroaches.jpg",
    title: "Cockroach Control",
    desc: "Advanced gel baiting and odorless sprays target cockroaches in kitchens, bathrooms, and hidden cracks. Safe for kids & pets with long-lasting protection.",
    tags: ["Safe for kids & pets", "Long-lasting protection"],
  },
  {
    image: "/mosquitecontrol.jpg",
    title: "Mosquito Control",
    desc: "Fogging, larvicide spraying, and outdoor control to stop breeding and protect against Dengue, Malaria, and Chikungunya.",
    tags: ["Best for homes", "Outdoor control"],
  },
  {
    image: "/terminatecontrol.jpeg",
    title: "Termite Control (Pre & Post Construction)",
    desc: "Chemical barriers, drilling-injection methods, and soil treatment with 1–5 years service warranty available.",
    tags: ["Pre & Post Construction", "1–5 years warranty"],
  },
  {
    image: "/bedbug.jpeg",
    title: "Bed Bug Control",
    desc: "Herbal + chemical two-step treatment eliminates bed bugs from mattresses, furniture, and curtains completely.",
    tags: ["Herbal + chemical", "Complete removal"],
  },
  {
    image: "/ratandrodent.jpeg",
    title: "Rat & Rodent Control",
    desc: "Traps, baiting systems, and entry-point blocking for homes, warehouses, restaurants, and offices.",
    tags: ["Homes & warehouses", "Entry-point blocking"],
  },
  {
    image: "/lizardcontrol.jpeg",
    title: "Lizard Control",
    desc: "Odorless surface sprays and repellents prevent lizards from entering or sticking to walls. Safe and highly effective.",
    tags: ["Odorless spray", "Safe solution"],
  },
  {
    image: "/honeybee.jpeg",
    title: "Honeybee Removal",
    desc: "Eco-friendly honeybee removal with safe relocation of hives by trained professionals.",
    tags: ["Eco-friendly", "Safe relocation"],
  },
  {
    image: "/redanttreatment.jpeg",
    title: "Red & Black Ant Control",
    desc: "Colony-targeting gel baits and odorless residual sprays to prevent re-infestation indoors and outdoors.",
    tags: ["Colony targeting", "No re-infestation"],
  },
  {
    image: "/snaketreatment.jpeg",
    title: "Snake Repellent Treatment",
    desc: "Herbal repellents and environment-friendly chemicals keep snakes away without harming them.",
    tags: ["Herbal treatment", "Non-harmful"],
  },
  {
    image: "/oilspraywood.jpeg",
    title: "Oil Spray for Woodwork",
    desc: "Special oil-based treatment for furniture, doors, cupboards, and cabinets to prevent termites and moisture damage.",
    tags: ["Furniture protection", "Anti-termite"],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          background: radial-gradient(circle at top, #0b1625, #050b14);
          padding: 110px 5%;
          color: #fff;
        }

        .services-container {
          max-width: 1300px;
          margin: auto;
        }

        .services-badge {
          display: inline-block;
          background: rgba(155,226,45,0.15);
          color: #9be22d;
          padding: 6px 18px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-header h2 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .services-header p {
          max-width: 700px;
          margin: auto;
          color: #9fb0c0;
          font-size: 16px;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background: linear-gradient(180deg, #0b1625, #050b14);
          border-radius: 22px;
          padding: 34px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
        }

     .icon-box {
  width: 100%;
  display: flex;
  justify-content: left;
  margin-bottom: 22px;
}

.icon-box img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 16px;
  background: linear-gradient(135deg, #143b73, #0d2545);
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.45);
}

.icon-box span {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: linear-gradient(135deg, #143b73, #0d2545);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.45);
}


        .service-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .service-card p {
          font-size: 15px;
          color: #cfd8dc;
          line-height: 1.65;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .tag {
          background: rgba(155,226,45,0.14);
          color: #9be22d;
          padding: 6px 14px;
          font-size: 13px;
          border-radius: 999px;
          border: 1px solid rgba(155,226,45,0.25);
          font-weight: 600;
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
            font-size: 34px;
          }
        }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-container">

          <div className="services-header">
            <span className="services-badge">Our Services</span>
            <h2>Professional Pest Control Solutions</h2>
            <p>
              We offer comprehensive pest control services to protect your home
              and business from all types of pests.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
<div className="icon-box">
  {service.image ? (
    <img src={service.image} alt={service.alt || service.title} />
  ) : (
    <span>{service.icon}</span>
  )}
</div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <div className="tags">
                  {service.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
